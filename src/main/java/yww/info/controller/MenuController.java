package yww.info.controller;

import yww.info.model.Menu;
import yww.info.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by software2 on 2018/1/17.
 * hbhj
 */
@Controller
@RequestMapping("menu")
public class MenuController {
    @Autowired
    MenuService menuService;


    @RequestMapping("/add")
    @ResponseBody
    public  boolean add(String menu_name){
        return menuService.add(menu_name);

    }
    @RequestMapping("/delete")
    @ResponseBody
    public  boolean delete(int menu_code){
        return  menuService.delete(menu_code);
    }
    @RequestMapping("/update")
    @ResponseBody
    public  boolean update(int menu_code, String menu_name){
        return  menuService.update(menu_code,menu_name);
    }
    @RequestMapping("/select")
    @ResponseBody
    public  boolean select(int menu_code){
        return  menuService.select(menu_code);

    }
    @RequestMapping("/show")
    @ResponseBody
    public List<Menu> LoadMenuList(){
        return menuService.LoadMenuList();
    }

    @RequestMapping("/selectByRoleCode")
    @ResponseBody
    public List<Menu> selectByRoleCode(int role_code){
        return  menuService.selectByRoleCode(role_code);
    }
}
