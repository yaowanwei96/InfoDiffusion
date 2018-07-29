package yww.info.controller;

import yww.info.model.Menu;
import yww.info.model.Role;
import yww.info.model.User;
import yww.info.service.RoleService;
import yww.info.service.UserService;
import yww.info.viewmodel.RankingInfoVo;
import yww.info.viewmodel.UserInfoVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
@Controller
@RequestMapping("user")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    RoleService roleService;

    /**
     * 根据用户角色ID加载此ID下所有用户
     * @param role_code
     * @return
     */
    @RequestMapping("/selectUserByRole")
    @ResponseBody
    public List<UserInfoVo> lodeUserByRole(String role_code){
        return userService.lodeUserByRole(Integer.parseInt(role_code));
    }

    /*
    @RequestMapping("/index")
    public String index(String role_code){
        return  "pages/jsp/index";
    }*/


    @RequestMapping("/userRankingList")
    @ResponseBody
    public List<RankingInfoVo> getRankingList(){

        return userService.getRankingList();
    }
    /**
     * 用户登录
     * @param code
     * @param pwd
     * @param roleCode
     * @param session
     * @return
     */
    @RequestMapping("/login")
    @ResponseBody
    public User login(String code, String pwd, String roleCode, HttpSession session){
       // System.out.println(code+"--"+pwd+"---"+roleCode);
        User user= userService.login(code,pwd);
        if(user!=null) {
            session.setAttribute("user", user);//保持登录状态
            List<Menu> menus=userService.getMenus(user.getUser_code());
            session.setAttribute("menus", menus);//保持权限信息
            return user;
        }
        else{
            return null;
        }
    }

    /**
     * 用户注册
     * @param user_code
     * @param user_name
     * @param user_nickname
     * @param user_phone
     * @param user_sex
     * @param user_headpic
     * @param user_pwd
     * @return
     */
    @RequestMapping("/register")
    @ResponseBody
    public boolean register(String user_code, String user_name, String user_nickname, String user_phone,int user_sex, String user_headpic, String user_pwd){
         System.out.println("sex："+user_sex);
          return  userService.register(user_code, user_name, user_nickname,  user_phone, user_sex, user_headpic, user_pwd);
    }

    /**
     * 用户登出
     * @param session
     * @return
     */
    @RequestMapping("/login_out")
    @ResponseBody
    public boolean loginout(HttpSession session){
          session.removeAttribute("user");
          return  true;
    }

    @RequestMapping("/updateMsg")
    @ResponseBody
    public boolean updateMsg(String user_code,String user_name,String user_nickname,String user_phone,String user_sex,HttpSession session){
        System.out.println("in controller udate");
        return userService.updateMsg(user_code,user_name,user_nickname,user_phone,Integer.parseInt(user_sex),session);
    }

    @RequestMapping("/updatePwd")
    @ResponseBody
    public boolean updatePwd(String user_code,String current_pwd,String user_pwd){
        System.out.println("in controller udatepwd");
        return userService.updatePwd(user_code,current_pwd,user_pwd);
    }

    @RequestMapping("/userList")
    @ResponseBody
    public List<User> loadUserList(){
        return userService.loadUserList();

    }
    @RequestMapping("/deleteUserByCode")
    @ResponseBody
    public boolean deleteUserByCode(String userCode){
        System.out.println("in controller user");
        return userService.deleteUserByCode(userCode);
    }

    @RequestMapping("/loadUserByCode")
    @ResponseBody
    public User loadUserByCode(String user_code){
        return userService.loadUserByCode(user_code);
    }

    @RequestMapping("/updateMsgByAdmin")
    @ResponseBody
    public boolean updateMsgByAdmin(String user_code,String user_name,String user_nickname,String user_phone,String user_sex){
        return userService.updateMsgByAdmin(user_code,user_name,user_nickname,user_phone,Integer.parseInt(user_sex));
    }
}
