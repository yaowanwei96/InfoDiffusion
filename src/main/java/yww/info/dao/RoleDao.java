package yww.info.dao;

import yww.info.model.Role;
import yww.info.model.Role_div;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import yww.info.model.Role_menu;

import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
public interface RoleDao {

    /**
     * 注册的同时增加角色分配
     * @param user_code
     * @param role_code
     * @return
     */
    @Insert("insert into role_div (user_code,role_code)  values (#{0},#{1})")
    boolean addDiv(String user_code, int role_code);

    /**
     * 根据用户id加载此id下所有角色
     * @param code
     * @return
     */
    @Select(" select * from role where role.role_code in (select role_div.role_code from role_div where role_div.user_code=#{0})")
    List<Role> loadByUserCode(String code);

    /**
     * 根据用户id和角色id加载用户组
     * @param code
     * @return
     */
    @Select("select * from role_div where user_code=#{0}")
    Role_div loadByUserCodeAndRoleCode(String code);

    /**
     * 通过角色ID查找角色信息
     * @param role_code
     * @return
     */
    @Select("select * from role where role_code=#{0}")
    Role loadByRoleCode(int role_code);

    /**
     *根据角色id删除角色
     * @param role_code
     * @return
     */
    @Delete("delete from role where role_code=#{0}")
    boolean delete(int role_code);

    /**
     * 添加角色
     * @param roleName
     * @return
     */
    @Insert("insert into role(role_name) values(#{0})")
    boolean add(String roleName);

    /**
     * 添加角色信息（包括权重）
     * @param roleName
     * @param weight
     * @return
     */
    @Insert("insert into role(role_name,role_weight) values(#{0},#{1})")
    boolean addAll (String roleName,int weight);



    /**
     * 更新角色信息
     * @param role_code
     * @param role_name
     * @param role_weight
     * @return
     */
    @Update("update role set role_name=#{1},role_weight=#{2} where role_code=#{0}")
    boolean update(int role_code, String role_name, int role_weight);


    /**
     * 根据角色Code查询信息
     * @param role_code
     * @return
     */
    @Select("select * from role where role_code=#{0}")
    boolean select(int role_code);


    /**
     * 角色列表
     * @return
     */
    @Select("select * from role")
    List<Role> loadRoleList();

    @Delete("delete from role_menu where role_code=#{0}")
    boolean deleteRoleMenuByRoleCode(String role_code);

    @Insert("insert into role_menu(role_code,menu_code) values(#{0},#{1})")
    boolean addRoleMenu(int role_code, int menu_code);

    @Select("select * from role_menu where role_code=#{0}")
    List<Role_menu> isRoleMenu(String role_code);
}
