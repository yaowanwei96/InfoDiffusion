package yww.info.model;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by software2 on 2018/1/11.
 * hbhj
 */
public class Notice implements Serializable{
    private String notice_code;
    private String user_code;
    private int noticetype_code;
    private String notice_title;
    private String notice_desc;
    private String notice_uri;
    private int notice_status;
    private int notice_readtimes;
    private Date notice_date;
    private String notice_remark;


    @Override
    public String toString() {
        return "Notice{" +
                "notice_code='" + notice_code + '\'' +
                ", user_code='" + user_code + '\'' +
                ", noticetype_code=" + noticetype_code +
                ", notice_title='" + notice_title + '\'' +
                ", notice_desc='" + notice_desc + '\'' +
                ", notice_uri='" + notice_uri + '\'' +
                ", notice_status=" + notice_status +
                ", notice_readtimes=" + notice_readtimes +
                ", notice_date=" + notice_date +
                ", notice_remark='" + notice_remark + '\'' +
                '}';
    }

    public Notice() {
    }

    public Notice(String notice_code, String user_code, int noticetype_code, String notice_title, String notice_desc, String notice_uri, int notice_status, int notice_readtimes, Date notice_date, String notice_remark) {
        this.notice_code = notice_code;
        this.user_code = user_code;
        this.noticetype_code = noticetype_code;
        this.notice_title = notice_title;
        this.notice_desc = notice_desc;
        this.notice_uri = notice_uri;
        this.notice_status = notice_status;
        this.notice_readtimes = notice_readtimes;
        this.notice_date = notice_date;
        this.notice_remark = notice_remark;
    }

    public String getNotice_remark() {
        return notice_remark;
    }

    public void setNotice_remark(String notice_remark) {
        this.notice_remark = notice_remark;
    }

    public int getNotice_status() {
        return notice_status;
    }

    public void setNotice_status(int notice_status) {
        this.notice_status = notice_status;
    }

    public String getNotice_code() {
        return notice_code;
    }

    public void setNotice_code(String notice_code) {
        this.notice_code = notice_code;
    }

    public Date getNotice_date() {
        return notice_date;
    }

    public void setNotice_date(Date notice_date) {
        this.notice_date = notice_date;
    }

    public String getUser_code() {
        return user_code;
    }

    public void setUser_code(String user_code) {
        this.user_code = user_code;
    }

    public int getNoticetype_code() {
        return noticetype_code;
    }

    public void setNoticetype_code(int noticetype_code) {
        this.noticetype_code = noticetype_code;
    }

    public String getNotice_title() {
        return notice_title;
    }

    public void setNotice_title(String notice_title) {
        this.notice_title = notice_title;
    }

    public String getNotice_desc() {
        return notice_desc;
    }

    public void setNotice_desc(String notice_desc) {
        this.notice_desc = notice_desc;
    }

    public String getNotice_uri() {
        return notice_uri;
    }

    public void setNotice_uri(String notice_uri) {
        this.notice_uri = notice_uri;
    }

    public int getNotice_readtimes() {
        return notice_readtimes;
    }

    public void setNotice_readtimes(int notice_readtimes) {
        this.notice_readtimes = notice_readtimes;
    }
}
