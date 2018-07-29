<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Software1
  Date: 2018/1/17
  Time: 12:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>

<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">


<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8">
    <title>新闻发布系统</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta content="" name="description">
    <meta content="" name="author">
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css">
    <link href="../../assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="../../assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css">
    <link href="../../assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="../../assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css">


    <link rel="shortcut icon" href="favicon.ico">
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<!-- DOC: Apply "page-header-menu-fixed" class to set the mega menu fixed  -->
<!-- DOC: Apply "page-header-top-fixed" class to set the top menu fixed  -->
<body>
<!-- BEGIN HEADER -->
<div class="page-header height-80" >
    <!-- BEGIN HEADER TOP -->
    <div class="page-header-top height-auto">
        <div class="container">
            <!-- BEGIN LOGO -->
            <div class="page-logo " style="width: 300px;">
                <h3>头条新闻管理平台
                    <br /><small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------头条新闻-------</small></h3>
            </div>
            <!-- END LOGO -->
            <!-- BEGIN TOP NAVIGATION MENU -->
            <div class="top-menu">
                <ul class="nav navbar-nav pull-right">

              <%--      <li class="dropdown dropdown-extended dropdown-dark dropdown-inbox" id="header_inbox_bar">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <span class="circle">3</span>
                            <span class="corner"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="external">
                                <h3>You have <strong>3 New</strong> Messages</h3>
                                <a href="javascript:;">view all</a>
                            </li>
                            <li>
                                <ul class="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
                                    <li>
                                        <a href="inbox.html?a=view">
										<span class="photo">
										<img src="../../assets/admin/layout3/img/avatar2.jpg" class="img-circle" alt="">
										</span>
										<span class="subject">
										<span class="from">
										Lisa Wong </span>
										<span class="time">Just Now </span>
										</span>
										<span class="message">
										Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="inbox.html?a=view">
										<span class="photo">
										<img src="../../assets/admin/layout3/img/avatar3.jpg" class="img-circle" alt="">
										</span>
										<span class="subject">
										<span class="from">
										Richard Doe </span>
										<span class="time">16 mins </span>
										</span>
										<span class="message">
										Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="inbox.html?a=view">
										<span class="photo">
										<img src="../../assets/admin/layout3/img/avatar1.jpg" class="img-circle" alt="">
										</span>
										<span class="subject">
										<span class="from">
										Bob Nilson </span>
										<span class="time">2 hrs </span>
										</span>
										<span class="message">
										Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>--%>
                    <!-- END INBOX DROPDOWN -->
                    <!-- BEGIN USER LOGIN DROPDOWN -->
                    <li class="dropdown dropdown-user dropdown-dark">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                          <%--  <img alt="" class="img-circle" src="../../assets/admin/layout3/img/avatar9.jpg">--%>
                              <img src="${ (sessionScope.user.user_headpic eq '' || sessionScope.user.user_headpic==null) ? 'images/defautl_head.png':'../../upload_headpic/' }${ (sessionScope.user.user_headpic eq '' || sessionScope.user.user_headpic==null) ? '':sessionScope.user.user_headpic }" class="img-responsive img-circle" alt="">

                              <span class="username username-hide-mobile"> ${sessionScope.user.user_name}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-default">
                            <li>
                                <a href="user_profile.jsp">
                                    <i class="icon-user"></i> 我的个人中心 </a>
                            </li>
                            <c:forEach items="${sessionScope.menus}" var="menu">




                                <c:if test="${menu.menu_name eq '新闻信息管理'}">

                                    <li>
                                        <a href="notice.jsp">
                                            <i class="icon-book-open"></i> 新闻信息管理 </a>
                                    </li>
                                </c:if>
                                <c:if test="${menu.menu_name eq '系统信息设置'}">
                                    <li>
                                        <a href="rolemenu.jsp">
                                            <i class="icon-key"></i> 用户权限管理 <%--<span class="badge badge-danger">
                                        3 </span>--%>
                                        </a>
                                    </li>
                                </c:if>
                                <c:if test="${menu.menu_name eq '新闻审核管理'}">
                                   <li>
                                        <a  href="check.jsp">
                                            <i class="icon-refresh"></i> 新闻审核管理
                                        </a>
                                    </li>
                                </c:if>
                            </c:forEach>
                             <%--<li class="divider">
                            </li>
                            <li>
                                <a href="extra_lock.html">
                                    <i class="icon-lock"></i> Lock Screen </a>
                            </li>--%>
                        </ul>
                    </li>
                    <!-- END USER LOGIN DROPDOWN -->
                    <!-- BEGIN USER LOGIN DROPDOWN -->
                    <li id="login_out" class="dropdown dropdown-extended quick-sidebar-toggler">

                        <i  class="icon-logout"></i>
                    </li>
                    <!-- END USER LOGIN DROPDOWN -->
                </ul>
            </div>
            <!-- END TOP NAVIGATION MENU -->
        </div>
    </div>
    <!-- END HEADER TOP -->
</div>
</body>



<div class="modal fade modal-sm modal-changerole" id="changeRoleModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-sm ">
        <div class="modal-content modal-changerole-content" >
            <%--<div class="  modal-changerole-header" >
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            </div>--%>
            <div  class="modal-changerole-body padding-15px">
                <label class="control-label">当前角色</label>
                <select class="select2 form-control">
                    <option value="0">普通用户</option>
                    <option value="1">管理员</option>
                </select>
            </div>
            <div class="modal-footer" style="border-width: 0px;">
                <button type="button" id="btnChangerRoel" class="btn green" >确认</button>
                <button type="button" class="btn default" data-dismiss="modal">关闭</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>


</html>
