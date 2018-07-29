/**
 * Created by Software1 on 2018/1/15.
 */
/**
 * Created by root on 2018-01-12.
 */
var NoticeList=function(){

    function showinfo(type,info){
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
    var handleSample = function () {



        //点击预览按钮事件 显示输入的内容
        $("#btn_preview").click(function() {
            //设置标题
            if($('#notice_title').val()==""){
                showinfo("warning","标题不能为空");
                return;
            }
            $("#n_title").html($('#notice_title').val());

            //设置描述
            $("#n_desc").html($('#notice_desc').val());

            //设置时间

            //设置内容
            $("#n_uri").html( $('#summernote_1').code());

            //显示预览界面
            $('#largeModal').modal('show');
        });

        //点击登出按钮
        $("#login_out").click(function(){
                var params = {};
            //清除登陆信息，返回登陆界面
                $.ajax({
                async: false,//false为同步提交，true为异步提交
                type: "POST",//请求方式
                url: "../../user/login_out",//注意路径
                data: params,//data是json数组的方式，也可以直接在data:{}的方式写出来
                dataType: "json",
                success: function (data) {//
                    window.open("login.jsp","_self");
                },
                error: function (data) {
                    console.log(JSON.stringify(data,null,4));
                    window.open("login.jsp","_self");
                }
            });

        });


    }
    return {
        //main function to initiate the module
        init: function () {
            handleSample();
        }

    };
}();