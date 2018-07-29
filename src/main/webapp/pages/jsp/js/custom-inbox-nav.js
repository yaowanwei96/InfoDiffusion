/**
 * Created by Software1 on 2018/1/19.
 */
/**
 * Created by Software1 on 2018/1/19.
 */

var CunstomInboxNav = function () {
    return {
        //main function to initiate the module
        init: function () {


            $('.custome-inbox-nav li').click(function() {

                var s = $('.custome-inbox-nav li');
                for(var i = 0 ; i< s.length;i++){
                    s.removeClass('active');
                    s.css('background-color','white');

                }
                // alert(this.innerHTML);

                this.classList.add("active");
                this.style.backgroundColor ='#F0F0F0';

                $('.tab-pane.active').css('display','none');
                $('._li.active').css('display','none');
                $('.tab-pane.active').removeClass('active');
                $('._li.active').removeClass('active');



                //alert(this.id);
                switch (this.id){
                    case 'tab_1':
                        $('#li_tab_1').css('display','block');
                        $('#portlet_tab_1').css('display','block');
                        $('#li_tab_1').addClass('active');
                        $('#portlet_tab_1').addClass('active');
                        break;
                    case 'tab_2':
                        $('#li_tab_2').css('display','block');
                        $('#portlet_tab_2').css('display','block');
                        $('#li_tab_2').addClass('active');
                        $('#portlet_tab_2').addClass('active');
                        break;
                    case 'tab_3':
                        $('#li_tab_3').css('display','block');
                        $('#portlet_tab_3').css('display','block');
                        $('#li_tab_3').addClass('active');
                        $('#portlet_tab_3').addClass('active');
                        break;
                    case 'tab_4':
                        $('#li_tab_4').css('display','block');
                        $('#portlet_tab_4').css('display','block');
                        $('#li_tab_4').addClass('active');
                        $('#portlet_tab_4').addClass('active');
                        break;
                    case 'tab_5':
                        $('#li_tab_5').css('display','block');
                        $('#portlet_tab_5').css('display','block');
                        $('#li_tab_5').addClass('active');
                        $('#portlet_tab_5').addClass('active');
                        break;
                }


            });

        }
    };
}();
jQuery(document).ready(function() {
    CunstomInboxNav.init();
});