package yww.info.service;

import yww.info.model.Noticetype;
import yww.info.viewmodel.NoticeTypesVo;

import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
public interface NoticeTypeService {

    boolean add(int not_noticetype_code, String noticetype_name);

    boolean update(int noticetype_code,int not_noticetype_code, String noticetype_name);

    boolean delete(int noticetype_code);

    List<Noticetype> loadNoticetype();

    List<NoticeTypesVo> loadByNoticetypeCode(int pid);

    List<Noticetype> loadNoticetypeList();

}
