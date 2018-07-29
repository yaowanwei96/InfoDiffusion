package yww.info.model;

import java.util.Date;

/**
 * Created by LQ on 2018/5/3.
 */
public class Commentreply {
    private String comment_id;
    private String com_comment_id;
    private String user_code;
    private String notice_code;
    private String comment_msg;
    private int is_transfer;
    private Date comment_time;
    private int likenum;

    public Commentreply() {
    }

    public Commentreply(String notice_code, String user_code, String comment_msg, Date comment_time, int is_transfer, int likenum, String com_comment_id, String comment_id) {
        this.notice_code = notice_code;
        this.user_code = user_code;
        this.comment_msg = comment_msg;
        this.comment_time = comment_time;
        this.is_transfer = is_transfer;
        this.likenum = likenum;
        this.com_comment_id = com_comment_id;
        this.comment_id = comment_id;
    }

    public String getComment_id() {
        return comment_id;
    }

    @Override
    public String toString() {
        return "Commentreply{" +
                "comment_id='" + comment_id + '\'' +
                ", com_comment_id='" + com_comment_id + '\'' +
                ", user_code='" + user_code + '\'' +
                ", notice_code='" + notice_code + '\'' +
                ", comment_msg='" + comment_msg + '\'' +
                ", is_transfer=" + is_transfer +
                ", comment_time=" + comment_time +
                ", likenum=" + likenum +
                '}';
    }

    public void setComment_id(String comment_id) {
        this.comment_id = comment_id;
    }

    public String getCom_comment_id() {
        return com_comment_id;
    }

    public void setCom_comment_id(String com_comment_id) {
        this.com_comment_id = com_comment_id;
    }

    public String getNotice_code() {
        return notice_code;
    }

    public void setNotice_code(String notice_code) {
        this.notice_code = notice_code;
    }

    public String getUser_code() {
        return user_code;
    }

    public void setUser_code(String user_code) {
        this.user_code = user_code;
    }

    public String getComment_msg() {
        return comment_msg;
    }

    public void setComment_msg(String comment_msg) {
        this.comment_msg = comment_msg;
    }

    public int getIs_transfer() {
        return is_transfer;
    }

    public void setIs_transfer(int is_transfer) {
        this.is_transfer = is_transfer;
    }

    public int getLikenum() {
        return likenum;
    }

    public void setLikenum(int likenum) {
        this.likenum = likenum;
    }

    public Date getComment_time() {
        return comment_time;
    }

    public void setComment_time(Date comment_time) {
        this.comment_time = comment_time;
    }
}
