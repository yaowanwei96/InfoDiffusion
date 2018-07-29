package yww.info.viewmodel;

import yww.info.model.User;

import java.util.List;

/**
 * Created by Administrator on 2018/1/12.
 */
public class UserInfoVo {

    private User user;
    private List<RoleInfoVo> roleInfoVos;

    public UserInfoVo() {
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<RoleInfoVo> getRoleInfoVos() {
        return roleInfoVos;
    }

    public void setRoleInfoVos(List<RoleInfoVo> roleInfoVos) {
        this.roleInfoVos = roleInfoVos;
    }

    @Override
    public String toString() {
        return "UserInfoVo{" +
                "user=" + user +
                ", roleInfoVos=" + roleInfoVos +
                '}';
    }
}
