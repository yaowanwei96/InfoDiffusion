package yww.info.model;

import java.io.Serializable;

/**
 * Created by Software1 on 2018/1/17.
 */
public class Role_menu implements Serializable{
    int role_code;
    int menu_code;

    public Role_menu() {
    }

    public Role_menu(int role_code, int menu_code) {
        this.role_code = role_code;
        this.menu_code = menu_code;
    }

    public int getRole_code() {
        return role_code;
    }

    public void setRole_code(int role_code) {
        this.role_code = role_code;
    }

    public int getMenu_code() {
        return menu_code;
    }

    public void setMenu_code(int menu_code) {
        this.menu_code = menu_code;
    }

    @Override
    public String toString() {
        return "Role_menu{" +
                "role_code=" + role_code +
                ", menu_code=" + menu_code +
                '}';
    }
}
