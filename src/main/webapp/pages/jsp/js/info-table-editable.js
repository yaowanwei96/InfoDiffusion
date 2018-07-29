var TEditable = function () {

    var handleTable = function () {

        $("#draggable").draggable({
            handle: ".modal-header"
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

        var table = $('#sample_editable_1');

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

        var tableWrapper = $("#sample_editable_1_wrapper");

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
                            showInfo("success", "删除数据成功");
                            console.log(JSON.stringify(data, null, 4));
                            oTable.fnDeleteRow(nRow);
                        } else {
                            showInfo("error", "数据删除失败");
                        }
                    },
                    error: function (data) {
                        //alert("login failed");
                        showInfo("error", "数据获取失败");
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
                        $('#notice_title_edit').val(data.notice.notice_title);
                        $('#notice_desc_edit').val(data.notice.notice_desc);
                        $('#selectList_edit').val(data.noticetype.noticetype_code);
                        $('#selectList_edit').trigger('change');
                        $('#notice_edit_code').val(data.notice.notice_code);


                        var str = '';
                        for(var i = 0 ; i < data.attaches.length;i++){
                            str+= '<li><i class="fa fa-file" id="'+data.attaches[i].attach_code+'"></i>&nbsp;'+data.attaches[i].attach_name+'<i style="hight:100%;padding-top:0px;padding-bottom:0px;" class="fa fa-times-circle  btn btn-sx float-right margin-right-10 remove_file"></i></li>';


                        }
                        $('#file_edit_list').html(str);

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
                               $('#summernote_1_edit').code(res);
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
                                $('#summernote_1_edit').code(xhr.responseText);
                            }
                        };*/
                    }else{

                        showInfo("error","数据获取失败");
                    }
                },
                error: function (data) {
                    console.log(JSON.stringify(data,null,4));
                    //alert("login failed");
                    showInfo("error","数据获取失败");
                }
            });


            $('#EditModal').modal('show');


        });




    }
    return {
        //main function to initiate the module
        init: function () {
            handleTable();
        }
    };
}();