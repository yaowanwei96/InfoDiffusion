package yww.info.service.serviceImpl;

import yww.info.dao.NoticeTypeDao;
import yww.info.model.Noticetype;
import yww.info.service.NoticeTypeService;
import yww.info.viewmodel.NoticeTypesVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */

@Service
public class NoticeTypeServiceImpl implements NoticeTypeService {
    @Autowired
    NoticeTypeDao noticeTypeDao;

    /**
     *增加公告类别
     * @param not_noticetype_code
     * @param noticetype_name
     * @return
     */
    @Override
    public boolean add(int not_noticetype_code, String noticetype_name) {
        System.out.println("in add noticeType serviceImpl");
        return noticeTypeDao.add(not_noticetype_code, noticetype_name);
    }
    /**
     *删除公告类别
     * @param noticetype_code
     * @return
     */
    @Override
    public boolean delete(int noticetype_code) {
        return noticeTypeDao.delete(noticetype_code);
    }

    /**
     *更新公告类别
     * @param noticetype_code
     * @param not_noticetype_code
     * @param noticetype_name
     * @return
     */
    @Override
    public boolean update(int noticetype_code, int not_noticetype_code, String noticetype_name) {
        return noticeTypeDao.update(noticetype_code, not_noticetype_code, noticetype_name);
    }

    /**
     *加载所有公告类别
     * @return
     */
    @Override
    public  List<Noticetype> loadNoticetype(){
        return  noticeTypeDao.loadNoticetype();
    }

    /**
     *根据公告类别id加载公告信息及公告信息
     * @param pid
     * @return
     */
    @Override
    public List<NoticeTypesVo> loadByNoticetypeCode(int pid) {
           List<NoticeTypesVo> noticeTypeVos = SetNoticeTypess(pid);
            //  System.out.println(noticeTypeVos);
           return noticeTypeVos;
    }

   /* List<NoticeTypeVo> SetNoticeType(int pid) {
        List<NoticeTypeVo> noticeTypeVos = new ArrayList<NoticeTypeVo>();
        Noticetype nparent = noticeTypeDao.loadById(pid);
        List<Noticetype> noticetypes = noticeTypeDao.loadList(pid);
        for (Noticetype notictype : noticetypes) {
            NoticeTypeVo noticetypevo = new NoticeTypeVo();
            noticetypevo.setNoticetype(notictype);
            noticetypevo.setParent(nparent);
            noticetypevo.setChildren(SetNoticeType(notictype.getNoticetype_code()));
            noticeTypeVos.add(noticetypevo);
        }
        return noticeTypeVos;
    }*/

    /**
     *设置公告类别及公告信息内容
     * @param pid
     * @return
     */
    List<NoticeTypesVo> SetNoticeTypess(int pid){
        List<NoticeTypesVo> noticeTypeVos = new ArrayList<NoticeTypesVo>();
        Noticetype nparent = noticeTypeDao.loadById(pid);
        List<Noticetype> noticetypes = noticeTypeDao.loadByNoticetypeCode(pid);
        for (Noticetype notictype : noticetypes) {
            NoticeTypesVo noticetypevo = new NoticeTypesVo();
            noticetypevo.setId(notictype.getNoticetype_code());
            noticetypevo.setText(notictype.getNoticetype_name());
            noticetypevo.setIcon(nparent==null?"icon-grid  icon-state-green":"icon-star  icon-state-danger" );
            noticetypevo.setChildren(SetNoticeTypess(notictype.getNoticetype_code()));
            noticeTypeVos.add(noticetypevo);
        }
        return noticeTypeVos;
    }

    /**
     *加载所有类别信息
     * @return
     */
    @Override
    public List<Noticetype> loadNoticetypeList() {
        return noticeTypeDao.loadNoticetypeList();
    }


}
