package yww.info.model;

import java.io.Serializable;

/**
 * Created by Software1 on 2018/1/17.
 */
public class Menu  implements Serializable{
    private int  menu_code;
    private String menu_name;

    public Menu(int menu_code, String menu_name) {
        this.menu_code = menu_code;
        this.menu_name = menu_name;
    }

    public Menu() {
    }

    @Override
    public String toString() {
        return "Menu{" +
                "menu_code=" + menu_code +
                ", menu_name='" + menu_name + '\'' +
                '}';
    }

    public int getMenu_code() {
        return menu_code;
    }

    public void setMenu_code(int menu_code) {
        this.menu_code = menu_code;
    }

    public String getMenu_name() {
        return menu_name;
    }

    public void setMenu_name(String menu_name) {
        this.menu_name = menu_name;
    }
}
