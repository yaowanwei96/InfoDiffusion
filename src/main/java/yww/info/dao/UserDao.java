package yww.info.dao;

import yww.info.model.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
public interface UserDao {
    /**
     * 注册功能
     * @param user_code
     * @param user_name
     * @param user_nickname
     * @param user_phone
     * @param user_sex
     * @param user_headpic
     * @param user_pwd
     * @return
     */
    @Insert("insert into user(user_code,user_name,user_nickname,user_phone,user_sex,user_headpic,user_pwd)  values(#{0},#{1},#{2},#{3},#{4},#{5},#{6})")
    boolean add(String user_code, String user_name, String user_nickname, String user_phone, int user_sex, String user_headpic, String user_pwd);

    /**
     * 根据用户id查找用户信息
     * @param code
     * @return
     */
    @Select("select * from user where user_code=#{0}")
    User loadByCode(String code);

    @Update("update user set user_name=#{1},user_nickname=#{2},user_phone=#{3},user_sex=#{4} where user_code=#{0}")
    boolean updateMsg(String user_code, String user_name, String user_nickname, String user_phone, int user_sex);

    @Update("update user set user_pwd=#{1} where user_code=#{0}")
    boolean updatePwd(String user_code, String user_pwd);

    @Update("update user set user_headpic=#{1} where user_code=#{0}")
    boolean updateHeadpic(String usercode, String fileName);

    @Select("select * from user")
    List<User> loadUserList();

    @Delete("delete from user where user_code=#{0}")
    boolean deleteUserByCode(String userCode);

    @Update("update user set user_name=#{1},user_nickname=#{2},user_phone=#{3},user_sex=#{4} where user_code=#{0}")
    boolean updateMsgByAdmin(String user_code, String user_name, String user_nickname, String user_phone, int user_sex);

    @Select("select * from user where user_code in (select user_code from role_div where (role_code=1  or role_code=3 or role_code=4 ) )")
    List<User> loadAdminByType();
}

