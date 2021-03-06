/**
 * Created by LQ on 2018/4/19.
 */
/**
 * Created by LQ on 2018/4/17.
 */
var AdminFailedpassEditors = function () {
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

    var handle_check=function(){
        if (!jQuery().wysihtml5) {
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["../../assets/global/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]
            });
        }
    }




    //审核通过部分
    var checkPass = function () {
        //编辑框初始高度


        refresh();
        $('#summernote_1_failed').summernote({height: 300});
        var data;
        var params={};
        params.pid = -1;
        //获取公告名在下拉菜单中显示
        $.ajax({
            async: false,
            type: "POST",
            url: "../../noticeType/tree",//注意路径
            data: params,
            dataType: "json",
            success: function (data) {
                console.log(JSON.stringify(data,null,4));
                var str = "";

                fs(data,0);
                function fs(data,n){
                    if(data == null) return ;

                    var ss = '';
                    for(var i = 0 ; i< n;i++){
                        ss+='&nbsp;&nbsp;&nbsp;&nbsp;';
                    }
                    for(var a = 0 ; a < data.length;a++){


                        str+='<option value="'+data[a].id+'"  '+(a==0 ?"selected":"" )+' >'+ss+data[a].text+'</option>';
                        fs(data[a].children,n+1);
                    }

                }
                $('#selectList_edit_failed').html(str);
                $('#selectList_edit_failed').trigger('change');
            },
            error: function (data) {
                console.log(JSON.stringify(data,null,4));
            }
        });
        function refresh(){
            var params = {};
            params.user_code = $("#user_code_noticejsp").val();//这里不需要参数
            console.log("failed:"+JSON.stringify(params.user_code));
            $.ajax({
                async: false,
                type: "POST",
                url: "../../check/loadFailednotice",
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data!=null){
                        // alert("获取数据成功");
                        console.log("check传回值:"+JSON.stringify(data,null,4));
                        //更新界面的html
                        var dt = $('#sample_editable_fail').dataTable();
                        $('#sample_editable_fail').dataTable().fnClearTable();
                        $('#EditModal_edit').modal('hide');
                        var str="";
                        for(var i=0;i<data.length;i++){
                            var noticeDate=top.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(data[i].notice.notice_date));
                            dt.fnAddData([
                                '<a id="'+data[i].notice.notice_code+'">'+data[i].notice.notice_title+'</a>',
                                data[i].noticetype.noticetype_name,
                                data[i].user.user_name,
                                noticeDate,
                                '<a style="color: red">未通过审核</a>',
                                '<a class="edit" href="javascript:;"><i class="icon-note"></i>&nbsp;编辑 </a>',
                                '<a class="delete"><i class="icon-trash"></i>&nbsp;删除 </a>	'
                            ]);
                        }

                    }else{
                        showinfo("error","数据获取失败");
                    }
                },
                error: function (data) {
                    //alert("login failed");
                    showinfo("error","数据获取失败");
                }
            });

        }


        //点击保存编辑内容
        $('#btn_distr_edit_passEdit').click(function () {


            var cs = $("#file_failed_list").children();
            var attaches = '';

            for(var i = 0 ; i < cs.length ; i++){
                console.log(cs[i].innerText);
                if(i==0){
                    attaches +=cs[i].innerText.trim();
                }else {
                    attaches+='\\'+cs[i].innerText.trim();
                }
            }
            var data;
            var params={};
            params.notice_code= $('#notice_failed_code').val();
            params.notice_title= $('#notice_title_failed').val();
            params.notice_desc=  $('#notice_desc_failed').val();
            params.notice_info= $('#summernote_1_failed').code();
            params.noticetype_code= $('#selectList_edit_failed').val();
            params.attaches = attaches==''? null:attaches;



            console.log(JSON.stringify(params,null,4));
            swal({
                title:"确认保存?" ,
                text: "",
                type: "warning",
                allowOutsideClick: true,
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonClass: "btn-info",
                cancelButtonClass: "btn-danger",
                confirmButtonText: "确认",
                cancelButtonText: "取消",
                closeOnConfirm: true,
                closeOnCancel: true
            },function(isConfirm) {
                if (!isConfirm) return;
                $.ajax({

                    async: false,
                    type: "POST",
                    url: "../../notice/noticeEdit",//注意路径  文件插入
                    data: params,
                    dataType: "json",

                    success: function (data) {
                        $('#notice_failed_code').val('');
                        $('#notice_title_failed').val('');
                        $('#notice_desc_failed').val('');
                        $('#summernote_1_failed').code('');
                        $("#file_failed_list").html('');
                        showinfo("success", "保存成功");
                        refresh();
                        $('#EditModal_edit').modal('hide');
                        console.log(JSON.stringify(data, null, 4));
                    },
                    error: function (data) {
                        console.log(JSON.stringify(data, null, 4));
                        showinfo("error", "保存失败");
                    }
                });
            });
        });




        //显示提示信息
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
        /*

         //点击上传附件
         $('#btn_failed_upload').click(function () {

         if($("#file_failed_name").text()==''){
         showinfo('warning','请先选择文件！');
         return;
         }

         var formData = new FormData($("#uploadfailedForm" )[0]);
         $.ajax({
         url: '../../file/upload' ,
         type: 'POST',
         data: formData,
         async: false,
         cache: false,
         contentType: false,
         processData: false,
         success: function (returndata) {
         console.log(JSON.stringify(returndata,null,4));
         $("#file_failed_list").append('<li id="'+returndata+'" class="padding-right-10"><i class="fa fa-file"></i>&nbsp;'+returndata+'<i style="hight:100%;padding-top:0px;padding-bottom:0px;"  class="fa fa-times-circle btn-sx btn float-right remove_file"></i></li>');
         $("#file_failed_name").text('');
         $("#failed_file").val('');
         showinfo('success','附件上传成功！');
         $(".remove_file").click(function(){
         var filename = this.parentNode.id;
         var p = {};
         p.filename = filename;
         console.log(p.filename);
         $.ajax({
         url: '../../file/delete' ,
         type: 'POST',
         data: p,
         async: false,
         dataType: "json",
         success: function (returndata) {
         ok = returndata;
         },error:function(err){
         console.log(JSON.stringify(err,null,4));
         }});
         if(ok){
         this.parentNode.remove();
         showinfo('success','附件移除成功！');
         }else{
         showinfo('error','附件移除失败！');
         }
         });
         },
         error: function (returndata) {
         showinfo('error','附件上传失败！');
         console.log(JSON.stringify(returndata,null,4));
         }
         });

         });

         //点击上传附件
         $('#btn_upload').click(function () {

         if($("#file_add_name").text()==''){
         showinfo('warning','请先选择文件！');
         return;
         }

         var formData = new FormData($("#uploadForm" )[0]);
         var ok = false;
         $.ajax({
         url: '../../file/upload' ,
         type: 'POST',
         data: formData,
         async: false,
         cache: false,
         contentType: false,
         processData: false,
         success: function (returndata) {
         console.log(JSON.stringify(returndata,null,4));
         $("#file_add_list").append('<li id="'+returndata+'" class="padding-right-10"><i class="fa fa-file"></i>&nbsp;'+returndata+'<i style="hight:100%;padding-top:0px;padding-bottom:0px;"  class="fa fa-times-circle btn-sx btn float-right remove_file"></i></li>');                    $("#file_add_name").text('');
         $("#file").val('');
         showinfo('success','附件上传成功！');
         $(".remove_file").click(function(){
         var filename = this.parentNode.id;
         var p = {};
         p.filename = filename;
         console.log(p.filename);
         $.ajax({
         url: '../../file/delete' ,
         type: 'POST',
         data: p,
         async: false,
         dataType: "json",
         success: function (returndata) {
         ok = returndata;
         },error:function(err){
         console.log(JSON.stringify(err,null,4));
         }});
         if(ok){
         this.parentNode.remove();
         showinfo('success','附件移除成功！');
         }else{
         showinfo('error','附件移除失败！');
         }



         });

         },
         error: function (returndata) {
         showinfo('error','附件上传失败！');
         console.log(JSON.stringify(returndata,null,4));
         }
         });


         });*/

        $("#draggable").draggable({
            handle: ".modal-header"
        });


        var table = $('#sample_editable_fail');

        var oTable = table.dataTable({

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // set the initial value
            "pageLength": 10,

            "language": {
                "lengthMenu": " _MENU_  记录",
                "emptyTable": "暂时没有数据",
                "info": "显示 _START_ 到 _END_ 条记录，总共 _TOTAL_ 条记录",
                "infoEmpty": "搜索无结果",
                "infoFiltered": "(从 _MAX_ 记录中筛选)",
                "search": "筛选:",
                "zeroRecords": "没有找到相匹配的结果"
            },
            "columnDefs": [{ // set default column settings
                'orderable': true,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [4,5,6]
            }],
            "order": [
                [0, "asc"]
            ], // set first column as a default sort by asc

        });

        var tableWrapper = $("#sample_editable_fail_wrapper");

        tableWrapper.find(".dataTables_length select").select2({
            showSearchInput: true //hide search box with special css class
        }); // initialize select2 dropdown

        table.on('click', '.delete', function (e) {
            e.preventDefault();

            /*if (confirm("Are you sure to delete this row ?") == false) {
             return;
             }

             var nRow = $(this).parents('tr')[0];
             oTable.fnDeleteRow(nRow);
             alert("Deleted! Do not forget to do some ajax to sync with backend :)");*/
            var nRow = $(this).parents('tr')[0];
            //alert(JSON.stringify(nRow));
            var aData = oTable.fnGetData(nRow);
            //alert(JSON.stringify(aData,null,4));
            var code = aData[0];
            code = code.substr(code.indexOf('"') + 1);
            code = code.substr(0, code.lastIndexOf('"'));

            swal({
                title:"确认删除?" ,
                text: "",
                type: "warning",
                allowOutsideClick: true,
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonClass: "btn-info",
                cancelButtonClass: "btn-danger",
                confirmButtonText: "确认",
                cancelButtonText: "取消",
                closeOnConfirm: true,
                closeOnCancel: true
            },function(isConfirm) {
                if (!isConfirm) return;

                var params = {};
                params.notice_code = code;

                $.ajax({
                    async: false,
                    type: "POST",
                    url: "../../notice/delete",
                    data: params,
                    dataType: "json",
                    success: function (data) {
                        if (data != null) {
                            showinfo("success", "删除数据成功");
                            console.log(JSON.stringify(data, null, 4));
                            oTable.fnDeleteRow(nRow);
                        } else {
                            showinfo("error", "数据删除失败");
                        }
                    },
                    error: function (data) {
                        //alert("login failed");
                        showinfo("error", "数据获取失败");
                    }
                });
            });

        });

        table.on('click', '.cancel', function (e) {

        });

        table.on('click', '.edit', function (e) {

            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            var code = aData[0];

            console.log(code);

            code = code.substr(code.indexOf('"')+1);
            code = code.substr(0,code.lastIndexOf('"'));
            console.log(code);


            var params = {};
            params.code = code;

            $.ajax({
                async: false,
                type: "POST",
                url: "../../notice/loadByCode",
                data: params,
                scriptCharset: 'gbk',
                dataType: "json",
                success: function (data) {
                    if(data!=null){

                        console.log(JSON.stringify(data,null,4));
                        $('#notice_title_failed').val(data.notice.notice_title);
                        $('#notice_desc_failed').val(data.notice.notice_desc);
                        $('#selectList_edit_failed').val(data.noticetype.noticetype_code);
                        $('#selectList_edit_failed').trigger('change');
                        $('#notice_failed_code').val(data.notice.notice_code);


                        var str = '';
                        for(var i = 0 ; i < data.attaches.length;i++){
                            str+= '<li><i class="fa fa-file" id="'+data.attaches[i].attach_code+'"></i>&nbsp;'+data.attaches[i].attach_name+'<i style="hight:100%;padding-top:0px;padding-bottom:0px;" class="fa fa-times-circle  btn btn-sx float-right margin-right-10 remove_file"></i></li>';


                        }
                        $('#file_failed_list').html(str);

                        $(".remove_file").click(function(){
                            this.parentNode.remove();
                        });


                        $.ajax({
                            async: false,
                            type: "GET",
                            cache: false,
                            url: '../../htmls/'+data.noticetype.noticetype_code+'/'+data.notice.notice_uri,
                            dataType: "html",
                            success: function(res)
                            {
                                console.log(res);
                                $('#summernote_1_failed').code(res);
                            }
                        });

                        /*var xhr = new XMLHttpRequest();
                         xhr.overrideMimeType("text/html;charset=gbk");
                         xhr.open('get','../../htmls/'+data.notice.notice_uri,true);
                         xhr.send();
                         xhr.onreadystatechange = function () {
                         if (xhr.readyState == 4&&xhr.status == 200){
                         console.log("请求服务器数据成功且返回数据成功！");
                         //document.getElementById('des').innerHTML = ;
                         $('#summernote_1_failed').code(xhr.responseText);
                         }
                         };*/
                    }else{

                        showinfo("error","数据获取失败");
                    }
                },
                error: function (data) {
                    console.log(JSON.stringify(data,null,4));
                    //alert("login failed");
                    showinfo("error","数据获取失败");
                }
            });


            $('#EditModal_edit').modal('show');


        });






    }

    return {
        //main function to initiate the module
        init: function () {
            handle_check();
            checkPass();
        }
    };

}();

