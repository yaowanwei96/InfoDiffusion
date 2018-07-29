package yww.info.service.serviceImpl;

import yww.info.dao.MenuDao;
import yww.info.model.Menu;
import yww.info.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by software2 on 2018/1/17.
 * hbhj
 */
@Service
public class MenuServiceImpl implements MenuService {
    @Autowired
    MenuDao menuDao;
    @Override
    public boolean add(String menu_name) {
        return menuDao.insert(menu_name);
    }

    @Override
    public boolean delete(int menu_code) {
        return menuDao.delete(menu_code);
    }

    @Override
    public boolean update(int menu_code, String menu_name) {
        return menuDao.update(menu_code,menu_name);
    }

    @Override
    public boolean select(int menu_code) {
        return menuDao.select(menu_code);
    }

    @Override
    public List<Menu> LoadMenuList() {
        return menuDao.LoadMenuList();
    }

    @Override
    public List<Menu> selectByRoleCode(int role_code) {
        return menuDao.loadByRoleId(role_code);
    }

}
