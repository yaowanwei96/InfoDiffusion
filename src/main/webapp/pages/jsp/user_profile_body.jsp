<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/1/17
  Time: 14:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!-- BEGIN PAGE CONTAINER -->
<div class="page-container">
    <!-- BEGIN PAGE HEAD -->

    <!-- END PAGE HEAD -->
    <!-- BEGIN PAGE CONTENT -->
    <div class="page-content">
        <div class="container">
            <!-- BEGIN PAGE BREADCRUMB -->

            <!-- END PAGE BREADCRUMB -->
            <!-- BEGIN PAGE CONTENT INNER -->
            <div class="row margin-top-10">
                <div class="col-md-12">
                    <!-- BEGIN PROFILE SIDEBAR -->
                    <div class="profile-sidebar " style="width: 250px;">
                        <!-- PORTLET MAIN -->
                        <div class="portlet light profile-sidebar-portlet min-height-500">
                            <!-- SIDEBAR USERPIC -->
                            <div class="profile-userpic">
                                <%--                              <img src="../../assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt="" >('../../upload_headpic/' + sessionScope.user.user_headpic )
--%>
                                <img src="${ (sessionScope.user.user_headpic eq '' || sessionScope.user.user_headpic==null) ? 'images/defautl_head.png':'../../upload_headpic/' }${ (sessionScope.user.user_headpic eq '' || sessionScope.user.user_headpic==null) ? '':sessionScope.user.user_headpic }" class="img-responsive" alt="">

                            </div>
                            <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE -->
                            <div class="profile-usertitle">
                                <div class="profile-usertitle-name">
                                    ${sessionScope.user.user_name}
                                </div>
                                <div class="profile-usertitle-job">
                                    Developer
                                </div>
                            </div>
                            <!-- END SIDEBAR USER TITLE -->

                            <!-- SIDEBAR MENU -->
                            <div class="profile-usermenu">
                                <ul class="nav">
                                    <li>
                                        <a href="javascript:;">
                                            <i class=" icon-user"></i>
                                            姓名： ${sessionScope.user.user_nickname} </a>
                                    </li>
                                    <li >
                                        <a href="javascript:;">
                                            <i class="${sessionScope.user.user_sex==1?'icon-symbol-male':'icon-symbol-female'}"></i>
                                            性别： ${sessionScope.user.user_sex==1?'男':'女'} </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" >
                                            <i class="icon-envelope"></i>
                                            邮箱：  ${sessionScope.user.user_code}</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-call-in"></i>
                                            电话：  ${sessionScope.user.user_phone}</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- END MENU -->
                        </div>
                        <!-- END PORTLET MAIN -->
                        <!-- PORTLET MAIN -->
                        <%--<div class="portlet light">
                            <!-- STAT -->
                            <div class="row list-separated profile-stat">
                                <div class="col-md-4 col-sm-4 col-xs-6">
                                    <div class="uppercase profile-stat-title">
                                        37
                                    </div>
                                    <div class="uppercase profile-stat-text">
                                        Projects
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-6">
                                    <div class="uppercase profile-stat-title">
                                        51
                                    </div>
                                    <div class="uppercase profile-stat-text">
                                        Tasks
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-6">
                                    <div class="uppercase profile-stat-title">
                                        61
                                    </div>
                                    <div class="uppercase profile-stat-text">
                                        Uploads
                                    </div>
                                </div>
                            </div>
                            <!-- END STAT -->
                            <div>
                                <h4 class="profile-desc-title">About Marcus Doe</h4>
                                <span class="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                                <div class="margin-top-20 profile-desc-link">
                                    <i class="fa fa-globe"></i>
                                    <a href="http://www.keenthemes.com">www.keenthemes.com</a>
                                </div>
                                <div class="margin-top-20 profile-desc-link">
                                    <i class="fa fa-twitter"></i>
                                    <a href="http://www.twitter.com/keenthemes/">@keenthemes</a>
                                </div>
                                <div class="margin-top-20 profile-desc-link">
                                    <i class="fa fa-facebook"></i>
                                    <a href="http://www.facebook.com/keenthemes/">keenthemes</a>
                                </div>
                            </div>
                        </div>--%>
                        <!-- END PORTLET MAIN -->
                    </div>
                    <!-- END BEGIN PROFILE SIDEBAR -->
                    <!-- BEGIN PROFILE CONTENT -->
                    <div class="profile-content ">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="portlet light min-height-500">
                                    <div class="portlet-title tabbable-line">
                                        <div class="caption caption-md">
                                            <i class="icon-globe theme-font hide"></i>
                                            <span class="caption-subject font-blue-madison bold uppercase">账号信息</span>
                                        </div>
                                        <ul class="nav nav-tabs">
                                            <li >
                                                <a href="#tab_1_1" data-toggle="tab">首页中心</a>
                                            </li>
                                            <li>
                                                <a href="#tab_1_2" data-toggle="tab">个人资料</a>
                                            </li>
                                            <li>
                                                <a href="#tab_1_3" data-toggle="tab">修改头像</a>
                                            </li>
                                            <li>
                                                <a href="#tab_1_4" data-toggle="tab">修改密码</a>
                                            </li>
                                            <li class="active">
                                                <a href="#tab_1_5" data-toggle="tab">发布排行榜</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="tab-content">
                                            <div class="tab-pane " id="tab_1_1">
                                                <form action="#">
                                                    <table class="table table-light table-hover">
                                                        鹅鹅鹅    ，曲项向天歌。<br>
                                                        白毛浮绿水，红掌拨清波。
                                                    </table>

                                                </form>
                                            </div>
                                            <!-- PERSONAL INFO TAB -->
                                            <div class="tab-pane" id="tab_1_2">
                                                <form   id="form_userMsg_edit" action="#"  class="user_msg_update ">
                                                    <div class="form-group">
                                                        <label class="control-label">姓名</label>
                                                        <div class="controls">
                                                            <div class="input-icon">
                                                                <i class="icon-user-follow"></i>
                                                                <input type="text" name="user_nickname_edit" class="form-control placeholder-no-fix" placeholder="" autocomplete="off"  id="user_nickname_edit"   value="${sessionScope.user.user_nickname}"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label">用户名</label>
                                                        <div class="controls">
                                                            <div class="input-icon">
                                                                <i class="icon-user"></i>
                                                                <input type="text" name="user_name_edit" id="user_name_edit" placeholder="" class="form-control" value="${sessionScope.user.user_name}"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label">性别</label>
                                                        <div class="controls">
                                                            <div class="input-icon">
                                                                <i class="${sessionScope.user.user_sex==1?'icon-symbol-male':'icon-symbol-female'}"></i>
                                                            <!--<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Identity" name="identity"/>-->
                                                            <select id="user_sex_edit"  name="user_sex_edit" value="${sessionScope.user.user_sex}" class="  form-control"style="color: #AAA">
                                                                <option value="1" ${sessionScope.user.user_sex==0?'':'selected'}>男</option>
                                                                <option value="0" ${sessionScope.user.user_sex==1?'':'selected'}>女</option>
                                                            </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label">手机号</label>
                                                        <div class="controls">
                                                            <div class="input-icon">
                                                                <i class="icon-call-in"></i>
                                                                 <input type="text" id="user_phone_edit"  name="user_phone_edit" placeholder=""  class="form-control" value="${sessionScope.user.user_phone}"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label">邮箱</label>
                                                        <div class="controls">
                                                            <div class="input-icon">
                                                                <i class="icon-envelope"></i>
                                                        <input type="text" name="user_code_edit"  id="user_code_edit" placeholder="" class="form-control" readonly="true" value="${sessionScope.user.user_code}"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="margiv-top-10">
                                                        <a href="javascript:;" id="user_profile_update_btn" class="btn green-haze">
                                                            保存 </a>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- END PERSONAL INFO TAB -->
                                            <!-- CHANGE AVATAR TAB -->
                                            <div class="tab-pane" id="tab_1_3">
                                                <p>
                                                    修改头像
                                                </p>
                                                <form action="#" id="user_headpic_update">
                                                    <div class="form-group">
                                                        <div class="fileinput fileinput-new" data-provides="fileinput">
                                                            <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                                                <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt=""/>
                                                            </div>
                                                            <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;">
                                                            </div>
                                                            <div>
                                                                <input type="hidden" id="user_code" name="usercode" value="${sessionScope.user.user_code}" />
																<span class="btn default btn-file">
																<span class="fileinput-new">
																选择图像 </span>
																<span class="fileinput-exists">
																修改 </span>
																<input type="file" name="file">
																</span>
                                                                <a href="javascript:;" id="user_headpic_update_remove_btn" class="btn default fileinput-exists" data-dismiss="fileinput">
                                                                    移除 </a>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix margin-top-10">

                                                            <span> 在最新的Firefox、Chrome、Opera、Safari和Internet Explorer 10中只支持附带的图像缩略图。 </span>
                                                        </div>
                                                    </div>
                                                    <div class="margin-top-10">
                                                        <a href="javascript:;"  id="user_headpic_update_btn"class="btn green-haze">
                                                            提交 </a>
                                                    </div>
                                                </form>






                                            </div>
                                            <!-- END CHANGE AVATAR TAB -->
                                            <!-- CHANGE PASSWORD TAB -->
                                            <div class="tab-pane" id="tab_1_4">
                                                <form action="#" class="user_pwd_update">
                                                    <div class="form-group">
                                                        <label class="control-label">验证当前密码</label>
                                                        <div class="controls">
                                                            <div class="input-icon">
                                                                <i class="icon-user-follow"></i>
                                                                <input type="password" class="form-control placeholder-no-fix" placeholder="" autocomplete="off" id="currentPwd" name="currentPwd"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label ">新密码</label>
                                                        <div class="controls">
                                                            <div class="input-icon">
                                                                <i class="icon-user-follow"></i>
                                                                <input type="password" class="form-control placeholder-no-fix" placeholder="" autocomplete="off" id="newPwd" name="newPwd"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label">再次输入新密码</label>
                                                        <div class="controls">
                                                            <div class="input-icon">
                                                                <i class="icon-user-follow"></i>
                                                                <input type="password" class="form-control placeholder-no-fix" placeholder="" autocomplete="off" id="re_newPwd" name="re_newPwd"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="margin-top-10">
                                                        <a href="javascript:;" class="btn green-haze" id="change_pwd_btn">
                                                            修改密码 </a>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- END CHANGE PASSWORD TAB -->
                                            <!-- PRIVACY SETTINGS TAB -->
                                            <div class="tab-pane active" id="tab_1_5">
                                                <div id="rankinglist_table" class="row">
                                                    <div class="col-md-12">
                                                        <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                                        <div class="portlet light">
                                                            <div class="portlet-body">
                                                                <table class="table table-striped table-hover table-bordered" id="rankinglist_editable_1">
                                                                    <thead>
                                                                    <tr>
                                                                        <%--<th>
                                                                            公告编号
                                                                        </th>--%>
                                                                        <th>
                                                                            发布人
                                                                        </th>
                                                                        <th>
                                                                            发布文章数
                                                                        </th>
                                                                        <th >
                                                                            浏览综合值
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody id="tbd_ranking">
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <!-- END EXAMPLE TABLE PORTLET-->
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- END PRIVACY SETTINGS TAB -->

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END PROFILE CONTENT -->
                </div>
            </div>
            <!-- END PAGE CONTENT INNER -->
        </div>
    </div>
    <!-- END PAGE CONTENT -->
</div>
<!-- END PAGE CONTAINER -->
