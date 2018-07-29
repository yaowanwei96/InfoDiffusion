package yww.info.viewmodel;

import yww.info.model.Notice;
import yww.info.model.User;

import java.util.Comparator;

/**
 * Created by LQ on 2018/4/15.
 */
public class RankingInfoVo  implements Comparator<RankingInfoVo> {
    private User user;
    private int level;//排名
    private int value;//所有文章点赞数量*0.3+文章收藏数量*0.5+访问量*0.2

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "RankingInfoVo{" +
                "user=" + user +
                ", level=" + level +
                ", value=" + value +
                '}';
    }

    public RankingInfoVo() {
    }

    public RankingInfoVo(User user, int level, int value) {
        this.user = user;
        this.level = level;
        this.value = value;
    }

    @Override
    public int compare(RankingInfoVo o1, RankingInfoVo o2) {
        return o1.level>=o2.level? 1:-1;
    }

    @Override
    public boolean equals(Object obj) {
        return this.level == ((RankingInfoVo)obj).level;
    }
}
