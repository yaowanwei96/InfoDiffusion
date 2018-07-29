<%@ page contentType="text/html;charset=UTF-8" language="java"
         pageEncoding="utf-8" isELIgnored="false" %>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>新闻发布平台登录</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css"/>
    <link href="../../assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="../../assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
    <link href="../../assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="../../assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>

    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN PAGE LEVEL STYLES -->
    <link href="../../assets/global/plugins/select2/select2.css" rel="stylesheet" type="text/css"/>
    <link href="../../assets/admin/pages/css/login-soft.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="../../assets/global/plugins/bootstrap-toastr/toastr.min.css"/>

    <!-- END PAGE LEVEL SCRIPTS -->
    <!-- BEGIN THEME STYLES -->
    <link href="../../assets/global/css/components-rounded.css" id="style_components" rel="stylesheet" type="text/css"/>
    <link href="../../assets/global/css/plugins.css" rel="stylesheet" type="text/css"/>
    <link href="../../assets/admin/layout/css/layout.css" rel="stylesheet" type="text/css"/>
    <link id="style_color" href="../../assets/admin/layout/css/themes/default.css" rel="stylesheet" type="text/css"/>
    <link href="../../assets/admin/layout/css/custom.css" rel="stylesheet" type="text/css"/>

    <!-- END THEME STYLES -->
    <link rel="shortcut icon" href="favicon.ico"/>
    <link rel="stylesheet" href="css/login.css">
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="login">
<!-- BEGIN LOGO -->
<div class="page-logo">
    <h3 class="loginh3">头条新闻管理平台
    </h3>
</div>
<!-- END LOGO -->
<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
<div class="menu-toggler sidebar-toggler">
</div>
<!-- END SIDEBAR TOGGLER BUTTON -->
<!-- BEGIN LOGIN -->
<div class="content" id="content">
    <!-- BEGIN LOGIN FORM -->
    <form class="login-form" action="#" method="post">
        <h3 class="loginh3">登录</h3>
        <div class="alert alert-danger display-hide">
            <button class="close" data-close="alert"></button>
            <span>
			输入用户名和密码 </span>
        </div>
        <div class="form-group">
            <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
            <label class="control-label visible-ie8 visible-ie9">用户名</label>
            <div class="input-icon">
                <i class="fa fa-user"></i>
                <input id="name" name="name" class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名" />
            </div>
        </div>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">密码</label>
            <div class="input-icon">
                <i class="fa fa-lock"></i>
                <input id="password" name="password" class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="密码"/>
            </div>
        </div>
        <div class="form-group">
            <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
            <label class="control-label visible-ie8 visible-ie9">Identity</label>
            <div class="input-icon">
                <i class="fa fa-male"></i>
                <!--<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Identity" name="identity"/>-->
                <select name="country" id="roletype" class="select2 form-control"  placeholder="Identity" name="identity" style="color: #AAA">
                    <option value="1">管理员</option>
                </select>
            </div>
        </div>
        <div class="form-actions">

            <button id="btn_login" type="button" class="btn blue pull-right">
                Lgion <i class="m-icon-swapright m-icon-white"></i>
            </button>
        </div>
        <%--<div class="form-actions">
            <label class="checkbox">
                <input type="checkbox" name="remember" value="1"/> 记住密码 </label>
            <button id="btn_login" type="button" class="btn blue pull-right">
                Lgion <i class="m-icon-swapright m-icon-white"></i>
            </button>
        </div>
        <span class="errorMessage"></span>
        <div class="login-options">
            <h4>用以下方式登陆</h4>
            <ul class="social-icons">
                <li>
                    <a class="facebook" data-original-title="facebook" href="javascript:;">
                    </a>
                </li>
                <li>
                    <a class="twitter" data-original-title="Twitter" href="javascript:;">
                    </a>
                </li>
                <li>
                    <a class="googleplus" data-original-title="Goole Plus" href="javascript:;">
                    </a>
                </li>
                <li>
                    <a class="linkedin" data-original-title="Linkedin" href="javascript:;">
                    </a>
                </li>
            </ul>
        </div>
        <div class="forget-password">
            <h4>忘记密码？</h4>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 点击 <a href="javascript:;" id="forget-password">
                这里 </a>
                重置密码
            </p>
        </div>--%>
        <div class="create-account">
            <p>
                还没注册？&nbsp; <a href="javascript:;" id="register-btn">
                点击注册 </a>
            </p>
        </div>
    </form>
    <!-- END LOGIN FORM -->

    <!-- BEGIN FORGOT PASSWORD FORM -->
    <%--<form class="forget-form" action="index.jsp" method="post">
        <h3>忘记密码 ?</h3>
        <p>
            点击进入邮箱重置密码.
        </p>
        <div class="form-group">
            <div class="input-icon">
                <i class="fa fa-envelope"></i>
                <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email" name="email"/>
            </div>
        </div>
        <div class="form-actions">
            <button type="button" id="back-btn" class="btn">
                <i class="m-icon-swapleft"></i> Back </button>
            <button type="submit" class="btn blue pull-right">
                Submit <i class="m-icon-swapright m-icon-white"></i>
            </button>
        </div>
    </form>--%>
    <!-- END FORGOT PASSWORD FORM -->


    <!-- BEGIN REGISTRATION FORM -->
    <form class="register-form">

        <div class=".table1">
            <img class="timg" src="../../assets/admin/layout/img/avatar6.jpg" width="100"; height="100">
        </div>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Nick Name</label>
            <div class="input-icon">
                <i class="fa fa-font"></i>
                <input id="nickname" class="form-control placeholder-no-fix" type="text" placeholder="昵称" name="nickname"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Username</label>
            <div class="input-icon">
                <i class="fa fa-user"></i>
                <input id="username" class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="姓名" name="username"/>
            </div>
        </div>
        <div class="form-group">
            <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
            <label class="control-label visible-ie8 visible-ie9">Phone</label>
            <div class="input-icon">
                <i class="fa fa-phone"></i>
                <input id="phone" class="form-control placeholder-no-fix" type="text" placeholder="电话" name="phone"/>
            </div>
        </div>
        <div class="form-group">
            <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
            <label class="control-label visible-ie8 visible-ie9">Email</label>
            <div class="input-icon">
                <i class="fa fa-envelope"></i>
                <input id="email" class="form-control placeholder-no-fix" type="text" placeholder="邮箱" name="email"/>
            </div>
        </div>
        <div class="form-group">
            <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
            <label class="control-label visible-ie8 visible-ie9">Sex</label>
            <div class="input-icon">
                <i class="fa fa-male"></i>
                <!--<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Identity" name="identity"/>-->
                <select id="sex" name="country" class="select2 form-control"style="color: #AAA">
                    <option value="1">男</option>
                    <option value="0">女</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Password</label>
            <div class="input-icon">
                <i class="fa fa-lock"></i>
                <input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="register_password" placeholder="密码" name="password"/>
            </div>
        </div>
        <div class="form-group">
            <label id="register_pwd2" class="control-label visible-ie8 visible-ie9">再次输入密码</label>
            <div class="controls">
                <div class="input-icon">
                    <i class="fa fa-check"></i>
                    <input id="rpassword" class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="再次输入密码" name="rpassword"/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>
                <input id="tnc" type="checkbox" name="tnc"/> 我同意 <a href="javascript:;">
                这条服务 </a>
                和 <a href="javascript:;">
                隐私条约 </a>
            </label>
            <div id="register_tnc_error">
            </div>
        </div>
        <div class="form-actions">
            <button id="register-back-btn" type="button" class="btn">
                <i class="m-icon-swapleft"></i> 返回 </button>
            <button type="button" id="register-submit-btn1" class="btn blue pull-right">
                注册 <i class="m-icon-swapright m-icon-white"></i>
            </button>
        </div>
    </form>
    <!-- END REGISTRATION FORM -->
</div>
<!-- END LOGIN -->
<!-- BEGIN COPYRIGHT -->
<div class="copyright">
    2017 &copy; 南昌大学
</div>
<!-- END COPYRIGHT -->
<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="../../assets/global/plugins/respond.min.js"></script>
<script src="../../assets/global/plugins/excanvas.min.js"></script>
<![endif]-->
<script src="../../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery.cokie.min.js" type="text/javascript"></script>

<script src="../../assets/global/plugins/bootstrap-growl/jquery.bootstrap-growl.min.js"></script>
<!-- END PAGE LEVEL SCRIPTS -->
<script src="../../assets/admin/pages/scripts/ui-bootstrap-growl.js"></script>
<!-- END CORE PLUGINS -->
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script src="../../assets/global/plugins/jquery-validation/js/jquery.validate.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
<script type="text/javascript" src="../../assets/global/plugins/select2/select2.min.js"></script>
<script src="js/plugins/md5/md5.js" ></script>
<script src="../../assets/global/plugins/bootstrap-toastr/toastr.min.js"></script>

<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="../../assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="../../assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="../../assets/admin/layout/scripts/demo.js" type="text/javascript"></script>
<script src="js/login.js"></script>
<script src="js/login-validate.js"></script>


<!-- END PAGE LEVEL SCRIPTS -->
<script>
    jQuery(document).ready(function() {
        Metronic.init(); // init metronic core components
        Layout.init(); // init current layout
        Login.init();
        Demo.init();
        LoginSe.init();
        // init background slide images
        $.backstretch([
                    "../../assets/admin/pages/media/bg/1.jpg",
                    "../../assets/admin/pages/media/bg/2.jpg",
                    "../../assets/admin/pages/media/bg/3.jpg",
                    "../../assets/admin/pages/media/bg/4.jpg"
                ], {
                    fade: 1000,
                    duration: 8000
                }
        );
    });
</script>
<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>