var JSSTree = function () {






    //初始化新闻类别
    var handleSample2 = function () {



        $('#tree_2').data('jstree', false);

        var params={};
        params.pid = "-1";
        $.ajax({
            async: false,
            type: "post",
            url: "../../noticeType/tree",//注意路径
            data: params,
            dataType: "json",
            success: function (data) {

                console.log(JSON.stringify(data,null,4));

                $('#tree_2').jstree({
                    'plugins': ["wholerow",  "types"],
                    'core': {
                        "themes" : {
                            "responsive": false
                        },
                        'data': data
                    },
                    "types" : {
                        "default" : {
                            "icon" : "fa fa-folder icon-state-warning icon-lg"
                        },
                        "file" : {
                            "icon" : "fa fa-file icon-state-warning icon-lg"
                        }
                    }
                });

            },
            error: function (data) {
                console.log(JSON.stringify(data,null,4));
            }
        });



    }

    //刷新新闻类别部分
    function refresh(){
        var tree = $('#tree_2');
        var params={};
        params.pid = "-1";
        $.ajax({
            async: false,
            type: "post",
            url: "../../noticeType/tree",//注意路径
            data: params,
            dataType: "json",
            success: function (data) {
                tree.jstree(true).settings.core.data = data;
                tree.jstree(true).refresh(); //刷新树
            }
        });

    }


    top.dateFtt = function (fmt, date) {
        //author: meizz
        var o = {
            "M+" : date.getMonth()+1,                 //月份
            "d+" : date.getDate(),                    //日
            "h+" : date.getHours(),                   //小时
            "m+" : date.getMinutes(),                 //分
            "s+" : date.getSeconds(),                 //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    };


    var cid = '';
    var cname = '';
    var childs =null;
    var pid = '-1';
    var cli ;
    var ls = '';
    var valueAlter = {pid: "",typecode: "",typename: ""};
    var valueAdd = {pid: "-1",typecode: "",typename: ""};

    function showInfo(type,info){
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "1000",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

        toastr[type](info,'' );
    }

    var bindTreeEvent = function() {

        $("#tree_2").on('changed.jstree', function (e, data) {

            if(pid=='-1') {
                $('#btn_delete').removeClass('displaynone');
                $('#infotype_alter').removeClass('displaynone');
                $('#div_distr').removeClass('displaynone');
                $('#div_help').addClass('displaynone');

            }

            var obj = data.instance.get_node(data.selected[0]);
            cid = obj.id;
            cname = obj.text;
            childs = obj.children;
            pid = obj.parent;

            $('#selectList').val(obj.id);
            $('#selectList').trigger('change');

            valueAlter.pid = pid=='#'? '-1':pid;
            valueAlter.typecode = obj.id;
            valueAlter.typename = obj.text;
            valueAdd.pid = obj.id;


        }).jstree();

                //双击事件
        $("#tree_2").bind("dblclick.jstree", function (e, data) {

            if(childs.length!=0) return;
            var params = {};
            $('#main_loader').removeClass('displaynone');
            $("#cid").val(cid);
            params.noticetype_code = cid;
            params.user_code= $('#user_code_noticejsp').val();
            //alert("user_code:"+params.user_code);
            $.ajax({
                async: false,
                type: "POST",
                url: "../../notice/selectType",
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data!=null){
                       //  alert("获取数据成功");
                        console.log(JSON.stringify(data,null,4));
                        //更新界面的html
                        var dt = $('#sample_editable_1').dataTable();
                        $('#sample_editable_1').dataTable().fnClearTable();
                        var str="";
                        var noticeStatus="daishenhe";
                        console.log(noticeStatus+"status")
                        for(var i=0;i<data.length;i++){
                            var noticeDate=top.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(data[i].notice.notice_date));
                            if(data[i].notice.notice_status==0){
                                noticeStatus="待审核";
                            }
                            if(data[i].notice.notice_status==-1){
                                noticeStatus="未通过";
                            }
                            if(data[i].notice.notice_status==1){
                                noticeStatus="已通过";
                            }
                            console.log(noticeStatus+"status")
                            dt.fnAddData([
                                '<a id="'+data[i].notice.notice_code+'">'+data[i].notice.notice_title+'</a>',
                                data[i].noticetype.noticetype_name,
                                data[i].user.user_name,
                                noticeDate,
                                noticeStatus,
                                data[i].notice.notice_readtimes,
                                '<a class="edit" href="javascript:;"><i class="icon-note"></i>&nbsp;编辑 </a>',
                                '<a class="delete"><i class="icon-trash"></i>&nbsp;删除 </a>	'
                            ]);
                        }
                        $('#main_loader').addClass('displaynone');
                    }else{
                        showInfo("error","数据获取失败");
                    }
                },
                error: function (data) {
                    //alert("login failed");
                    showInfo("error","数据获取失败");
                }
            });
            var ba =$('.tab-pane.active');
            var bb =$('._li.active');

            ba.removeClass('active');
            bb.removeClass('active');
            $('#li_tab_3').addClass('active');
            $('#portlet_tab_3').addClass("active");//首页注释



                //之前做的点击页面关闭 事件
            /*if(ls.indexOf(''+cid)==-1) {
                ls=ls+"+"+cid;
                var node = '<li id="li_' + cid + '" class=" _li " >\n' +
                    '<a id="' + cid + '" href="' + '#portlet_tab' + cid + '"  data-toggle="tab">\n' +
                    cname + '<i  class="btn  fa fa-times-circle float-right padding-top-3 hover-color-red btn_coloe_tab"></i></a>\n' +
                    '</li>';
                $('#li_tabs').append(node);
                var divnode = '<div class="tab-pane"  id="portlet_tab' + cid + '">' + cname + '</div>'
                $("#tab-content").append(divnode);
            }

            var internal = null;
            var n = 0;
            //
            var ba =$('.tab-pane.active');
            var bb =$('._li.active');

            ba.removeClass('active');
            bb.removeClass('active');
            n = 0 ;
            internal =  setInterval(function(){
                $('#portlet_tab'+cid).addClass('active');
                $('#li_'+cid).addClass('active');
                n++;
                if(n>20){
                    n=0;
                    clearInterval(internal);
                }
            },10);



            //设置页面关闭事件
            $('.btn_coloe_tab').click(function () {

                var url = this.parentNode.href;
                var id = url.substr(url.lastIndexOf('#')+1);

                this.parentNode.parentNode.style.display = 'none';
                cli = this.parentNode.parentNode;
                cli.remove();
                $('#'+id).remove();
                var cc= id.substr(11);
                ls = ls.replace('+'+cc,'');
                var aa =$('.tab-pane.active');
                var bc =$('._li.active');
                if(aa.attr('class')== null && bc.attr('class')==null) {
                    var a = $('#li_tab_1').attr('class');
                    $('#li_tab_1').addClass('active');
                    $('#portlet_tab1').addClass("active");
                }

            });*/

        });

    }

    var bindEnvent = function() {

        //类别修改
        $('#infotype_alter').editable({
            url: '/post',
            value: valueAlter,
            validate: function (value) {
                if (value.typename == '') return '类别名称不能空！';
                //alert(JSON.stringify(value,null,4));
                var params={};
                params.noticetype_code = value.typecode;
                params.not_noticetype_code = value.pid;
                params.noticetype_name = value.typename;
                $.ajax({
                    async: false,
                    type: "POST",
                    url: "../../noticeType/update",//注意路径
                    data: params,
                    dataType: "json",
                    success: function (data) {

                        if(data){
                            showInfo("success","修改成功",'success');

                            refresh();
                            bindTreeEvent();


                        }else{
                            showInfo("error","修改失败");
                        }

                    },error:function(data){
                        showInfo("error","修改失败");
                    }
                });
            },
            display: function (value) {
                if (!value) {
                    $(this).empty();
                    return;
                }
                $(this).html('&nbsp;');
            }
        });


        //类别增加
        $('#infotype_add').editable({
            url: '/post',
            value: valueAdd,
            validate: function (value) {
                if (value.typename == '') return '类别名称不能空！';
                var params={};
                params.not_noticetype_code = value.pid;
                params.noticetype_name = value.typename;
                $.ajax({
                    async: false,
                    type: "post",
                    url: "../../noticeType/add",//注意路径
                    data: params,
                    dataType: "json",
                    success: function (data) {
                        if(data){
                            showInfo("success","添加成功");

                            refresh();
                            /*handleSample2();*/
                            bindTeeEvent();

                        }else{
                            showInfo("error","添加失败");
                        }

                    },error:function(data){
                        showInfo("error","添加失败");
                    }
                });
            },
            display: function (value) {
                if (!value) {
                    $(this).empty();
                    return;
                }
                //var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
                //$(this).html(html);
                // alert(value);
                $(this).html('&nbsp;');
            }
        });


        //删除类别
        $('#btn_delete').on('confirmed.bs.confirmation', function () {

            var params={};
            params.noticetype_code = cid;
            $.ajax({
                async: false,
                type: "POST",
                url: "../../noticeType/delete",//注意路径
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data){
                        showInfo("success","删除成功");
                        refresh();
                        bindTeeEvent();
                    }else{
                        showInfo("error","删除失败");
                    }

                },error:function(data){
                    showInfo("error","删除失败");
                }
            });


        });

    }
    return {
        //main function to initiate the module
        init: function () {

            handleSample2();
            bindTreeEvent();
            bindEnvent();

        }
    };

}();

JSSTree.init();