var Editors = function () {

    var handleWysihtml5 = function () {
        if (!jQuery().wysihtml5) {
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["../../assets/global/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]
            });
        }
    }



    var handleSummernote = function () {
        //编辑框初始高度
        $('#summernote_1').summernote({height: 300});

        $('#summernote_1_edit').summernote({height: 300});
        var data;
        var params={};
        params.pid = -1;
        //获取公告名在下拉菜单中显示--分别为编辑和直接发布部分
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

                $('#selectList').html(str);
                $('#selectList').trigger('change');
                $('#selectList_edit').html(str);
                $('#selectList_edit').trigger('change');
            },
            error: function (data) {
                console.log(JSON.stringify(data,null,4));
            }
        });
      //点击发布按钮上传发布信息
        $('#btn_distr').click(function () {

            var cs = $("#file_add_list").children();
            //console.log(JSON.stringify(cs,null,4))
            //定义上传的附件
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
            //接收编辑的内容上传到数据库

            params.attaches=  attaches ;
            params.noticetype_code= $('#selectList').val();
            params.notice_title= $('#notice_title').val();
            params.notice_desc=  $('#notice_desc').val();
            params.notice_info= $('#summernote_1').code();


            if(params.noticetype_code=='' || params.notice_title=='' ){
                showinfo('warning','标题不能为空！！');
                return;
            }





            console.log(JSON.stringify(params,null,4));

            swal({
                title:"确认发布?" ,
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
                    url: "../../notice/distribute",//注意路径
                    data: params,
                    dataType: "json",
                    success: function (data) {
                        //清空页面中发布内容，提示发布成功
                        if (data) {
                            $('#notice_title').val('');
                            $('#notice_desc').val('');
                            $('#summernote_1').code('');
                            $("#file_add_list").html('');
                            showinfo("success", "发布成功");
                        } else {
                            showinfo("error", "发布失败");
                        }

                    },
                    error: function (data) {
                        showinfo("error", "发布失败");
                        console.log(JSON.stringify(data, null, 4));
                    }
                });
            });
        });

            //显示新闻数据
        function refresh(){
            var params = {};
            params.noticetype_code = $("#cid").val();
            params.user_code= $('#user_code_noticejsp').val();
           // alert("user_code:"+params.user_code);
            $.ajax({
                async: false,
                type: "POST",
                url: "../../notice/selectType",
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data!=null){
                        // alert("获取数据成功");
                        console.log(JSON.stringify(data,null,4));
                        //更新界面的html
                        var dt = $('#sample_editable_1').dataTable();
                        $('#sample_editable_1').dataTable().fnClearTable();
                        var str="";
                        var noticeStatus="daishenhe";
                        console.log(noticeStatus+"status")
                        for(var i=0;i<data.length;i++){
                            var noticeDate=top.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(data[i].notice.notice_date));

                            if(data[i].notice.notice_status==0){
                                noticeStatus="待审核";
                            }
                            if(data[i].notice.notice_status==-1){
                                noticeStatus="未通过";
                            }
                            if(data[i].notice.notice_status==1){
                                noticeStatus="已通过";
                            }
                            console.log(noticeStatus+"status")
                            dt.fnAddData([
                                '<a id="'+data[i].notice.notice_code+'">'+data[i].notice.notice_title+'</a>',
                                data[i].noticetype.noticetype_name,
                                data[i].user.user_name,
                                noticeDate,
                                noticeStatus,
                                data[i].notice.notice_readtimes,
                                '<a class="edit" href="javascript:;"><i class="icon-note"></i>&nbsp;编辑 </a>',
                                '<a class="delete"><i class="icon-trash"></i>&nbsp;删除 </a>	'
                            ]);
                        }

                    }else{
                        showInfo("error","数据获取失败");
                    }
                },
                error: function (data) {
                    //alert("login failed");
                    showInfo("error","数据获取失败");
                }
            });

        }


        //点击保存编辑内容
        $('#btn_distr_edit').click(function () {


            var cs = $("#file_edit_list").children();
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
            params.notice_code= $('#notice_edit_code').val();
            params.notice_title= $('#notice_title_edit').val();
            params.notice_desc=  $('#notice_desc_edit').val();
            params.notice_info= $('#summernote_1_edit').code();
            params.noticetype_code= $('#selectList_edit').val();
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
                        $('#notice_edit_code').val('');
                        $('#notice_title_edit').val('');
                        $('#notice_desc_edit').val('');
                        $('#summernote_1_edit').code('');
                        $("#file_edit_list").html('');
                        showinfo("success", "保存成功");
                        refresh();
                        $('#EditModal').modal('hide');
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


        //点击上传附件
        $('#btn_edit_upload').click(function () {

            if($("#file_edit_name").text()==''){
                showinfo('warning','请先选择文件！');
                return;
            }

            var formData = new FormData($("#uploadEditForm" )[0]);
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
                    $("#file_edit_list").append('<li id="'+returndata+'" class="padding-right-10"><i class="fa fa-file"></i>&nbsp;'+returndata+'<i style="hight:100%;padding-top:0px;padding-bottom:0px;"  class="fa fa-times-circle btn-sx btn float-right remove_file"></i></li>');
                    $("#file_edit_name").text('');
                    $("#edit_file").val('');
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


        });
    }

    return {
        //main function to initiate the module
        init: function () {
            handleWysihtml5();
            handleSummernote();
        }
    };

}();

