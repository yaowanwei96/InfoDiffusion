var RankingList = function () {

    var handleTable = function () {
        refresh();
        function refresh(){
            var params = {};
            $.ajax({
                async: false,
                type: "POST",
                url: "../../user/userRankingList",
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data!=null){
                        // alert("获取数据成功");
                        console.log(JSON.stringify(data,null,4));
                        //更新界面的html
                        var dt = $('#rankinglist_editable_1').dataTable();
                        $('#rankinglist_editable_1').dataTable().fnClearTable();
                        var str="";
                        for(var i=0;i<data.length;i++){
                            dt.fnAddData([
                                data[i].user.user_name,
                                data[i].value,//发布文章数量
                                data[i].level
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

        var table = $('#rankinglist_editable_1');

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

        var tableWrapper = $("#rankinglist_editable_1");

        tableWrapper.find(".dataTables_length select").select2({
            showSearchInput: true //hide search box with special css class
        }); // initialize select2 dropdown




    }
    return {
        //main function to initiate the module
        init: function () {
            handleTable();
        }
    };
}();