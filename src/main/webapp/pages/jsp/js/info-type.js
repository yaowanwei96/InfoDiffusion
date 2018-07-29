/**
 Address editable input.
 Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

 @class address
 @extends abstractinput
 @final
 @example
 <a href="#" id="address" data-type="address" data-pk="1">awesome</a>
 <script>
 $(function(){
    $('#address').editable({
        url: '/post',
        title: 'Enter city, street and building #',
        value: {
            city: "Moscow",
            street: "Lenina",
            building: "15"
        }
    });
});
 </script>
 **/
(function ($) {
    "use strict";

    var InfoType = function (options) {
        this.init('infotype', options, InfoType.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(InfoType, $.fn.editabletypes.abstractinput);

    $.extend(InfoType.prototype, {
        /**
         Renders input from tpl

         @method render()
         **/
        render: function() {
            this.$input = this.$tpl.find('input');
            this.$select = this.$tpl.find('select');
        },

        /**
         Default method to show value in element. Can be overwritten by display option.

         @method value2html(value, element)
         **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return;
            }
            var html = $('<div>').text(value.pid).html() + ', ' + $('<div>').text(value.typecode).html() + ' st., bld. ' + $('<div>').text(value.typename).html();
            $(element).html(html);
        },

        /**
         Gets value from element's html

         @method html2value(html)
         **/
        html2value: function(html) {
            /*
              you may write parsing method to get value by element's html
              e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
              but for complex structures it's not recommended.
              Better set value directly via javascript, e.g.
              editable({
                  value: {
                      city: "Moscow",
                      street: "Lenina",
                      building: "15"
                  }
              });
            */
            return null;
        },

        /**
         Converts value to string.
         It is used in internal comparing (not for sending to server).

         @method value2str(value)
         **/
        value2str: function(value) {
            var str = '';
            if(value) {
                for(var k in value) {
                    str = str + k + ':' + value[k] + ';';
                }
            }
            return str;
        },

        /*
         Converts string to value. Used for reading value from 'data-value' attribute.

         @method str2value(str)
        */
        str2value: function(str) {
            /*
            this is mainly for parsing value defined in data-value attribute.
            If you will always set value by javascript, no need to overwrite it
            */
            return str;
        },

        /**
         Sets value of input.

         @method value2input(value)
         @param {mixed} value
         **/


          value2input: function(value) {

            if(!value) {
                return;
            }

            var str = '<option value="-1">信息类别</option>';
            var params={};
            params.pid ="-1";
            $.ajax({
                async: false,
                type: "POST",
                url: "../../noticeType/tree",//注意路径
                data: params,
                dataType: "json",
                success: function (data) {
                    fs(data,0);
                   function fs(data,n){
                       if(data == null) return ;

                       var ss = '';
                       for(var i = 0 ; i< n;i++){
                           ss+='&nbsp;&nbsp;&nbsp;&nbsp;';
                       }
                       for(var a = 0 ; a < data.length;a++){


                           str+='<option value="'+data[a].id+'"  '+(value.pid==data[a].id?"selected":"" )+' >'+ss+data[a].text+'</option>';
                           fs(data[a].children,n+1);
                       }

                   }

                    console.log(JSON.stringify(data,null,4));
                    console.log(str);
                },error:function(data){
                    showInfo("删除失败",'danger');
                }
            });
            this.$select.html(str);
           // alert(str);
            this.$select.filter('[name="pid"]').val(value.pid);
            this.$input.filter('[name="typecode"]').val(value.typecode);
            this.$input.filter('[name="typename"]').val(value.typename);

        },

        /**
         Returns value of input.

         @method input2value()
         **/
        input2value: function() {
            return {
                pid: this.$select.filter('[name="pid"]').val(),
                typecode: this.$input.filter('[name="typecode"]').val(),
                typename: this.$input.filter('[name="typename"]').val()
            };
        },

        /**
         Activates input: sets focus on the first field.

         @method activate()
         **/
        activate: function() {
            this.$select.filter('[name="pid"]').focus();
        },

        /**
         Attaches handler to submit form in case of 'showbuttons=false' mode

         @method autosubmit()
         **/
        autosubmit: function() {
            this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
            });
        }
    });



    InfoType.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-address"><label><span>所属类型: </span><select  name="pid" class="form-control input-small  "><option value="1">渔业医院</option><option value="2">养殖课堂</option></select></label></div>'+
        '<div class="editable-address" style="display: none" ><label><span></span><input type="text"  readonly  name="typecode" class="form-control input-small" /></label></div>'+
        '<div class="editable-address"><label><span>类型名称: </span><input type="text" name="typename" class="form-control input-small"></label></div>',
        inputclass: ''
    });
    $.fn.editabletypes.infotype = InfoType;

}(window.jQuery));