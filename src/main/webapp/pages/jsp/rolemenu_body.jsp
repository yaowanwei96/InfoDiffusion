<%--
  Created by IntelliJ IDEA.
  User: Software1
  Date: 2018/1/17
  Time: 12:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<div class="page-container">
    <!-- BEGIN PAGE CONTENT -->
    <div class="page-content">
        <div class="container">
            <!-- BEGIN PAGE CONTENT INNER -->
            <div class="row margin-top-10">
                <div class="col-md-3 col-sm-12">
                    <div class="portlet inbox light min-height-500">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-cogs font-green-sharp"></i>
                                <span class="caption-subject font-green-sharp bold uppercase">用户权限管理</span>
                            </div>
                        </div>
                        <div class="inbox-sidebar nopadding margin-top-0 " style="border-width:0px;">
                            <ul class="inbox-nav custome-inbox-nav nopadding margin-top-0"  style="margin-top: 0px;padding-left:0px;">
                                <li id="tab_1" class="active " style="background-color: #F0F0F0;">
                                    <a href="javascript:;" > <i class=" icon-users bold  "></i>&nbsp;&nbsp;用户信息管理 </a>
                                </li>
                                <li id="tab_2" >
                                    <a href="javascript:;" > <i class=" icon-eyeglasses bold  "></i>&nbsp;&nbsp;角色信息管理 </a>
                                </li>
                                <li id="tab_3">
                                    <a href="javascript:;" > <i class=" icon-key bold  "></i>&nbsp;&nbsp;权限信息管理 </a>
                                </li>
                                <li id="tab_4">
                                    <a href="javascript:;"  > <i class=" icon-shuffle bold  "></i>&nbsp;&nbsp;用户角色分配 </a>
                                </li>
                                <li id="tab_5">
                                    <a href="javascript:;"  > <i class=" icon-shuffle bold  "></i>&nbsp;&nbsp;角色权限分配 </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class=" col-md-9 col-sm-12 portlet light min-height-500">
                    <div class="portlet-body">
                        <div class=" portlet-tabs">
                            <ul id="li_tabs" class="nav nav-tabs">
                                <li class="_li active" id="li_tab_1" >
                                    <a id="a_tab_1"  href="#portlet_tab_3"   data-toggle="tab">
                                        <i class="icon-users "></i>&nbsp;用户信息管理<%--<i class="btn fa fa-times-circle float-right padding-top-0 hover-color-red btn_coloe_tab"></i>--%>
                                    </a>
                                </li>
                                <li id="li_tab_2" class="_li  " style="display:none;" >
                                    <a id="a_tab_2" href="#portlet_tab_1" data-toggle="tab"  >
                                        <i class=" icon-eyeglasses "></i>&nbsp;角色信息管理
                                    </a>
                                </li>
                                <li class="_li " id="li_tab_3" style="display:none;" >
                                    <a id="a_tab_3" href="#portlet_tab_2"   data-toggle="tab">
                                        <i class="icon-key"></i>&nbsp;权限信息管理
                                    </a>
                                </li>
                                <li class="_li " id="li_tab_4" style="display:none;">
                                    <a id="a_tab_4"  href="#portlet_tab_4"   data-toggle="tab">
                                        <i class="icon-shuffle "></i>&nbsp;用户角色分配

                                    </a>
                                </li>
                                <li class="_li " id="li_tab_5" style="display:none;">
                                    <a id="a_tab_5"  href="#portlet_tab_5"   data-toggle="tab">
                                        <i class="icon-shuffle "></i>&nbsp;角色权限分配

                                    </a>
                                </li>
                            </ul>
                            <div id="tab-content"  class="tab-content " >
                                <div class="tab-pane active"    id="portlet_tab_1">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                            <div class="portlet light">
                                                <div class="portlet-body">
                                                    <table class="table table-striped table-hover table-bordered" id="sample_editable_3">
                                                        <thead>
                                                        <tr>
                                                            <th>
                                                                用户编码
                                                            </th>
                                                            <th>
                                                                用户名
                                                            </th>
                                                            <th>
                                                                姓名
                                                            </th>
                                                            <th>
                                                                手机号码
                                                            </th>
                                                            <th >
                                                                性别
                                                            </th>
                                                            <th>
                                                                编辑
                                                            </th>
                                                            <th>
                                                                删除
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody >
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- END EXAMPLE TABLE PORTLET-->
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane  "  style="display:none;"  id="portlet_tab_2">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                            <div class="portlet light">
                                                <div class="portlet-body">
                                                    <table class="table table-striped table-hover table-bordered" id="sample_editable_1">
                                                        <thead>
                                                        <tr>
                                                            <%--<th>
                                                                公告编号
                                                            </th>--%>
                                                                <th>
                                                                    角色代码
                                                                </th>
                                                                <th>
                                                                    角色名
                                                                </th>
                                                                <th>
                                                                    角色权重
                                                                </th>
                                                            <th>
                                                                编辑
                                                            </th>
                                                            <th>
                                                                删除
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody >
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- END EXAMPLE TABLE PORTLET-->
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane "  style="display:none;"  id="portlet_tab_3">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                            <div class="portlet light">
                                                <div class="portlet-body">
                                                    <table class="table table-striped table-hover table-bordered" id="sample_editable_2">
                                                        <thead>
                                                        <tr>
                                                            <%--<th>
                                                                公告编号
                                                            </th>--%>

                                                            <th>
                                                                权限代码
                                                            </th>
                                                            <th >
                                                                权限名
                                                            </th>
                                                            <th>
                                                                编辑
                                                            </th>
                                                            <th>
                                                                删除
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody >
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- END EXAMPLE TABLE PORTLET-->
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane "  style="display:none;"  id="portlet_tab_4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                            <div class="portlet light">
                                                <div class="portlet-body">
                                                    <form action="index.html" class="form-horizontal form-row-seperated">
                                                        <div class="form-body">
                                                            <div class="form-group">
                                                                <div class="form-group">
                                                                    <div class="col-md-6">
                                                                        <div class="portlet light">
                                                                            <div class="portlet-body">
                                                                                <table class="table table-striped table-hover table-bordered" id="user_role_tab">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th>
                                                                                            用户编码
                                                                                        </th>
                                                                                        <th>
                                                                                            姓名
                                                                                        </th>
                                                                                        <th>
                                                                                            选择
                                                                                        </th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody >
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div style="height:40px; width:auto;" id="roleuser_top">
                                                                            <div style="float: left;"  id="user_current_code"></div>
                                                                            <div style="float: left;" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                                                            <div style="float: left;" id="user_current_name"></div>

                                                                        </div>
                                                                        <br><br><br><br><br>
                                                                        <div id="userrole_top"></div>
                                                                        <select multiple="multiple" class="multi-select" id="my_multi_select1" name="my_multi_select1[]">

                                                                        </select>
                                                                        <br><br><br>
                                                                        <div class="form-actions">
                                                                            <div class="row">
                                                                                <div class="col-md-offset-3 col-md-9">
                                                                                    <button type="button" id="btn_Select" class="btn green">
                                                                                        <i class="fa fa-check"></i> 提交</button>
                                                                                    <button type="button" class="btn grey-salsa btn-outline">取消</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                            <!-- END EXAMPLE TABLE PORTLET-->
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane "  style="display:none;"  id="portlet_tab_5">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                            <div class="portlet light">
                                                <div class="portlet-body">
                                                    <form action="index.html" class="form-horizontal form-row-seperated">
                                                        <div class="form-body">
                                                            <div class="form-group">
                                                                <div class="col-md-6">
                                                                   <div class="row">
                                                                            <div class="col-md-12">
                                                                                <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                                                                <div class="portlet light">
                                                                                    <div class="portlet-body">
                                                                                        <table class="table table-striped table-hover table-bordered" id="sample_editable_5">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th>
                                                                                                    角色编码
                                                                                                </th>
                                                                                                <th>
                                                                                                    角色名
                                                                                                </th>
                                                                                                <th>
                                                                                                    权重
                                                                                                </th>
                                                                                                <th>
                                                                                                    分配权限
                                                                                                </th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody >
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                                <!-- END EXAMPLE TABLE PORTLET-->
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <br><br><br><br><br>

                                                                    <div style="height:40px; width:auto;" id="rolemenu_top">
                                                                        <div style="float: left;"  id="role_current_code"></div>
                                                                        <div style="float: left;" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                                                        <div style="float: left;" id="role_current_name"></div>

                                                                    </div>
                                                                    <select multiple="multiple" class="multi-select" id="my_multi_select2" name="my_multi_select2[]">

                                                                    </select>
                                                                    <br><br><br>
                                                                    <div class="form-actions">
                                                                        <div class="row">
                                                                            <div class="col-md-offset-3 col-md-9">
                                                                                <button type="button" id="btn_Select2" class="btn green">
                                                                                    <i class="fa fa-check"></i> 提交</button>
                                                                                <button type="button" class="btn grey-salsa btn-outline">取消</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                            <!-- END EXAMPLE TABLE PORTLET-->
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- END PAGE CONTENT INNER -->
        </div>


    </div>
    <!-- END PAGE CONTENT -->
</div>
<%--角色编辑--%>
<div class="modal fade bs-modal-lg padding-15px" id="EditModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="height: auto;width:50%;margin-top: 150px;margin-left: 25%;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h1 class="h1title">角色编辑</h1>
            </div>

            <div class="form-horizontal padding-15px">
                <div class="form-body padding-15px">
                    <div class="form-group displaynone">
                        <label class="control-label">角色代码</label>

                        <input id="role_code_edit" type="text" class="form-control" placeholder="角色代码"/>
                    </div>
                    <div class="form-group">
                        <label class="control-label">角色名</label>

                        <input id="role_name_edit" type="text" class="form-control" placeholder="角色名"/>
                    </div>
                    <div class="form-group">
                        <label class="control-label">角色权重</label>

                        <input id="role_weight_edit" type="text" class="form-control" placeholder="角色权重"/>
                    </div>
                </div>

            </div>

            <div class="modal-footer">
                <button type="button" class="btn default" data-dismiss="modal">取消编辑</button>
                <button id="btn_distr_edit" type="button" class="btn blue">保存</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>


<%--权限菜单编辑--%>
<div class="modal fade bs-modal-lg padding-15px" id="MenuEditModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="height: auto;width:50%;margin-top: 150px;margin-left: 25%;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h1 class="h1title">权限编辑</h1>
            </div>

            <div class="form-horizontal padding-15px">
                <div class="form-body padding-15px">
                    <div class="form-group displaynone">
                        <label class="control-label">权限代码</label>

                        <input id="menu_code_edit" type="text" class="form-control" placeholder="权限代码"/>
                    </div>

                    <div class="form-group">
                        <label class="control-label">权限名</label>

                        <input id="menu_name_edit" type="text" class="form-control" placeholder="权限名"/>
                    </div>
                </div>

            </div>

            <div class="modal-footer">
                <button type="button" class="btn default" data-dismiss="modal">取消编辑</button>
                <button id="menu_btn_distr_edit" type="button" class="btn blue">保存</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<%--权限添加--%>
<div class="modal fade bs-modal-lg padding-15px" id="MenuAddModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="height: auto;width:50%;margin-top: 150px;margin-left: 25%;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h1 class="h1title">权限编辑</h1>
            </div>

            <div class="form-horizontal padding-15px">
                <div class="form-body padding-15px">
                    <div class="form-group">
                        <label class="control-label">权限名</label>

                        <input id="menu_name_add" type="text" class="form-control" placeholder="权限名"/>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn default" data-dismiss="modal">取消编辑</button>
                <button id="menu_btn_distr_add" type="button" class="btn blue">保存</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>



<%--角色添加--%>
<div class="modal fade bs-modal-lg padding-15px" id="RoleAddModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="height: auto;width:50%;margin-top: 150px;margin-left: 25%;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h1 class="h1title">角色编辑</h1>
            </div>

            <div class="form-horizontal padding-15px">
                <div class="form-body padding-15px">
                    <div class="form-group">
                        <label class="control-label">角色名</label>

                        <input id="role_name_add" type="text" class="form-control" placeholder="角色名"/>
                    </div>
                    <div class="form-group">
                        <label class="control-label">角色权重</label>

                        <input id="role_weight_add" type="text" class="form-control" placeholder="角色权重"/>
                    </div>
                </div>

            </div>

            <div class="modal-footer">
                <button type="button" class="btn default" data-dismiss="modal">取消编辑</button>
                <button id="btn_role_add" type="button" class="btn blue">保存</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>


<%--用户编辑--%>
<div class="modal fade bs-modal-lg padding-15px" id="UserEditModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="height: auto;width:50%;margin-top: 150px;margin-left: 25%;">
            <div class="modal-header">
                <h3 class="text-center">用户信息编辑</h3>
            </div>
            <form   id="form_userMsg_admin_edit" action="#"  class="form_userMsg_admin_edit padding-15px ">
                <div class="form-group">
                    <label class="control-label">用户名</label>
                    <div class="controls">
                        <div class="input-icon">
                            <i class="icon-user"></i>
                            <input type="text" name="user_name_admin_edit" id="user_name_admin_edit" placeholder="" class="form-control"  />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">姓名</label>
                    <div class="controls">
                        <div class="input-icon">
                            <i class="icon-user-follow"></i>
                            <input type="text" name="user_nickname_admin_edit" class="form-control placeholder-no-fix" placeholder="" autocomplete="off"  id="user_nickname_admin_edit"   />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">性别</label>
                    <div class="controls">
                        <div class="input-icon">
                            <i class="icon-user"></i>
                            <!--<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Identity" name="identity"/>-->
                            <select id="user_sex_admin_edit"  name="user_sex_admin_edit"   class="  form-control"style="color: #AAA">
                                <option value="1">男</option>
                                <option value="0">女</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">手机号</label>
                    <div class="controls">
                        <div class="input-icon">
                            <i class="icon-call-in"></i>
                            <input type="text" id="user_phone_admin_edit"  name="user_phone_admin_edit" placeholder=""  class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="form-group hidden">
                    <label class="control-label">邮箱</label>
                    <div class="controls">
                        <div class="input-icon">
                            <i class="icon-envelope"></i>
                            <input type="text" name="user_code_admin_edit"  id="user_code_admin_edit" placeholder="" class="form-control" readonly="true" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn default" data-dismiss="modal">取消编辑</button>
                    <button id="userMsg_admin_edit" name="userMsg_admin_edit" type="button" class="btn blue">保存</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
