package yww.info.dao;

import yww.info.model.Attach;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by Software1 on 2018/1/15.
 */
public interface AttachDao {


    @Insert("insert into attach (attach_code,notice_code,attach_uri,attach_name) values (#{0},#{1},#{2},#{3})")
    boolean add(String attach_code,String notice_code, String attach_uri,String attach_name);


    @Select("select * from attach where notice_code = #{0}")
    List<Attach> loadByNoticeCode(String notice_code);

    @Delete("delete from attach  where attach_code = #{0}")
    boolean delete(String attach_code);
}
