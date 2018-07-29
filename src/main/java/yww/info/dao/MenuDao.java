package yww.info.dao;

import yww.info.model.Menu;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * Created by software2 on 2018/1/17.
 * hbhj
 */
public interface MenuDao {
    @Insert("insert into menu (menu_name)  values(#{0})" )
    boolean insert(String menu_name);

    @Delete("delete from menu where menu_code=#{0}")
    boolean delete(int menu_code);

    @Update("update menu set menu_name=#{1} where menu_code=#{0} ")
    boolean update(int menu_code, String menu_name);

    @Select("select * from menu where menu_code=#{0}")
    boolean select(int menu_code);

    @Select("select * from menu")
    List<Menu> LoadMenuList();

    @Select("select * from menu where menu_code in (select menu_code from role_menu where role_code = #{0})")
    List<Menu> loadByRoleId(int role_code);

    @Select("select distinct * from menu where menu_code in (select menu_code from role_menu where role_code in (select role_code from role_div where user_code=#{0})) ")
    List<Menu> loadByUserCode(String user_code);
}
