package yww.info.service.serviceImpl;

import yww.info.dao.*;
import yww.info.model.*;
import yww.info.service.UserService;
import yww.info.viewmodel.RankingInfoVo;
import yww.info.viewmodel.RoleInfoVo;
import yww.info.viewmodel.UserInfoVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;

    @Autowired
    RoleDao roleDao;

    @Autowired
    MenuDao menuDao;

    @Autowired
    NoticeDao noticeDao;
    @Autowired
    Role_divDao role_divDao;
    /**
     *注册功能
     * @param user_code
     * @param user_name
     * @param user_nickname
     * @param user_phone
     * @param user_sex
     * @param user_headpic
     * @param user_pwd
     * @return
     */
    @Transactional
    @Override
    public boolean register(String user_code, String user_name, String user_nickname, String user_phone, int user_sex, String user_headpic, String user_pwd) {
        //System.out.println( user_code+"---"+ user_name+"---"+ user_nickname+"---"+  user_phone+"---"+  user_sex+"---"+  user_headpic+"---"+  user_pwd);
        boolean ok1 = userDao.add(user_code, user_name, user_nickname,  user_phone, user_sex, user_headpic, user_pwd);
        //System.out.println("OK1:"+ok1);
        boolean ok2 = roleDao.addDiv(user_code, 1);
        //System.out.println("OK2:"+ok2);
        if(ok1 && ok2){
            return true;
        }else{
            throw new RuntimeException();
        }
    }

    /**
     * 登录功能
     * @param code
     * @param pwd
     * @param role
     * @return
     */
    @Override
    public User login(String code,String pwd ) {
        User user = userDao.loadByCode(code);
        Role_div roles=roleDao.loadByUserCodeAndRoleCode(code);
        if(user.getUser_pwd().equals(pwd) && roles!=null){
            return user;
        }else{
            return null;
        }
    }

    /**
     * 根据角色id加载此id下所有用户
     * @param role_code
     * @return
     */
    @Override
    public List<UserInfoVo> lodeUserByRole(Integer role_code) {
        List<UserInfoVo> userInfos=new ArrayList<UserInfoVo>();
        List<Role_div> role_divs=role_divDao.loadUserByRole(role_code);
        for(Role_div rd:role_divs){
            UserInfoVo ui=new UserInfoVo();
            User user = userDao.loadByCode(rd.getUser_code());
            ui.setUser(user);
            List<Role> roles = roleDao.loadByUserCode(user.getUser_code());

            List<RoleInfoVo> roleinfovos = new ArrayList<RoleInfoVo>();

            for (Role r : roles ) {
                RoleInfoVo roleinfo = new RoleInfoVo();
                roleinfo.setRole(r);
                roleinfo.setMenus(menuDao.loadByRoleId(r.getRole_code()));
                roleinfovos.add(roleinfo);
            }
            ui.setRoleInfoVos(roleinfovos);
            userInfos.add(ui);
        }
        return userInfos;
    }

    @Override
    public boolean updateMsg(String user_code, String user_name, String user_nickname, String user_phone, int user_sex, HttpSession session) {
        System.out.println("in serviceImpl udate");
        boolean flag=userDao.updateMsg(user_code,user_name,user_nickname,user_phone,user_sex);
        if(flag)
           session.setAttribute("user",userDao.loadByCode(user_code));
        return flag;
    }

    @Override
    public boolean updatePwd(String userCode, String current_pwd, String user_pwd) {
        User user=userDao.loadByCode(userCode);
        if(user.getUser_pwd().equals(current_pwd)){
            System.out.println("密码一致");
            return userDao.updatePwd(userCode,user_pwd);
        }else {
            System.out.println("密码不一致  jiumima:"+current_pwd+"xinmima:"+user_pwd);
            return false;
        }
    }

    @Override
    public void updateHeadpic(String usercode, String fileName) {
        if(userDao.updateHeadpic(usercode,fileName)){
            System.out.println("头像插入成功！serviceImpl");
        }else
            System.out.println("头像插入不成功！serviceImpl");
            return;
    }

    @Override
    public List<User> loadUserList() {
        return userDao.loadUserList();
    }

    @Override
    public boolean deleteUserByCode(String userCode) {
        boolean flag=userDao.deleteUserByCode(userCode);
        if(flag) System.out.println("删除用户信息成功");
        else System.out.println("删除用户信息失败");
        return flag;
    }

    @Override
    public boolean updateMsgByAdmin(String user_code, String user_name, String user_nickname, String user_phone, int user_sex) {

        boolean flag=userDao.updateMsgByAdmin(user_code,user_name,user_nickname,user_phone,user_sex);
        if(flag) System.out.println("更新用户信息成功");
        else System.out.println("更新用户信息失败");
        return flag;
    }

    @Override
    public User loadUserByCode(String user_code) {
        return userDao.loadByCode(user_code);
    }

    @Override
    public List<RankingInfoVo> getRankingList() {
        List<User> users=userDao.loadAdminByType();
        List<RankingInfoVo> rankingInfoVos=new ArrayList<RankingInfoVo>();
        int level=0;
        for (User user:users) {
            RankingInfoVo rankingInfoVo=new RankingInfoVo();
            rankingInfoVo.setUser(user);
            List<Notice> notices=noticeDao.loadByUserCode(user.getUser_code());
            int like=0;
            int collect=0;
            int read_time=0;//获得累计
            for (Notice notice: notices) {
                like+=noticeDao.getLikeSum(notice.getNotice_code());
                collect+=noticeDao.getCollectSum(notice.getNotice_code());
                read_time+=noticeDao.getReadTimeSum(notice.getNotice_code());
            }
            level=collect*5+like*3+read_time*2;
            int value=notices.size();
            rankingInfoVo.setValue(value);
            rankingInfoVo.setLevel(level);
            rankingInfoVos.add(rankingInfoVo);
        }

        rankingInfoVos.sort(new RankingInfoVo());
        return rankingInfoVos;
    }

    /**
     * 根据用户ID获取其权限信息
     * @param user_code
     * @return
     */
    @Override
    public List<Menu> getMenus(String user_code) {

        return menuDao.loadByUserCode(user_code);
    }


}
