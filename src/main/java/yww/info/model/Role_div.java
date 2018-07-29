package yww.info.model;

import java.io.Serializable;

/**
 * Created by software2 on 2018/1/11.
 * hbhj
 */
public class Role_div implements Serializable {
    private String user_code;
    private int role_code;

    public Role_div() {
    }

    public Role_div(String user_code, int role_code) {
        this.user_code = user_code;
        this.role_code = role_code;
    }

    @Override
    public String toString() {
        return "Role_div{" +
                "user_code='" + user_code + '\'' +
                ", role_code=" + role_code +
                '}';
    }

    public String getUser_code() {
        return user_code;
    }

    public void setUser_code(String user_code) {
        this.user_code = user_code;
    }

    public int getRole_code() {
        return role_code;
    }

    public void setRole_code(int role_code) {
        this.role_code = role_code;
    }
}
