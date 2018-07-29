package yww.info.dao;

import yww.info.model.*;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
public interface NoticeDao {
    @Select("select * from notice where (noticetype_code=#{0} and user_code=#{1})")
    List<Notice> loadNoticeByType(int noticetype_code,String user_code);


    @Insert("insert into notice(noticetype_code,notice_title,notice_desc,notice_uri,user_code,notice_code,notice_date) values(#{0},#{1},#{2},#{3},#{4},#{5},now()) ")
    boolean distribute(int noticetype_code,String notice_title, String notice_desc,String notice_uri,String user_code,String notice_code);

    @Delete("delete from notice where notice_code=#{0}")
    boolean deleteByNoticeCode(String i);

    @Update("update notice set noticetype_code = #{1},notice_title=#{2},notice_desc=#{3},notice_uri=#{4},user_code=#{5} where notice_code=#{0}")
    boolean update(String notice_code, int noticetype_code, String notice_title, String notice_desc, String notice_uri, String user_code);

    @Select("select * from notice where notice_code=#{0}")
    Notice loadByCode(String code);

    @Select("select * from notice where user_code=#{0}")
    List<Notice> loadByUserCode(String user_code);

    @Select("select notice_readtimes from notice where notice_code=#{0}")
    int getReadTimeSum(String notice_code);

    @Select("select count(*) from likecollect where notice_code=#{0} and isNewsOrMiniNews=0 and isLikeOrCollect=1")
    int getCollectSum(String notice_code);

    @Select("select count(*) from likecollect where notice_code=#{0} and isNewsOrMiniNews=0 and isLikeOrCollect=0")
    int getLikeSum(String notice_code);

    @Select("select * from notice where notice_status=1 order by notice_date desc")
    List<Notice> loadPassedNoticeBytime();

    @Select("select * from attach where notice_code=#{0}")
    List<Attach> loadAttachListByNoticeCode(String notice_code);

    @Select("select * from notice where notice_status=0 order by notice_date desc")
    List<Notice> loadUnPassedNoticeBytime();

    @Update("update notice set notice_status=1 where notice_code=#{0}")
    boolean setNoticeStatusPass(String notice_code);

    @Update("update notice set notice_status=-1 where notice_code=#{0}")
    boolean updateNoticeUnPass(String notice_code);

    @Delete("delete from likecollect where notice_code=#{0} and isNewsOrMiniNews=0")
    boolean deleteLikeCollectByNoticeCode(String notice_code);


    @Select("select * from notice where user_code=#{0} and notice_status=-1")
    List<Notice> loadFailedNoticeByUserCode(String user_code);

    @Select("select * from notice where user_code=#{0} and notice_status=0")
    List<Notice> loadUnpassedNoticeByUser(String user_code);

    @Select("select * from commentreply where notice_code=#{0}")
    List<Commentreply> loadCommentByNoticeCode(String notice_code);

    @Delete("delete  from commentlike where comment_id=#{0}")
    boolean deleteCommentlikeByCommentCode(String comment_id);

    @Delete("delete from commentreply where notice_code=#{0}")
    boolean deleteCommentByNoticeCode(String notice_code);
}
