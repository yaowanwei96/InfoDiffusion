var MenuTEditable = function () {

    var handleTable = function () {


        //保存后刷新
        refresh();
        //显示菜单
        function refresh(){
            var params = {};

            $.ajax({
                async: false,
                type: "POST",
                url: "../../menu/show",
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data!=null){
                        // alert("获取数据成功");
                        console.log(JSON.stringify(data,null,4));
                        //更新界面的html
                        var dt = $('#sample_editable_2').dataTable();
                        $('#sample_editable_2').dataTable().fnClearTable();
                        var str="";
                        for(var i=0;i<data.length;i++){
                            //var noticeDate=top.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(data[i].notice.notice_date));
                            dt.fnAddData([
                                //'<a id="'+data[i].notice.notice_code+'">'+data[i].notice.notice_title+'</a>',

                                data[i].menu_code,
                                data[i].menu_name,
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
        $('#menu_btn_distr_edit').click(function () {



            var data;
            var params={};
            params.menu_code= $('#menu_code_edit').val();
            params.menu_name= $('#menu_name_edit').val();





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
                    url: "../../menu/update",//注意路径  文件插入
                    data: params,
                    dataType: "json",

                    success: function (data) {

                        showInfo("success", "保存成功");
                        refresh();
                        $('#MenuEditModal').modal('hide');
                        console.log(JSON.stringify(data, null, 4));
                    },
                    error: function (data) {
                        console.log(JSON.stringify(data, null, 4));
                        showInfo("error", "保存失败");
                    }
                });
            });
        });

//权限添加
        $('#menu_btn_distr_add').click(function(){
            var params = {};
            params.menu_name = $("#menu_name_add").val();
            $.ajax({
                async: false,
                type: "POST",
                url: "../../menu/add",
                data: params,
                scriptCharset: 'gbk',
                dataType: "json",
                success: function (data) {
                    if(data!=null){
                        showInfo("success","权限添加成功");
                        refresh();
                        console.log(JSON.stringify(data,null,4));
                    }else{
                        showInfo("error","权限添加失败");
                    }
                },
                error: function (data) {
                    console.log(JSON.stringify(data,null,4));
                    showInfo("error","添加权限失败");
                }
            });
            $('#MenuAddModal').modal('hide');
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
        //权限表id
        var table = $('#sample_editable_2');

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

        var tableWrapper = $("#sample_editable_2_wrapper");
        tableWrapper.find(".dataTables_length select").select2({
            showSearchInput: true //hide search box with special css class
        }); // initialize select2 dropdown

        var a=document.createElement("a");
        a.setAttribute('class', 'btn  btn-info  btn-sm   margin-left-20px' );
        a.setAttribute('href','#MenuAddModal');
        a.setAttribute('data-toggle','modal');
        a.innerHTML = '<i class="glyphicon glyphicon-plus"></i>&nbsp;&nbsp;添加';
        tableWrapper.find(".dataTables_length").prepend(a);
        tableWrapper.find(".dataTables_length label").css('float','none');
        tableWrapper.find(".dataTables_length label").css('margin-left','20px');



        //权限信息的删除
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
                params.menu_code = code;

                $.ajax({
                    async: false,
                    type: "POST",
                    url: "../../menu/delete",
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
        //权限信息的编辑显示
        table.on('click', '.edit', function (e) {

            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);

            $('#menu_code_edit').val(aData[0]);
            $('#menu_name_edit').val(aData[1]);
            $('#MenuEditModal').modal('show');

        });




    }
    return {
        //main function to initiate the module
        init: function () {
            handleTable();
        }
    };
}();