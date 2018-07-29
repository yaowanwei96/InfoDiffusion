package yww.info.dao;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import yww.info.model.Role_div;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by Administrator on 2018/1/12.
 */

public interface Role_divDao {
    /**
     * 根据角色id加载用户信息
     * @param role_code
     * @return
     */
    @Select("select * from role_div where role_code=#{0}")
    List<Role_div> loadUserByRole(Integer role_code);

    @Select("select * from role_div where user_code=#{0}")
    List<Role_div> loadRoleByUserCode(String user_code);

    @Select("select * from role_div where user_code=#{0}")
    List<Role_div> isRoleUser(String user_code);

    @Delete("delete from role_div where user_code=#{0}")
    boolean deleteRoleUserByUserCode(String user_code);

    @Insert("insert into role_div(user_code,role_code) values(#{0},#{1})")
    boolean addRoleUser(String user_code, int role_code);

    @Select("select * form role_div where user_code=#{0}")
    List<Role_div> loadRoledivByUserCode(String user_code);
}
