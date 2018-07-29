package yww.info.viewmodel;

import yww.info.model.Menu;
import yww.info.model.Role;

import java.util.List;

/**
 * Created by Software1 on 2018/1/19.
 */
public class RoleInfoVo {

    Role role;
    List<Menu> menus;

    public RoleInfoVo() {
    }

    @Override
    public String toString() {
        return "RoleInfoVo{" +
                "role=" + role +
                ", menus=" + menus +
                '}';
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<Menu> getMenus() {
        return menus;
    }

    public void setMenus(List<Menu> menus) {
        this.menus = menus;
    }
}
