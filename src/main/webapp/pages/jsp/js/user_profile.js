/**
 * Created by Software1 on 2018/1/15.
 */
/**
 * Created by root on 2018-01-12.
 */
var UserProfileEdit=function(){


    var handleSample = function () {


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

        //修改用户信息
        $("#user_profile_update_btn").click(function() {
            var params = {};
            params.user_nickname = $("#user_nickname_edit").val();
            params.user_phone = $("#user_phone_edit").val();
            params.user_code = $("#user_code_edit").val();
            params.user_sex =  ($("#user_sex_edit").val());
            params.user_name = $("#user_name_edit").val();
            console.log(JSON.stringify(params, null, 4));
            $.ajax({
                async: false,//false为同步提交，true为异步提交
                type: "POST",//请求方式
                url: "../../user/updateMsg",//注意路径
                data: params,//data是json数组的方式，也可以直接在data:{}的方式写出来
                dataType: "json",
                success: function (data) {
                    window.location.reload();
                    showInfo("success","信息修改成功！！");
                },
                error: function (data) {
                    console.log(JSON.stringify(data,null,4));
                    alert("信息修改失败!");
                }
            });
        });
        //修改用户密码
        $("#change_pwd_btn").click(function() {
            if($("#newPwd").val() != $("#re_newPwd").val()){
                showInfo("error","两次密码不一致！！");
                return ;
            }
            var params = {};
            params.user_code = $("#user_code_edit").val();
            params.current_pwd = md5($("#currentPwd").val());
            params.user_pwd = md5($("#newPwd").val());
            console.log(JSON.stringify(params, null, 4));
            $.ajax({
                async: false,//false为同步提交，true为异步提交
                type: "POST",//请求方式
                url: "../../user/updatePwd",//注意路径
                data: params,//data是json数组的方式，也可以直接在data:{}的方式写出来
                dataType: "json",
                success: function (data) {
                    $("#currentPwd").val("");
                    $("#newPwd").val("");
                    $("#re_newPwd").val("");
                    showInfo("success","修改密码成功！！");

                },
                error: function (data) {
                    console.log(JSON.stringify(data,null,4));
                    alert("修改密码失败!");
                }
            });

        });

        //修改用户头像
        $('#user_headpic_update_btn').click(function () {
            var formData = new FormData($("#user_headpic_update" )[0]);
            //alert(formData);
            var ok = false;
            $.ajax({
                url: '../../file/upload_headpic' ,
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (returndata) {
                    console.log(JSON.stringify(returndata,null,4));
                    window.location.reload();
                    showInfo('success','头像修改成功！');
                },
                error: function (returndata) {
                    showInfo('error','头像修改失败！');
                    console.log(JSON.stringify(returndata,null,4));
                }
            });


        });



    }

    /*var handleUserMsgEdit = function () {
        function format(state) {
            if (!state.id) return state.text; // optgroup
            return "<img class='flag' src='../../assets/global/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
        }
        $("#select2_sample4").select2({
            placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
            allowClear: true,
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function (m) {
                return m;
            }
        });
        $('#select2_sample4').change(function () {
            $('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
        });
        $('#form_userMsg_edit').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                user_nickname_edit: {
                    required: true
                },
                user_phone_edit: {
                    required: true,
                    number:true
                },
                user_sex_edit: {
                    required: true
                },
                user_name_edit: {
                    required: true
                },

            },
            messages: { // custom messages for radio buttons and checkboxes

                user_nickname_edit: {
                    required: "用户名不能为空."
                },
                user_phone_edit: {
                    required: "手机号不能为空."
                },

            },

            invalidHandler: function (event, validator) { //display error alert on form submit

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container
                    error.insertAfter($('#register_tnc_error'));
                } else if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.register-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });


    }*/
    return {
        //main function to initiate the module
        init: function () {
            handleSample();
           // handleUserMsgEdit();
        }

    };
}();