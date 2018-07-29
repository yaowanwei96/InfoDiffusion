package yww.info.model;

import java.io.Serializable;

/**
 * Created by software2 on 2018/1/11.
 * hbhj
 */
public class User implements Serializable{
    private String user_code;
    private  String user_name;
    private  String user_nickname;
    private  String user_phone;
    private  int user_sex;
    private  String user_headpic;

    private  String user_pwd;



    public User() {
    }

    public User(String user_code, String user_name, String user_nickname, String user_phone, int user_sex, String user_headpic, String user_pwd) {
        this.user_code = user_code;
        this.user_name = user_name;
        this.user_nickname = user_nickname;
        this.user_phone = user_phone;
        this.user_sex = user_sex;
        this.user_headpic = user_headpic;
        this.user_pwd = user_pwd;
    }

    public String getUser_code() {
        return user_code;
    }

    public void setUser_code(String user_code) {
        this.user_code = user_code;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_nickname() {
        return user_nickname;
    }

    public void setUser_nickname(String user_nickname) {
        this.user_nickname = user_nickname;
    }

    public String getUser_phone() {
        return user_phone;
    }

    public void setUser_phone(String user_phone) {
        this.user_phone = user_phone;
    }

    public int getUser_sex() {
        return user_sex;
    }

    public void setUser_sex(int user_sex) {
        this.user_sex = user_sex;
    }

    public String getUser_headpic() {
        return user_headpic;
    }

    public void setUser_headpic(String user_headpic) {
        this.user_headpic = user_headpic;
    }

    public String getUser_pwd() {
        return user_pwd;
    }

    public void setUser_pwd(String user_pwd) {
        this.user_pwd = user_pwd;
    }

    @Override
    public String toString() {
        return "User{" +
                "user_code='" + user_code + '\'' +
                ", user_name='" + user_name + '\'' +
                ", user_nickname='" + user_nickname + '\'' +
                ", user_phone='" + user_phone + '\'' +
                ", user_sex=" + user_sex +
                ", user_headpic='" + user_headpic + '\'' +
                ", user_pwd='" + user_pwd + '\'' +
                '}';
    }
}
