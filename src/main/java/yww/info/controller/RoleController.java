package yww.info.controller;

import yww.info.model.Role;
import yww.info.service.RoleService;
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
@RequestMapping("role")
public class RoleController {
    @Autowired
    RoleService roleService;

    @RequestMapping("/add")
    @ResponseBody
    public boolean add( String role_name, int role_weight ){
        return  roleService.add(role_name,role_weight);
    }
    @RequestMapping("/delete")
    @ResponseBody
    public boolean delete(int role_code){
        return  roleService.delete(role_code);

    }
    @RequestMapping("/update")
    @ResponseBody
    public boolean update(int role_code,String role_name, int role_weight){
        return  roleService.update(role_code,role_name,role_weight);

    }
    @RequestMapping("/select")
    @ResponseBody
    public  boolean select(int role_code){
        return  roleService.select(role_code);

    }
    @RequestMapping("/show")
    @ResponseBody
    public List<Role> loadRoleList(){
        return roleService.loadRoleList();
    }

    @RequestMapping("/loadRoleByUserCode")
    @ResponseBody
    public List<Role> loadRoleByUserCode(String user_code, HttpSession session){
        return roleService.loadRoleByUserCode(user_code,session);
    }

    @RequestMapping("/rolemenuadd")
    @ResponseBody
    public boolean roleMenuAdd(String role_code,String menus, HttpSession session){
        System.out.println("in roleMenuAdd controller");
        return roleService.roleMenuAdd(role_code,menus,session);
    }

    @RequestMapping("/roleuseradd")
    @ResponseBody
    public boolean roleUserAdd(String user_code,String roles, HttpSession session){
        System.out.println("in roleuserAdd controller");
        return roleService.roleUserAdd(user_code,roles,session);
    }

}
