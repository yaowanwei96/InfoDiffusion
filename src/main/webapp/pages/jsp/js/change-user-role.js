/**
 * Created by Software1 on 2018/1/18.
 */


var ChangeRole = function () {



    return {
        //main function to initiate the module
        init: function () {

            $('#btnChangerRoel').click(function(){
                //切换角色
                alert("切换成功");
                $('#changeRoleModal').modal('hide');
            });

        }
    };

}();

ChangeRole.init();