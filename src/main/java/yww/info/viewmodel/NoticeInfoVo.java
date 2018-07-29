package yww.info.viewmodel;

import yww.info.model.Attach;
import yww.info.model.Notice;
import yww.info.model.Noticetype;
import yww.info.model.User;

import java.util.List;

/**
 * Created by Administrator on 2018/1/12.
 */
public class NoticeInfoVo {

    Notice notice;
    User user;
    Noticetype noticetype;
    List<Attach> attaches;

    public NoticeInfoVo() {
    }

    public NoticeInfoVo(Notice notice, User user, Noticetype noticetype, List<Attach> attaches) {
        this.notice = notice;
        this.user = user;
        this.noticetype = noticetype;
        this.attaches = attaches;
    }

    public Notice getNotice() {
        return notice;
    }

    public void setNotice(Notice notice) {
        this.notice = notice;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Noticetype getNoticetype() {
        return noticetype;
    }

    public void setNoticetype(Noticetype noticetype) {
        this.noticetype = noticetype;
    }

    public List<Attach> getAttaches() {
        return attaches;
    }

    public void setAttaches(List<Attach> attaches) {
        this.attaches = attaches;
    }

    @Override
    public String toString() {
        return "NoticeInfoVo{" +
                "notice=" + notice +
                ", user=" + user +
                ", noticetype=" + noticetype +
                ", attaches=" + attaches +
                '}';
    }
}
