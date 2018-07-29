package yww.info.viewmodel;

import yww.info.model.Noticetype;

import java.util.List;

/**
 * Created by software2 on 2018/1/11.
 * hbhj
 */
public class NoticeTypeVo {


    Noticetype parent ;
    Noticetype noticetype;
    List<NoticeTypeVo> children;

    public NoticeTypeVo() {


    }

    public NoticeTypeVo(Noticetype parent, Noticetype noticetype, List<NoticeTypeVo> children) {
        this.parent = parent;
        this.noticetype = noticetype;
        this.children = children;
    }


    @Override
    public String toString() {
        return "NoticeTypeVo{" +
                "parent=" + parent +
                ", noticetype=" + noticetype +
                ", children=" + children +
                '}';
    }

    public Noticetype getParent() {
        return parent;
    }

    public void setParent(Noticetype parent) {
        this.parent = parent;
    }

    public Noticetype getNoticetype() {
        return noticetype;
    }

    public void setNoticetype(Noticetype noticetype) {
        this.noticetype = noticetype;
    }

    public List<NoticeTypeVo> getChildren() {
        return children;
    }

    public void setChildren(List<NoticeTypeVo> children) {
        this.children = children;
    }
}
