var UserProfile = function () {
    //处理更新用户信息js部分
    var handleLogin = function() {
        $('.user_msg_update ').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                user_nickname_edit: {
                    required: true
                },
                user_phone_edit: {
                    required: true,
                    number:true
                },
                user_name_edit: {
                    required: true
                },
            },
            messages: {
                user_nickname_edit: {
                    required: "姓名不能为空."
                },
                user_name_edit: {
                    required: "用户名不能为空."
                },
                user_phone_edit: {
                    required: "手机号不能为空."
                }

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
                if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },


            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.user_msg_update  input').blur(function (e) {

             $('.user_msg_update ').validate().form()

        });
    }
    var handlePwd=function(){
        $('.user_pwd_update').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                currentPwd: {
                    required: true
                },
                newPwd: {
                    required: true
                },
                re_newPwd: {
                    equalTo: "#newPwd"
                },

            },
            messages: {
                currentPwd: {
                    required: "当前密码不能为空."
                },
                newPwd: {
                    required: "新密码不能为空."
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
                if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.user_pwd_update input').blur(function (e) {

            $('.user_pwd_update').validate().form();

        });
    }
    //处理注册
    /*var handleRegister = function () {
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
        $('.register-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                nickname: {
                    required: true
                },
                phone: {
                    required: true,
                    number:true
                },
                email: {
                    required: true,
                    email: true
                },
                sex: {
                    required: true
                },
                username: {
                    required: true
                },

                register_password: {
                    required: true
                },
                rpassword: {
                    equalTo: "#register_password"
                },

                tnc: {
                    required: true
                }
            },

            messages: { // custom messages for radio buttons and checkboxes
                tnc: {
                    required: "请先点击我同意."
                },
                username: {
                    required: "用户名不能为空."
                },
                password: {
                    required: "密码不能为空."
                },
                phone: {
                    required: "手机号不能为空."
                },
                email: {
                    required: "邮箱不能为空."
                }
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

        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    }*/

    return {
        init: function () {
            handleLogin();
            handlePwd();
        }
    };

}();