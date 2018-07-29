var UserTEditable = function () {

    var handleTable = function () {
        refresh();
        function refresh(){
            var params = {};
            $.ajax({
                async: false,
                type: "POST",
                url: "../../user/userList",
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data!=null){
                        // alert("获取数据成功");
                        console.log(JSON.stringify(data,null,4));
                        //更新界面的html
                        var dt = $('#sample_editable_3').dataTable();
                        $('#sample_editable_3').dataTable().fnClearTable();
                        var str="";
                        for(var i=0;i<data.length;i++){
                            dt.fnAddData([
                                data[i].user_code,
                                data[i].user_name,
                                data[i].user_nickname,
                                data[i].user_phone,
                                data[i].user_sex==0 ? "女":"男",
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
        $('#userMsg_admin_edit').click(function () {

            var params={};
            params.user_code= $('#user_code_admin_edit').val();
            params.user_name= $('#user_name_admin_edit').val();
            params.user_nickname=  $('#user_nickname_admin_edit').val();
            params.user_sex= $('#user_sex_admin_edit').val();
            params.user_phone= $('#user_phone_admin_edit').val();
            if(params.user_name=='' ||   params.user_nickname== ''){
                showInfo("warning", "用户名和昵称不能为空！");
                return;
            }
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
                    url: "../../user/updateMsgByAdmin",
                    data: params,
                    dataType: "json",
                    success: function (data) {
                        showInfo("success", "保存成功");
                        refresh();
                        $('#UserEditModal').modal('hide');
                        console.log(JSON.stringify(data, null, 4));
                    },
                    error: function (data) {
                        console.log(JSON.stringify(data, null, 4));
                        showInfo("error", "保存失败");
                    }
                });
            });
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

        var table = $('#sample_editable_3');

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

        var tableWrapper = $("#sample_editable_3_wrapper");

        tableWrapper.find(".dataTables_length select").select2({
            showSearchInput: true //hide search box with special css class
        }); // initialize select2 dropdown

        table.on('click', '.delete', function (e) {
            e.preventDefault();
            var nRow = $(this).parents('tr')[0];
            //alert(JSON.stringify(nRow));
            var aData = oTable.fnGetData(nRow);
            //alert(JSON.stringify(aData,null,4));
            var code = aData[0];
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
                params.userCode = code;
                //alert(code);
                $.ajax({
                    async: false,
                    type: "POST",
                    url: "../../user/deleteUserByCode",
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
                        showInfo("error", "删除数据失败");
                    }
                });
            });

        });

        table.on('click', '.cancel', function (e) {

        });

        table.on('click', '.edit', function (e) {

            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            var user_code = aData[0];
            console.log(user_code);
            var params = {};
            params.user_code = user_code;

            $.ajax({
                async: false,
                type: "POST",
                url: "../../user/loadUserByCode",
                data: params,
                scriptCharset: 'gbk',
                dataType: "json",
                success: function (data) {

                    console.log(JSON.stringify(data,null,4));
                    if(data!=null){

                        $('#user_name_admin_edit').val(data.user_name);
                        $('#user_nickname_admin_edit').val(data.user_nickname);
                        $('#user_sex_admin_edit').val(data.user_sex);
                        $('#user_sex_admin_edit').trigger('change');
                        $('#user_phone_admin_edit').val(data.user_phone);
                        $('#user_code_admin_edit').val(data.user_code);
                        console.log(JSON.stringify(data,null,4));

                        $('#UserEditModal').modal('show');



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


        });


    }
    return {
        //main function to initiate the module
        init: function () {
            handleTable();
        }
    };
}();