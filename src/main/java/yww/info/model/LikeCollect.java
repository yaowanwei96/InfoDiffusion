package yww.info.model;

import java.util.Date;

/**
 * Created by LQ on 2018/5/3.
 */
public class LikeCollect {
    private String user_code;
    private String likeCollect_code;
    private String notice_code;
    private int isNewsOrMiniNews;
    private int isLikeOrCollect;
    private Date LikeCollect_time;

    public LikeCollect() {
    }

    public LikeCollect(String likeCollect_code, String notice_code, int isLikeOrCollect, int isNewsOrMiniNews, Date likeCollect_time, String user_code) {
        this.likeCollect_code = likeCollect_code;
        this.notice_code = notice_code;
        this.isLikeOrCollect = isLikeOrCollect;
        this.isNewsOrMiniNews = isNewsOrMiniNews;
        LikeCollect_time = likeCollect_time;
        this.user_code = user_code;
    }

    public String getUser_code() {
        return user_code;
    }

    public void setUser_code(String user_code) {
        this.user_code = user_code;
    }

    public String getLikeCollect_code() {
        return likeCollect_code;
    }

    public void setLikeCollect_code(String likeCollect_code) {
        this.likeCollect_code = likeCollect_code;
    }

    public String getNotice_code() {
        return notice_code;
    }

    public void setNotice_code(String notice_code) {
        this.notice_code = notice_code;
    }

    public int getIsNewsOrMiniNews() {
        return isNewsOrMiniNews;
    }

    public void setIsNewsOrMiniNews(int isNewsOrMiniNews) {
        this.isNewsOrMiniNews = isNewsOrMiniNews;
    }

    public Date getLikeCollect_time() {
        return LikeCollect_time;
    }

    public void setLikeCollect_time(Date likeCollect_time) {
        LikeCollect_time = likeCollect_time;
    }

    public int getIsLikeOrCollect() {
        return isLikeOrCollect;
    }

    public void setIsLikeOrCollect(int isLikeOrCollect) {
        this.isLikeOrCollect = isLikeOrCollect;
    }

    @Override
    public String toString() {
        return "LikeCollect{" +
                "user_code='" + user_code + '\'' +
                ", likeCollect_code='" + likeCollect_code + '\'' +
                ", notice_code='" + notice_code + '\'' +
                ", isNewsOrMiniNews=" + isNewsOrMiniNews +
                ", isLikeOrCollect=" + isLikeOrCollect +
                ", LikeCollect_time=" + LikeCollect_time +
                '}';
    }
}
