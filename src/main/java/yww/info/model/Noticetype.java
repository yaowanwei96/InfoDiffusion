package yww.info.model;

import java.io.Serializable;

/**
 * Created by software2 on 2018/1/11.
 * hbhj
 */
public class Noticetype implements Serializable{
    private  int noticetype_code;
    private  int not_noticetype_code;
    private  String noticetype_name;

    public Noticetype() {
    }

    public Noticetype(int noticetype_code, int not_noticetype_code, String noticetype_name) {
        this.noticetype_code = noticetype_code;
        this.not_noticetype_code = not_noticetype_code;
        this.noticetype_name = noticetype_name;
    }

    @Override
    public String toString() {
        return "Noticetype{" +
                "noticetype_code=" + noticetype_code +
                ", not_noticetype_code=" + not_noticetype_code +
                ", noticetype_name='" + noticetype_name + '\'' +
                '}';
    }

    public int getNoticetype_code() {
        return noticetype_code;
    }

    public void setNoticetype_code(int noticetype_code) {
        this.noticetype_code = noticetype_code;
    }

    public int getNot_noticetype_code() {
        return not_noticetype_code;
    }

    public void setNot_noticetype_code(int not_noticetype_code) {
        this.not_noticetype_code = not_noticetype_code;
    }

    public String getNoticetype_name() {
        return noticetype_name;
    }

    public void setNoticetype_name(String noticetype_name) {
        this.noticetype_name = noticetype_name;
    }
}
