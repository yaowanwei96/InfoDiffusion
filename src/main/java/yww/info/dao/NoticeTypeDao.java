package yww.info.dao;

import yww.info.model.Noticetype;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
public interface NoticeTypeDao {

    /**
     *增加公告类别
     * @param not_noticetype_code  父节点
     * @param noticetype_name
     * @return
     */
    @Insert("insert into noticetype(not_noticetype_code,noticetype_name) values(#{0},#{1})")
    boolean add( int not_noticetype_code, String noticetype_name);

    /**
     *更新公告类别
     * @param noticetype_code
     * @param not_noticetype_code
     * @param noticetype_name
     * @return
     */
    @Update("update noticetype  set not_noticetype_code=#{1},noticetype_name=#{2} where noticetype_code=#{0} ")
    boolean update(int noticetype_code,int not_noticetype_code, String noticetype_name);

    /**
     *删除公告类别
     * @param noticetype_code
     * @return
     */
    @Delete("delete from noticetype  where noticetype_code=#{0} ")
    boolean delete(int noticetype_code);

    /**
     *加载所有公告类别
     * @return
     */
    @Select("select* from noticetype")
    List<Noticetype> loadNoticetype();

    /**
     *根据父类别id获取子类别
     * @param pid
     * @return
     */
    @Select("select * from noticetype where not_noticetype_code = #{0}")
    List<Noticetype> loadByNoticetypeCode(int pid);

    /**
     *根据类别id获取公告类别
     * @param pid
     * @return
     */
    @Select("select * from noticetype where noticetype_code = #{0}")
    Noticetype loadById(int pid);

    /**
     *获取所有公告类别
     * @return
     */
    @Select("select * from noticetype")
    List<Noticetype> loadNoticetypeList();

    @Select("select * from noticetype where noticetype_code=#{0}")
    Noticetype loadNoticeTypeByCode(int noticetype_code);
}
