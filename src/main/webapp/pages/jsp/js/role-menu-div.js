var RoleMenuDivEditable = function () {

    var handleTable = function () {


        $("#draggable").draggable({
            handle: ".modal-header"
        });
//保存后刷新
        refresh();
        LoadMenus();

        //加载角色所有的菜单
        function LoadMenus(){
            var params = {};
            $.ajax({
                async: false,
                type: "POST",
                url: "../../menu/show",
                data: params,
                dataType: "json",
                success: function (data) {
                    if (data != null) {

                        console.log(JSON.stringify(data, null, 4));
                        // oTable.fnDeleteRow(nRow);
                        var str="";
                        for (var i=0;i<data.length;i++){
                            var j=data[i];

                            str+='<option id="'+ j.menu_code+'"  value="'+ j.menu_code+'"  >'+ j.menu_name+'</option>';

                        }

                        console.log(str);
                        //角色权限分配
                        $('#my_multi_select2').html(str);




                    } else {
                        showInfo("error", "数据删除失败");
                    }
                },
                error: function (data) {
                    //alert("login failed");
                    showInfo("error", "数据获取失败");
                }
            });


        }
        //获取角色权限信息
        function refresh(){
            var params = {};
            $.ajax({
                async: false,
                type: "POST",
                url: "../../role/show",
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data!=null){
                        // alert("获取数据成功");
                        console.log(JSON.stringify(data,null,4));
                        //更新界面的html
                        var dt = $('#sample_editable_5').dataTable();
                        $('#sample_editable_5').dataTable().fnClearTable();
                        var str="";
                        for(var i=0;i<data.length;i++){
                            //var noticeDate=top.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(data[i].notice.notice_date));
                            dt.fnAddData([
                                //'<a id="'+data[i].notice.notice_code+'">'+data[i].notice.notice_title+'</a>',
                                data[i].role_code,
                                data[i].role_name,
                                data[i].role_weight,
                                '<a class="delete"><i class="glyphicon glyphicon-plus"></i>&nbsp;分配权限</a>	'
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

//点击保存编辑内容--角色信息编辑---重复
        $('#btn_distr_edit').click(function () {



            var data;
            var params={};
            params.role_code= $('#role_code_edit').val();
            params.role_name= $('#role_name_edit').val();
            params.role_weight=  $('#role_weight_edit').val();




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
                    url: "../../role/update",//注意路径  文件插入
                    data: params,
                    dataType: "json",

                    success: function (data) {

                        showInfo("success", "保存成功");
                        refresh();
                        $('#EditModal').modal('hide');
                        console.log(JSON.stringify(data, null, 4));
                    },
                    error: function (data) {
                        console.log(JSON.stringify(data, null, 4));
                        showInfo("error", "保存失败");
                    }
                });
            });
        });

//点击保存muti_select--角色权限
        $('#btn_Select2').click(function () {
            var data;
            var params={};
           // alert($("#role_current_code").text()+"my_multi_select2:"+  $("#my_multi_select2").val());

            var code = $("#role_current_code").text();
            params.role_code= code;
            params.menus= JSON.stringify($("#my_multi_select2").val());
           // alert(params.menus);
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
                    url: "../../role/rolemenuadd",//注意路径  文件插入
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



        //显示提示信息
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

        //角色权限信息修改部分表格
        var table = $('#sample_editable_5');

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






        //在角色权限分配部分的点击分配权限所作出的点击事件
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
            $("#role_current_code").text(aData[0]);
            $("#role_current_name").text(aData[1]);

            /*$("#rolemenu_top").val("角色："+aData[1]);*/

                var params = {};
                params.role_code = code;

                $.ajax({
                    async: false,
                    type: "POST",
                    url: "../../menu/selectByRoleCode",
                    data: params,
                    dataType: "json",
                    success: function (data) {
                        if (data != null) {






                            var lis2 = $('.ms-list')[2].childNodes;

                            // alert(lis.length);
                            for (var i=0;i<lis2.length;i++){
                                /*alert(ops[i].id);*/
                                lis2[i].style.display='block';
                            }


                            var lis = $('.ms-list')[3].childNodes;

                           // alert(lis.length);
                            for (var i=0;i<lis.length;i++){
                                /*alert(ops[i].id);*/
                                lis[i].style.display='none';
                            }

                            var ops = $('#my_multi_select2').find('option');
                            //alert(ops.length);


                            for (var i=0;i<ops.length;i++){
                                ops[i].removeAttribute('selected');
                            }

                            console.log(JSON.stringify(data, null, 4));
                         // oTable.fnDeleteRow(nRow);
                            var aa = [];
                            for (var i=0;i<data.length;i++){
                                var j=data[i];
                                console.log(j.menu_code);
                                aa.push(j.menu_code);
                               /* $('#'+j.menu_code).attr("selected",true);*/
                            }

                            $("#my_multi_select2").val(aa).trigger("change")
                           // alert("my_multi_select2:"+  $("#my_multi_select2").val());
                            //在角色和权限部分显示的muti——select框中显示所有菜单
                            $('#my_multi_select2').multiSelect();

                           /* $('#my_multi_select2').select2().trigger("change")

                            console.log($('#my_multi_select2').html());*/
                            //RoleMenuDivEditable.init();

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


        table.on('click', '.cancel', function (e) {

        });

        table.on('click', '.edit', function (e) {

            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            var code = aData[0];

            console.log(code);


            //code = code.substr(code.indexOf('"')+1);
            //code = code.substr(0,code.lastIndexOf('"'));
            //console.log(code);
            var role_code=aData[0]
            var role_name=aData[1]
            var role_weight=aData[2]

            $('#role_code_edit').val(role_code);
            $('#role_name_edit').val(role_name);
            $('#role_weight_edit').val(role_weight);
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