var TabHandel = function () {


    var bindEnvent = function() {
        var internal = null;
        var n = 0;
        $('.btn_coloe_tab').click(function () {
            var url = this.parentNode.href;
            var id = url.substr(url.lastIndexOf('#')+1);
            //alert(id);
            this.parentNode.parentNode.style.display = 'none';
            $('#'+id).css("display","none");
            var a = $('#li_tab_1').attr('class');
            //alert(a);
            //alert(a.indexOf('active') == -1);
            if(a.indexOf('active') == -1) {
                $('#li_tab_1').addClass('active');
                $('#portlet_tab1').addClass("active");
            }



            if(internal!=null) clearInterval(internal);
            n = 0 ;
            internal =  setInterval(function(){
                if($('.tab-pane.active').css('display')=='none'){
                    $('#li_tab_1').addClass('active');
                    $('#portlet_tab1').addClass("active");
                    n++;
                    if(n==50){
                        clearInterval(internal);
                        n = 0;
                    }
                }
            },10);

        });

    }
    return {
        //main function to initiate the module
        init: function () {
            bindEnvent();

        }
    };

}();

TabHandel.init();