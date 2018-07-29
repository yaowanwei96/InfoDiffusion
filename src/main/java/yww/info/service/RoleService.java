package yww.info.service;

import yww.info.model.Role;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
public interface RoleService {

    boolean add(String role_name, int role_weight);

    boolean delete(int role_code);

    boolean update(int role_code, String role_name, int role_weight);

    boolean select(int role_code);

    List<Role> loadRoleList();

    List<Role> loadRoleByUserCode(String user_code, HttpSession session);


    boolean roleMenuAdd(String role_code, String menus, HttpSession session);

    boolean roleUserAdd(String user_code, String roles, HttpSession session);
}
