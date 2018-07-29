package yww.info.service;

import yww.info.model.Menu;

import java.util.List;

/**
 * Created by software2 on 2018/1/17.
 * hbhj
 */
public interface MenuService {
    boolean add( String menu_name);

    boolean delete(int menu_code);

    boolean update(int menu_code, String menu_name);

    boolean select(int menu_code);

    List<Menu> LoadMenuList();

    List<Menu> selectByRoleCode(int role_code);
}
