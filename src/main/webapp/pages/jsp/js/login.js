var LoginSe=function(){
    var handleSample = function () {

        //点击登陆按钮登陆
        $("#btn_login").click(function () {
            //获取输入框中内容
            var params = {};
            params.code = $("#name").val();
            params.pwd = md5($("#password").val());
            params.roleCode = $("#roletype").val();
            console.log(JSON.stringify(params,null,4));
            $.ajax({
                async: false,
                type: "POST",
                url: "../../user/login",//注意路径
                data: params,
                dataType: "json",
                success: function (data) {

                    if(data!=null){
                        //alert("login success");
                        window.open("notice.jsp","_self");

                    }else{
                        showInfo("error","账号密码错误");
                    }
                },
                error: function (data) {
                    //alert("login failed");
                    showInfo("error","登录失败");
                }
            });
        });


        //点击注册按钮
        $("#register-submit-btn1").click(function () {
            //获取输入框中内容
            if($("#register_password").val() != $("#rpassword").val()){
                showInfo("error","两次密码不一致！！");
                return ;
            }


            var params = {};
            params.user_nickname = $("#nickname").val();
            params.user_phone = $("#phone").val();
            params.user_code = $("#email").val();
            params.user_sex =  ($("#sex").val());
            params.user_name = $("#username").val();
            params.user_headpic = "";
            params.user_pwd = md5($("#register_password").val());
            console.log(JSON.stringify(params, null, 4));
            $.ajax({
                async: false,//false为同步提交，true为异步提交
                type: "POST",//请求方式
                url: "../../user/register",//注意路径
                data: params,//data是json数组的方式，也可以直接在data:{}的方式写出来
                dataType: "json",
                success: function (data) {//

                    $("#nickname").val('');
                    $("#phone").val('');
                    $("#email").val('');
                    $("#sex").val('');
                    $("#username").val('');
                    $("#register_password").val('');
                    $("#rpassword").val('');
                    showInfo("success","注册成功！！");
                },
                error: function (data) {
                    console.log(JSON.stringify(data,null,4));
                    showInfo("success","注册失败！！");
                }
            });
        });


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
    }
    return {
        //main function to initiate the module
        init: function () {
            handleSample();
        }

    };
}();