package yww.info.model;

import java.io.Serializable;

/**
 * Created by software2 on 2018/1/11.
 * hbhj
 */
public class Role implements Serializable{
    private  int role_code;
    private  String role_name;
    private  int role_weight;

    public Role() {
    }

    public Role(int role_code, String role_name, int role_weight) {
        this.role_code = role_code;
        this.role_name = role_name;
        this.role_weight = role_weight;
    }

    public int getRole_code() {
        return role_code;
    }

    public void setRole_code(int role_code) {
        this.role_code = role_code;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    public int getRole_weight() {
        return role_weight;
    }

    public void setRole_weight(int role_weight) {
        this.role_weight = role_weight;
    }

    @Override
    public String toString() {
        return "Role{" +
                "role_code=" + role_code +
                ", role_name='" + role_name + '\'' +
                ", role_weight=" + role_weight +
                '}';
    }
}
