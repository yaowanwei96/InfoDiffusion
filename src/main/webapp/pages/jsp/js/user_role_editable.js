var UserRoleEdit = function () {


    var handleUserRole = function() {
        refresh();
        refreshRolename();
        function refreshRolename() {
            var params = {};
            $.ajax({
                async: false,
                type: "POST",
                url: "../../role/show",
                data: params,
                dataType: "json",
                success: function (data) {
                    if (data != null) {
                        console.log(JSON.stringify(data, null, 4));
                        var str="";
                        for (var i=0;i<data.length;i++){
                            var j=data[i];
                            str+='<option id="'+ j.role_code+'"  value="'+ j.role_code+'"  >'+ j.role_name+'</option>';
                        }
                        console.log(str);
                        $('#my_multi_select1').html(str);
                    } else {
                        showInfo("error", "角色数据获取失败");
                    }
                },
                error: function (data) {
                    showInfo("error", "角色数据获取失败");
                }
            });

        }
        function refresh() {
            var params = {};
            $.ajax({
                async: false,
                type: "POST",
                url: "../../user/userList",
                data: params,
                dataType: "json",
                success: function (data) {
                    if (data != null) {
                        // alert("获取数据成功");
                        console.log(JSON.stringify(data, null, 4));
                        //更新界面的html
                        var dt = $('#user_role_tab').dataTable();
                        $('#user_role_tab').dataTable().fnClearTable();
                        var str = "";
                        for (var i = 0; i < data.length; i++) {
                            dt.fnAddData([
                                data[i].user_code,
                                data[i].user_nickname,
                                '<a class="add"><i class="glyphicon glyphicon-plus"></i>&nbsp;选择 </a>	'
                            ]);
                        }

                    } else {
                        showInfo("error", "数据获取失败");
                    }
                },
                error: function (data) {
                    //alert("login failed");
                    showInfo("error", "数据获取失败");
                }
            });

        }


        //点击保存muti_select--用户角色
        $('#btn_Select').click(function () {
            var data;
            var params={};
            //alert($("#user_current_code").text()+"my_multi_select1:"+  $("#my_multi_select1").val());
            var code = $("#user_current_code").text();
            params.user_code= code;
            params.roles= JSON.stringify($("#my_multi_select1").val());
            //alert(params.roles);
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
                    url: "../../role/roleuseradd",//注意路径  文件插入
                    data: params,
                    dataType: "json",
                    success: function (data) {
                        showInfo("success", "保存成功");
                        refresh();
                        console.log(JSON.stringify(data, null, 4));
                    },
                    error: function (data) {
                        console.log(JSON.stringify(data, null, 4));
                        showInfo("error", "保存失败");
                    }
                });
            });
        });



        function showInfo(type, info) {
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

            toastr[type](info, '');
        }

        var table = $('#user_role_tab');

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
                "search": "",
                "zeroRecords": "没有找到相匹配的结果"
            },
            "columnDefs": [{ // set default column settings
                'orderable': true,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [4, 5, 6]
            }],
            "order": [
                [0, "asc"]
            ], // set first column as a default sort by asc

        });

        var tableWrapper = $("#sample_editable_3_wrapper");


        tableWrapper.find(".dataTables_length select").select2({
            showSearchInput: true //hide search box with special css class
        }); // initialize select2 dropdown


        table.on('click', '.add', function (e) {

            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            var user_code = aData[0];
            $("#user_current_code").text(aData[0]);
            $("#user_current_name").text(aData[1]);

            console.log(user_code);
            var params = {};
            params.user_code = user_code;
            $.ajax({
                async: false,
                type: "POST",
                url: "../../role/loadRoleByUserCode",
                data: params,
                dataType: "json",
                success: function (data) {
                    console.log(JSON.stringify(data, null, 4));
                    if (data != null) {


                        var lis2 = $('.ms-list')[0].childNodes;

                        // alert(lis.length);
                        for (var i=0;i<lis2.length;i++){
                            /*alert(ops[i].id);*/
                            lis2[i].style.display='block';
                        }


                        var lis = $('.ms-list')[1].childNodes;

                        // alert(lis.length);
                        for (var i=0;i<lis.length;i++){
                            /*alert(ops[i].id);*/
                            lis[i].style.display='none';
                        }

                        var ops = $('#my_multi_select1').find('option');
                        //alert(ops.length);


                        for (var i=0;i<ops.length;i++){
                            ops[i].removeAttribute('selected');
                        }

                        console.log(JSON.stringify(data, null, 4));



                        var aa = [];
                        for (var i=0;i<data.length;i++){
                            var j=data[i];
                            console.log(j.role_code);
                            aa.push(j.role_code);
                        }

                        $("#my_multi_select1").val(aa).trigger("change")
                        //用户角色分配
                        $('#my_multi_select1').multiSelect();


                    } else {
                        showInfo("error", "用户权限加载失败");
                    }
                },
                error: function (data) {
                    console.log(JSON.stringify(data, null, 4));
                    //alert("login failed");
                    showInfo("error", "用户权限加载失败");
                }

            });
        });
    }


    return {
        init: function () {
            handleUserRole();
        }
    };

}();