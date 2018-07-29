package yww.info.viewmodel;

import java.util.List;

/**
 * Created by software2 on 2018/1/11.
 * hbhj
 */
public class NoticeTypesVo {
    String text;
    int id;
    String  icon;
    List<NoticeTypesVo> children;

    public NoticeTypesVo() {
    }

    public NoticeTypesVo(String text, int id, String icon, List<NoticeTypesVo> children) {
        this.text = text;
        this.id = id;
        this.icon = icon;
        this.children = children;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public List<NoticeTypesVo> getChildren() {
        return children;
    }

    public void setChildren(List<NoticeTypesVo> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        return "NoticeTypesVo{" +
                "text='" + text + '\'' +
                ", id=" + id +
                ", icon='" + icon + '\'' +
                ", children=" + children +
                '}';
    }
}
