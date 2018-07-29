package yww.info.service;

import yww.info.model.Menu;
import yww.info.model.Role;
import yww.info.model.User;
import yww.info.viewmodel.RankingInfoVo;
import yww.info.viewmodel.UserInfoVo;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 *
 */
public interface UserService {

    boolean register(String user_code, String user_name, String user_nickname, String user_phone, int user_sex, String user_headpic, String user_pwd);

    User login(String code, String pwd ) ;

    List<UserInfoVo> lodeUserByRole(Integer role_code);

    boolean updateMsg(String user_code, String user_name, String user_nickname, String user_phone, int user_sex, HttpSession session);

    boolean updatePwd(String userCode, String current_pwd, String user_pwd);

    void updateHeadpic(String usercode, String fileName);

    List<User> loadUserList();

    boolean deleteUserByCode(String userCode);

    boolean updateMsgByAdmin(String user_code, String user_name, String user_nickname, String user_phone, int user_sex);

    User loadUserByCode(String user_code);

    List<RankingInfoVo> getRankingList();

    List<Menu> getMenus(String user_code);
}
