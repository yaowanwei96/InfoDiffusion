package yww.info.model;

import java.util.Date;

/**
 * Created by LQ on 2018/5/3.
 */
public class Commentlike {
    private String commentlike_code;
    private String comment_id;
    private String user_code;
    private int isNewsOrMini;
    private Date commentlike_time;

    public Commentlike() {
    }

    public Commentlike(String comment_id, int isNewsOrMini, String commentlike_code, String user_code, Date commentlike_time) {
        this.comment_id = comment_id;
        this.isNewsOrMini = isNewsOrMini;
        this.commentlike_code = commentlike_code;
        this.user_code = user_code;
        this.commentlike_time = commentlike_time;
    }

    @Override
    public String toString() {
        return "Commentlike{" +
                "commentlike_code='" + commentlike_code + '\'' +
                ", comment_id='" + comment_id + '\'' +
                ", user_code='" + user_code + '\'' +
                ", isNewsOrMini=" + isNewsOrMini +
                ", commentlike_time=" + commentlike_time +
                '}';
    }

    public String getCommentlike_code() {
        return commentlike_code;
    }

    public void setCommentlike_code(String commentlike_code) {
        this.commentlike_code = commentlike_code;
    }

    public String getComment_id() {
        return comment_id;
    }

    public void setComment_id(String comment_id) {
        this.comment_id = comment_id;
    }

    public String getUser_code() {
        return user_code;
    }

    public void setUser_code(String user_code) {
        this.user_code = user_code;
    }

    public int getIsNewsOrMini() {
        return isNewsOrMini;
    }

    public void setIsNewsOrMini(int isNewsOrMini) {
        this.isNewsOrMini = isNewsOrMini;
    }

    public Date getCommentlike_time() {
        return commentlike_time;
    }

    public void setCommentlike_time(Date commentlike_time) {
        this.commentlike_time = commentlike_time;
    }
}
