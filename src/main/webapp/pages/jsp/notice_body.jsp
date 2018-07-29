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
                    <div class="portlet light min-height-500">


                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-cogs font-green-sharp"></i>
                                <span class="caption-subject font-green-sharp bold uppercase">新闻类别</span>
                            </div>
                            <div class="tools">
                                <div class="btn-group btn-group-xs btns-round  btn-group-solid">
                                    <a  href="javascript:;" id="infotype_alter" data-type="infotype" style="border-width:0px;" data-pk="1" data-original-title="修改类别信息" class="icon-note btn font-dark   nopadding border-none displaynone" ></a>
                                    <a href="javascript:;" id="infotype_add" data-type="infotype" style="border-width:0px;" data-pk="1" data-placement="bottom"  data-original-title="添加类别信息"   class="icon-plus   btn font-dark nopadding border-none">&nbsp;</a>
                                    <!--<a class=" icon-trash btn font-dark  nopadding red  border-bottom-1px"></a>-->
                                    <a class="displaynone icon-trash btn font-dark  nopadding     border-none" style="border-width:0px;"  data-placement="right" data-btn-ok-label="确认" data-btn-ok-icon="icon-check" data-btn-ok-class="btn-warning" data-btn-cancel-label="取消" data-btn-cancel-icon="icon-close" data-btn-cancel-class="btn-info" data-toggle="confirmation"  id="btn_delete"></a>
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <div id="tree_2" class="tree-demo " >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-sm-12">
                    <div class="portlet light min-height-500">
                        <!--<div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-cogs font-green-sharp"></i>
                                <span class="caption-subject font-green-sharp bold uppercase">Portlet Tabs</span>
                            </div>
                        </div>-->
                        <div class="portlet-body">
                            <div class=" portlet-tabs">
                                <ul id="li_tabs" class="nav nav-tabs">
                                    <%--<li id="li_tab_1" class="_li  " >
                                        <a href="#portlet_tab1" data-toggle="tab"  >
                                            <i class="icon-home"></i>&nbsp;首页 <!--<i class="btn fa fa-times-circle float-right padding-top-3 hover-color-red btn_coloe_tab"></i>-->
                                        </a>
                                    </li>--%>
                                    <li class="_li active" id="li_tab_2" >
                                        <a id="a_tab_2" href="#portlet_tab_2"   data-toggle="tab">
                                            <i class="icon-note"></i>&nbsp;发布新闻
                                        </a>
                                    </li>

                                    <li class="_li" id="li_tab_3">
                                        <a id="a_tab_3"  href="#portlet_tab_3"   data-toggle="tab">
                                            <i class="icon-book-open"></i>&nbsp;新闻管理
                                        </a>
                                    </li>
                                        <li class="_li" id="li_tab_3">
                                            <a id="a_tab_4"  href="#portlet_tab_4"   data-toggle="tab">
                                                <i class="icon-book-open"></i>&nbsp;待审核新闻
                                            </a>
                                        </li>
                                        <li class="_li" id="li_tab_3">
                                            <a id="a_tab_5"  href="#portlet_tab_5"   data-toggle="tab">
                                                <i class="icon-book-open"></i>&nbsp;未通过审核新闻
                                            </a>
                                        </li>
                                </ul>
                                <div id="tab-content"  class="tab-content " >
                                   <%-- <div class="tab-pane active" id="portlet_tab1">

                                    </div>--%>
                                    <div class="tab-pane active"  id="portlet_tab_2">
                                        <div class="div_help"  id="div_help">
                                            <i class="icon-bubble font-md"></i>&nbsp;&nbsp;请先在左侧选择要添加的新闻类别
                                        </div>

                                        <div id="div_distr" class="form-horizontal displaynone">
                                            <div class="form-body padding-15px">
                                                <div class="form-group">
                                                    <label class="control-label">新闻标题</label>
                                                    <input id="notice_title" type="text" class="form-control" placeholder="公告标题"/>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">新闻描述</label>
                                                    <textarea id="notice_desc" class="form-control" placeholder="公告描述"></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label">新闻类型</label>
                                                    <select id="selectList" class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
                                                        <option value="Category 1">Category 1</option>
                                                        <option value="Category 2">Category 2</option>
                                                        <option value="Category 3">Category 5</option>
                                                        <option value="Category 4">Category 4</option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">添加附件</label>

                                                    <br/>
                                                    <ul class="file_list" id="file_add_list">
                                                    </ul>
                                                    <div data-repeater-item class="mt-repeater-item" style="border: none;">
                                                        <div class="row mt-repeater-row">
                                                            <div class="col-md-12">
                                                                <div class="fileinput fileinput-new  "  data-provides="fileinput">
                                                                    <form id="uploadForm">
                                                                        <div class="input-group input-large" >
                                                                            <div class="form-control uneditable-input input-fixed input-medium" data-trigger="fileinput">
                                                                                <i class="fa fa-file fileinput-exists"></i>&nbsp;
                                                                                <span class="fileinput-filename" id="file_add_name"></span>
                                                                            </div>
																			<span class="input-group-addon btn default btn-file">
																				<input type="file" id="file" name="file"  />
																				<span class="fileinput-new"> 选择 </span>
																				<span class="fileinput-exists"> 选择 </span><span class="fileinput-exists">  </span>
																			</span>
                                                                            <a href="javascript:;"  id="btn_upload"  class="input-group-addon fileinput-exists red btn green  ">
                                                                                <i class="fa  fa-upload font-white ">上传</i>
                                                                            </a>
                                                                        </div>
                                                                    </form>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>



                                            <div name="summernote" id="summernote_1">

                                            </div>
                                            <div class="pading-15px">
                                                <br/>
                                                <div class="">
                                                    <button id="btn_preview" type="button" class="btn  green">预览</button>
                                                    <button id="btn_distr" type="button" class="btn  blue">发布</button>
                                                    <button type="reset" class="btn default">取消</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane"   id="portlet_tab_3">

                                            <!-- 代码 开始 -->
                                            <main id="main_loader" class="displaynone">
                                                <div class="loaders">
                                                    <div class="loader">
                                                        <div class="loader-inner ball-pulse">
                                                            <p></p>
                                                            <p></p>
                                                            <p></p>
                                                        </div>
                                                        <div class="load_font">正在加载......</div>
                                                    </div>
                                                </div>
                                                <script>
                                                    document.addEventListener('DOMContentLoaded', function () {
                                                        document.querySelector('loader').className += 'loaded';
                                                    });
                                                </script>
                                            </main>


                                        <input type="hidden" id="cid" />
                                        <div id="notice_table" class="row">
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
                                                                    新闻标题
                                                                </th>
                                                                <th>
                                                                    类型
                                                                </th>
                                                                <th>
                                                                    发布人
                                                                </th>
                                                                <th>
                                                                    发布时间
                                                                </th>
                                                                <th>
                                                                    审核状态
                                                                </th>
                                                                <th >
                                                                    浏览次数
                                                                </th>
                                                                <th>
                                                                    编辑
                                                                </th>
                                                                <th>
                                                                    删除
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody id="tbd">
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <!-- END EXAMPLE TABLE PORTLET-->
                                            </div>
                                        </div>
                                    </div>
                                       <div class="tab-pane "    id="portlet_tab_4">

                                           <div id="notice_unpass_table" class="row">
                                               <div class="col-md-12">
                                                   <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                                   <div class="portlet light">
                                                       <div class="portlet-body">
                                                           <table class="table table-striped table-hover table-bordered" id="sample_editable_unpass">
                                                               <thead>
                                                               <tr>
                                                                   <%--<th>
                                                                       公告编号
                                                                   </th>--%>
                                                                   <th>
                                                                       新闻标题
                                                                   </th>
                                                                   <th>
                                                                       类型
                                                                   </th>
                                                                   <th>
                                                                       发布人
                                                                   </th>
                                                                   <th>
                                                                       发布时间
                                                                   </th>
                                                                   <th >
                                                                       新闻状态
                                                                   </th>
                                                                   <th>
                                                                       编辑/审核
                                                                   </th>
                                                                   <th>
                                                                       删除
                                                                   </th>
                                                               </tr>
                                                               </thead>
                                                               <tbody id="tbd_unpass">
                                                               </tbody>
                                                           </table>
                                                       </div>
                                                   </div>
                                                   <!-- END EXAMPLE TABLE PORTLET-->
                                               </div>
                                           </div>
                                       </div>
                                       <div class="tab-pane  "     id="portlet_tab_5">
                                          <%-- <div id="notice_failed_table" class="row">
                                               <div class="col-md-12">
                                                   <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                                   <div class="portlet light">
                                                       <div class="portlet-body">
                                                           <table class="table table-striped table-hover table-bordered" id="sample_editable_fail">
                                                               <thead>
                                                               <tr>
                                                                   &lt;%&ndash;<th>
                                                                       公告编号
                                                                   </th>&ndash;%&gt;
                                                                   <th>
                                                                       新闻标题
                                                                   </th>
                                                                   <th>
                                                                       类型
                                                                   </th>
                                                                   <th>
                                                                       发布人
                                                                   </th>
                                                                   <th>
                                                                       发布时间
                                                                   </th>
                                                                   <th >
                                                                       浏览次数
                                                                   </th>
                                                                   <th>
                                                                       编辑
                                                                   </th>
                                                                   <th>
                                                                       删除
                                                                   </th>
                                                               </tr>
                                                               </thead>
                                                               <tbody id="tbd_failed">
                                                               </tbody>
                                                           </table>
                                                       </div>
                                                   </div>
                                                   <!-- END EXAMPLE TABLE PORTLET-->
                                               </div>
                                           </div>--%>
                                              <div id="notice_failed_table" class="row">
                                                  <div class="col-md-12">
                                                      <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                                      <div class="portlet light">
                                                          <div class="portlet-body">
                                                              <table class="table table-striped table-hover table-bordered" id="sample_editable_fail">
                                                                  <thead>
                                                                  <tr>
                                                                      <%--<th>
                                                                          公告编号
                                                                      </th>--%>
                                                                      <th>
                                                                          新闻标题
                                                                      </th>
                                                                      <th>
                                                                          类型
                                                                      </th>
                                                                      <th>
                                                                          发布人
                                                                      </th>
                                                                      <th>
                                                                          发布时间
                                                                      </th>
                                                                      <th >
                                                                          新闻状态
                                                                      </th>
                                                                      <th>
                                                                          编辑/审核
                                                                      </th>
                                                                      <th>
                                                                          删除
                                                                      </th>
                                                                  </tr>
                                                                  </thead>
                                                                  <tbody id="tbd_failed">
                                                                  </tbody>
                                                              </table>
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
            </div>

            <!-- END PAGE CONTENT INNER -->
        </div>


    </div>
    <!-- END PAGE CONTENT -->
</div>

<%--给审核失败的编辑用的编辑框  failed--%>
<div class="modal fade bs-modal-lg padding-15px" id="EditModal_edit" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="height: auto;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h1 class="h1title">新闻编辑</h1>
            </div>

            <div class="form-horizontal padding-15px">
                <div class="form-body padding-15px">
                    <div class="form-group">
                        <label class="control-label">新闻标题</label>
                        <input type="hidden" id="notice_failed_code" />
                        <input id="notice_title_failed" type="text" class="form-control" placeholder="公告标题"/>
                    </div>

                    <div class="form-group">
                        <label class="control-label">新闻描述</label>
                        <textarea id="notice_desc_failed" class="form-control" placeholder="公告描述"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="control-label">新闻类型</label>
                        <select id="selectList_edit_failed" class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 5</option>
                            <option value="Category 4">Category 4</option>
                        </select>
                    </div>
                </div>
                <div class="form-group  padding-15px">
                    <label class="control-label">添加附件</label>

                    <br/>
                    <ul class="file_list" id="file_failed_list">
                    </ul>
                    <div data-repeater-item class="mt-repeater-item" style="border: none;">
                        <div class="row mt-repeater-row">
                            <div class="col-md-12">
                                <div class="fileinput fileinput-new  "  data-provides="fileinput">
                                    <form id="uploadfailedForm">
                                        <div class="input-group input-large" >
                                            <div class="form-control uneditable-input input-fixed input-medium" data-trigger="fileinput">
                                                <i class="fa fa-file fileinput-exists"></i>&nbsp;
                                                <span class="fileinput-filename" id="file_failed_name"></span>
                                            </div>
											<span class="input-group-addon btn default btn-file">
												<input type="file" id="failed_file" name="file"  />
												<span class="fileinput-new"> 选择 </span>
												<span class="fileinput-exists"> 选择 </span><span class="fileinput-exists">  </span>
											</span>
                                            <a href="javascript:;"  id="btn_failed_upload"  class="input-group-addon fileinput-exists red btn green  ">
                                                <i class="fa  fa-upload font-white ">上传</i>
                                            </a>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div name="summernote" id="summernote_1_failed">

                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn default" data-dismiss="modal">取消编辑</button>
                <button id="btn_distr_edit_passEdit" type="button" class="btn blue">保存</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<input type="text" aria-hidden="true" name="user_code_edit"  id="user_code_noticejsp" placeholder="" class="form-control" readonly="true" value="${sessionScope.user.user_code}"/>


<%--给未审核用的编辑框     unpassed--%>
<div class="modal fade bs-modal-lg padding-15px" id="EditModal_check" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="height: auto;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h1 class="h1title">新闻审核</h1>
            </div>

            <div class="form-horizontal padding-15px">
                <div class="form-body padding-15px">
                    <div class="form-group">
                        <label class="control-label">新闻标题</label>
                        <input type="hidden" id="notice_check_code" />
                        <input id="notice_title_check" type="text" class="form-control" placeholder="新闻标题"/>
                    </div>

                    <div class="form-group">
                        <label class="control-label">新闻描述</label>
                        <textarea id="notice_desc_check" class="form-control" placeholder="新闻描述"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="control-label">新闻类型</label>
                        <select id="selectList_edit_check" class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 5</option>
                            <option value="Category 4">Category 4</option>
                        </select>
                    </div>
                </div>
                <div class="form-group  padding-15px">
                    <label class="control-label">添加附件</label>

                    <br/>
                    <ul class="file_list" id="file_check_list">
                    </ul>
                    <div data-repeater-item class="mt-repeater-item" style="border: none;">
                        <div class="row mt-repeater-row">
                            <div class="col-md-12">
                                <div class="fileinput fileinput-new  "  data-provides="fileinput">
                                    <form id="uploadCheckForm">
                                        <div class="input-group input-large" >
                                            <div class="form-control uneditable-input input-fixed input-medium" data-trigger="fileinput">
                                                <i class="fa fa-file fileinput-exists"></i>&nbsp;
                                                <span class="fileinput-filename" id="file_check_name"></span>
                                            </div>
											<span class="input-group-addon btn default btn-file">
												<input type="file" id="check_file" name="file"  />
												<span class="fileinput-new"> 选择 </span>
												<span class="fileinput-exists"> 选择 </span><span class="fileinput-exists">  </span>
											</span>
                                            <a href="javascript:;"  id="btn_check_upload"  class="input-group-addon fileinput-exists red btn green  ">
                                                <i class="fa  fa-upload font-white ">上传</i>
                                            </a>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div name="summernote" id="summernote_1_check">

                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button id="btn_distr_check_unpass" type="button" class="btn default" data-dismiss="modal">不通过</button>
                <button id="btn_distr_check_pass" type="button" class="btn blue">通过</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>



<div class="modal fade bs-modal-lg padding-15px" id="EditModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="height: auto;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h1 class="h1title">新闻编辑</h1>
            </div>

            <div class="form-horizontal padding-15px">
                <div class="form-body padding-15px">
                    <div class="form-group">
                        <label class="control-label">新闻标题</label>
                        <input type="hidden" id="notice_edit_code" />
                        <input id="notice_title_edit" type="text" class="form-control" placeholder="公告标题"/>
                    </div>

                    <div class="form-group">
                        <label class="control-label">新闻描述</label>
                        <textarea id="notice_desc_edit" class="form-control" placeholder="公告描述"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="control-label">新闻类型</label>
                        <select id="selectList_edit" class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 5</option>
                            <option value="Category 4">Category 4</option>
                        </select>
                    </div>
                </div>
                <div class="form-group  padding-15px">
                    <label class="control-label">添加附件</label>

                    <br/>
                    <ul class="file_list" id="file_edit_list">
                    </ul>
                    <div data-repeater-item class="mt-repeater-item" style="border: none;">
                        <div class="row mt-repeater-row">
                            <div class="col-md-12">
                                <div class="fileinput fileinput-new  "  data-provides="fileinput">
                                    <form id="uploadEditForm">
                                        <div class="input-group input-large" >
                                            <div class="form-control uneditable-input input-fixed input-medium" data-trigger="fileinput">
                                                <i class="fa fa-file fileinput-exists"></i>&nbsp;
                                                <span class="fileinput-filename" id="file_edit_name"></span>
                                            </div>
											<span class="input-group-addon btn default btn-file">
												<input type="file" id="edit_file" name="file"  />
												<span class="fileinput-new"> 选择 </span>
												<span class="fileinput-exists"> 选择 </span><span class="fileinput-exists">  </span>
											</span>
                                            <a href="javascript:;"  id="btn_edit_upload"  class="input-group-addon fileinput-exists red btn green  ">
                                                <i class="fa  fa-upload font-white ">上传</i>
                                            </a>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div name="summernote" id="summernote_1_edit">

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



<%--
<div class="modal fade bs-modal-lg " id="largeModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg min-height-650">
        <div class="modal-content min-height-650" style="height: auto;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h1 class="h1title" id="n_title" >江西渔业平台正式上线 </h1>
                <div style="text-align: center;line-height: 40px;">2018-1-1 10:00:00  作者：${sessionScope.user.user_name}</div>
            </div>
            <div id="n_desc" class="notice_body" style="margin-top: 5px;min-height:50px;">
                &nbsp&nbsp&nbsp&nbsp江西渔业信息管理平台开发建设项目于2017年10月正式启动，经过项目调研、软件开发、数据测试、平台试运行，
                历时8个月正式上线，主要针对南昌市范围内养殖主体、苗种生产主体情况进行录入，录入信息主要包括主体基本信息、
                项目建设情况、质量抽检结果以及三品认证等，并配套养殖场GPS定位、养殖面积测算，全方位的了解和掌握全市各镇街养殖场概况。
            </div>
            <hr/>
            <div id="n_uri" class="notice_body min-height-450">
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp江西渔业信息管理平台主要包括6个功能:<br/>

                &nbsp&nbsp&nbsp&nbsp一是养殖课堂，包含渔业主体信息数据库和苗种生产主体信息数据库，主要参照省渔业主体和水产加工流通企业调查平台目录体系设计，实现南昌市市各类涉农数据的汇聚和共享，为今后大数据分析及辅助决策提供依据；

                <br/> &nbsp&nbsp&nbsp&nbsp二是渔业医院，包括三块内容，项目建设、质量抽检和三品认证，可实现海宁市渔业行政监管统一数字化管理，推进部门业务和管理资源共建共享和集中管理，提高渔业监管工作的精准性和科学性；

                <br/> &nbsp&nbsp&nbsp&nbsp三是精准扶贫，对接南昌市范围内地图，实现渔业地理信息GPS定位，以及养殖面积测算等；

                <br/> &nbsp&nbsp&nbsp&nbsp四是冷链物流，参照浙江农民信箱，与南昌市海洋与渔业局信息中心短信消息系统对接；

                <br/>&nbsp&nbsp&nbsp&nbsp五是金融保险，参照并与南昌市智慧农业云平台无缝对接，实现涉农资源数据共享；

                <br/> &nbsp&nbsp&nbsp&nbsp六是生态环保，包括区域、用户、权限、服务和日志管理，为待建功能预留接口，方便平台的集中管理和系统的充分整合。
                <br/> &nbsp&nbsp&nbsp&nbsp七是物联网监控，参照并与海宁市智慧农业云平台无缝对接，实现涉农资源数据共享；

                <br/>&nbsp&nbsp&nbsp&nbsp八是渔业超市，包括区域、用户、权限、服务和日志管理，为待建功能预留接口，方便平台的集中管理和系统的充分整合。

                <br/>&nbsp&nbsp&nbsp&nbsp目前共录入全市10亩以上养殖大户300余家，包括地名地理信息、养殖场名称、相关负责人及联系方式四方面基础数据。

                平台运行后，一方面可进一步深化海宁市基层渔技推广体系改革与建设，通过信息化管理，提供全方位、针对性的技术服务；
                另一方面提升海宁市渔业管理水平，规划养殖行为，建立健全水产品质量安全可追溯体系建设，有效保障了水产品质量安全，
                渔业信息化工作迈入新阶段。
            </div>
            <div class="modal-footer">
                <button type="button" class="btn default" data-dismiss="modal">关闭</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
--%>



