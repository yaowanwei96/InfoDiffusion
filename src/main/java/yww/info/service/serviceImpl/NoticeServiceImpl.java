package yww.info.service.serviceImpl;

import yww.info.dao.*;
import yww.info.model.*;
import yww.info.service.NoticeService;
import yww.info.viewmodel.NoticeInfoVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Created by Administrator on 2018/1/11.
 */
@Service
public class NoticeServiceImpl implements NoticeService {
    @Autowired
    NoticeDao noticeDao;

    @Autowired
    AttachDao attachDao;

    @Autowired
    NoticeTypeDao noticeTypeDao;

    @Autowired
    UserDao userDao;

    @Autowired
    Role_divDao role_divDao;


    /**
     *根据公告类别ID加载此公告类别下的所有公告
     * @param noticetype_code
     * @return
     */
    @Override
    public List<NoticeInfoVo> loadList(int noticetype_code,String user_code) {
        List<NoticeInfoVo> noticeInfos = new ArrayList<NoticeInfoVo>();
        System.out.println("in serviceimpl:"+noticetype_code+" "+user_code);
        List<Notice> notices=noticeDao.loadNoticeByType(noticetype_code,user_code);

        for (Notice no: notices) {
            NoticeInfoVo noti = new NoticeInfoVo();
            noti.setNotice(no);
            System.out.println(no.getNotice_code());
            noti.setNoticetype(noticeTypeDao.loadById(noticetype_code));
            noti.setUser(userDao.loadByCode(no.getUser_code()));
            noticeInfos.add(noti);
        }

        return noticeInfos;
    }


    /**
     * 公告发布
     * @param attaches
     * @param noticetype_code
     * @param notice_title
     * @param notice_desc
     * @param notice_info
     * @param session
     * @return
     */
    @Transactional
    @Override
    public boolean distribute(List<String> attaches, int noticetype_code, String notice_title, String notice_desc, String notice_info, HttpSession session)  {

        //获取user_code
        //获取url
//        System.out.println(noticetype_code + "---" + notice_title + "---" + notice_desc + "---" + notice_info);
  //      System.out.println(session.getServletContext().getContextPath());

        try {
            String path = session.getServletContext().getRealPath("htmls/"+noticetype_code);
            String fileName = System.currentTimeMillis() + ".html";
            String usercode = ((User) session.getAttribute("user")).getUser_code();


            if (!new File(path).exists()) {
                new File(path).mkdir();
            }

            File file = new File(path + "/" + fileName);
            if (file.exists()) {
                file.delete();
            }
            try {
                file.createNewFile();
                BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file),"UTF-8"));
                bw.write(notice_info);
                bw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            System.out.println(usercode);
            String notice_code = UUID.randomUUID().toString().replaceAll("-", "") + System.currentTimeMillis();
            System.out.println(notice_code);
            //新闻notice上传
            boolean ok1 = noticeDao.distribute(noticetype_code, notice_title, notice_desc, fileName, usercode, notice_code);
            //这里使用的是UUID 使主键唯一
            String attach_code = UUID.randomUUID().toString().replaceAll("-", "") + System.currentTimeMillis();
            if (attaches != null) {
                int n = 0;
                for (String attach : attaches) {
                    n++;
                    String attachs_code = attach_code + n;
                    //附件上传
                    boolean ok = attachDao.add(attachs_code, notice_code, attach, attach);

                }
            }
        }catch(Exception ex){
            throw  new RuntimeException();
        }

        return true;
    }

    /**
     *根据公告id删除此公告
     * @param notice_code
     * @param session
     * @return
     */
    @Transactional
    @Override
    public boolean deleteByNoticeCode(String notice_code, HttpSession session) {
        Notice notice = noticeDao.loadByCode(notice_code);
        String path = session.getServletContext().getRealPath("htmls/"+notice.getNoticetype_code());
        String path1 = session.getServletContext().getRealPath("upload");



        List<Attach> attaches = attachDao.loadByNoticeCode(notice_code);
        //物理删除文件
        for(Attach at : attaches){
            boolean ok =  attachDao.delete(at.getAttach_code());
            if(!ok){
                throw new RuntimeException();
            }
            File ff = new File(path1+"/"+at.getAttach_uri());
            if(ff.exists()){
                ff.delete();
            }
        }

        //删除点赞和收藏
        boolean ok = noticeDao.deleteLikeCollectByNoticeCode(notice_code);
        List<Commentreply> commentreplies=noticeDao.loadCommentByNoticeCode(notice_code);
        if(commentreplies.size()!=0){
            for (Commentreply commentreply:commentreplies) {
                 ok = noticeDao.deleteCommentlikeByCommentCode(commentreply.getComment_id());
            }
        }
        ok = noticeDao.deleteCommentByNoticeCode(notice_code);
        ok = noticeDao.deleteByNoticeCode(notice_code);
        if(!ok){
            throw new RuntimeException();
        }

        //物理删除文件
        File f =  new File(path+"/"+ notice.getNotice_uri());
        if(f.exists()){
            f.delete();
        }

        return true;

    }

    /**
     * 公告编辑
     *  @param ss
     * @param notice_code
     * @param noticetype_code
     * @param notice_title
     * @param notice_desc
     * @param notice_info
     * @param session      @return
     * */
    @Transactional
    @Override
    public boolean update(List<String> ss, String notice_code, int noticetype_code, String notice_title, String notice_desc, String notice_info, HttpSession session) {
        //获取user_code
        //获取url
        Notice notice = noticeDao.loadByCode(notice_code);
        List<String> ls = new ArrayList<String>();
        String path = session.getServletContext().getRealPath("htmls/"+noticetype_code);
        String path1 = session.getServletContext().getRealPath("upload");
        String fileName = System.currentTimeMillis() + ".html";
        String usercode = ((User) session.getAttribute("user")).getUser_code();
        System.out.println(ss.size());

        try {
            System.out.println(noticetype_code + "---" + notice_title + "---" + notice_desc + "---" + notice_info);

            if (!new File(path).exists()) {
                new File(path).mkdirs();
            }
            if (!new File(path1).exists()) {
                new File(path1).mkdirs();
            }

            //检测文件是否存在
            File file = new File(path + "/" + fileName);
            while (file.exists()) {
                fileName = System.currentTimeMillis() + ".html";
                file = new File(path + "/" + fileName);
            }

            //创建并保存文件
            try {
                file.createNewFile();
                BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file),"UTF-8"));
                bw.write(notice_info);
                bw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }


            //获取附件信息
            List<Attach> attaches = attachDao.loadByNoticeCode(notice_code);

            System.out.println("attaches:"+attaches);

            if (attaches == null) {
                attaches = new ArrayList<Attach>();
            }



            //删除已移除的附件信息
            for (Attach at : attaches) {
                boolean ok = false;
                for (String s : ss) {
                    if (at.getAttach_name().equals(s)) {
                        ok = true;
                        break;
                    }
                }
                if (!ok) {
                    boolean ok1 = attachDao.delete(at.getAttach_code());
                    if(!ok1){
                        throw new RuntimeException();
                    }
                    ls.add(at.getAttach_uri());
                }
            }


            //添加新的附件信息
            int n = 0 ;
            for (String s : ss) {
                n++;
                boolean ok = false;
                for (Attach at: attaches) {
                    if(at.getAttach_name().equals(s)){
                        ok = true;
                        break;
                    }
                }
                String attach_code=UUID.randomUUID().toString().replaceAll("-", "")+System.currentTimeMillis();
                if(!ok){
                    String  attachs_code = attach_code+n;
                    boolean ok1= attachDao.add(attachs_code ,notice_code, s,s);
                    if(!ok1){
                        throw new RuntimeException();
                    }
                }
            }

            boolean ok = noticeDao.update(notice_code,noticetype_code,notice_title,notice_desc,fileName,usercode);
            if(!ok){
                throw new RuntimeException();
            }
        }catch (Exception excp){
            throw new RuntimeException();
        }


        try {
            //物理删除文件
            File f = new File(path + "/" + notice.getNotice_uri());
            if (f.exists()) {
                f.delete();
            }
            for (String sss : ls) {
                File ff = new File(path1 + "/" + ss);
                if (ff.exists()) {
                    ff.delete();
                }
            }
        }catch(Exception e){

        }

        return true;
    }


    /**
     * 通过ID获取公告详细信息
     * @param code
     * @return
     */
    @Override
    public NoticeInfoVo loadByCode(String code) {

        NoticeInfoVo noticeInfoVo = new NoticeInfoVo();
        Notice notice = noticeDao.loadByCode(code);
        System.out.println(notice);
        noticeInfoVo.setNotice(notice);
        noticeInfoVo.setUser(userDao.loadByCode(notice.getUser_code()));
        noticeInfoVo.setNoticetype(noticeTypeDao.loadById(notice.getNoticetype_code()));
        noticeInfoVo.setAttaches(attachDao.loadByNoticeCode(notice.getNotice_code()));
        return noticeInfoVo;
    }

    @Override
    public List<NoticeInfoVo> loadPassNotice() {
        List<NoticeInfoVo> noticeInfoVos=new ArrayList<NoticeInfoVo>();
        List<Notice> notices=noticeDao.loadPassedNoticeBytime();
        for (Notice notice:notices ) {
            NoticeInfoVo noticeInfoVo=new NoticeInfoVo();
            noticeInfoVo.setNoticetype(noticeTypeDao.loadNoticeTypeByCode(notice.getNoticetype_code()));
            noticeInfoVo.setAttaches(noticeDao.loadAttachListByNoticeCode(notice.getNotice_code()));
            noticeInfoVo.setUser(userDao.loadByCode(notice.getUser_code()));
            noticeInfoVo.setNotice(notice);
            noticeInfoVos.add(noticeInfoVo);
        }
        return noticeInfoVos;
    }

    @Override
    public List<NoticeInfoVo> loadUnPassNotice() {
        List<NoticeInfoVo> noticeInfoVos=new ArrayList<NoticeInfoVo>();
        List<Notice> notices=noticeDao.loadUnPassedNoticeBytime();
        for (Notice notice:notices ) {
            NoticeInfoVo noticeInfoVo=new NoticeInfoVo();
            noticeInfoVo.setNoticetype(noticeTypeDao.loadNoticeTypeByCode(notice.getNoticetype_code()));
            noticeInfoVo.setAttaches(noticeDao.loadAttachListByNoticeCode(notice.getNotice_code()));
            noticeInfoVo.setUser(userDao.loadByCode(notice.getUser_code()));
            noticeInfoVo.setNotice(notice);
            noticeInfoVos.add(noticeInfoVo);
        }
        return noticeInfoVos;
    }

    @Override
    public boolean updateNoticePass(List<String> ss, String notice_code, int noticetype_code, String notice_title, String notice_desc, String notice_info, HttpSession session) {
       boolean ok1= update(ss,notice_code,noticetype_code,notice_title,notice_desc,notice_info,session);
       boolean ok2=noticeDao.setNoticeStatusPass(notice_code);
        if(ok1&&ok2){
            return true;
        }
        return false;
    }

    @Override
    public boolean updateNoticeUnPass(String notice_code) {
        return noticeDao.updateNoticeUnPass(notice_code);
    }

    @Override
    public List<NoticeInfoVo> loadFailedNotice(String user_code) {
        List<NoticeInfoVo> noticeInfoVos=new ArrayList<NoticeInfoVo>();
        List<Notice> notices=noticeDao.loadFailedNoticeByUserCode(user_code);
        for (Notice notice:notices ) {
            NoticeInfoVo noticeInfoVo=new NoticeInfoVo();
            noticeInfoVo.setNoticetype(noticeTypeDao.loadNoticeTypeByCode(notice.getNoticetype_code()));
            noticeInfoVo.setAttaches(noticeDao.loadAttachListByNoticeCode(notice.getNotice_code()));
            noticeInfoVo.setUser(userDao.loadByCode(notice.getUser_code()));
            noticeInfoVo.setNotice(notice);
            noticeInfoVos.add(noticeInfoVo);
        }
        return noticeInfoVos;
    }

    @Override
    public List<NoticeInfoVo> loadUnpassedNoticeByUser(String user_code) {
        List<NoticeInfoVo> noticeInfoVos=new ArrayList<NoticeInfoVo>();
        List<Notice> notices=noticeDao.loadUnpassedNoticeByUser(user_code);
        for (Notice notice:notices ) {
            NoticeInfoVo noticeInfoVo=new NoticeInfoVo();
            noticeInfoVo.setNoticetype(noticeTypeDao.loadNoticeTypeByCode(notice.getNoticetype_code()));
            noticeInfoVo.setAttaches(noticeDao.loadAttachListByNoticeCode(notice.getNotice_code()));
            noticeInfoVo.setUser(userDao.loadByCode(notice.getUser_code()));
            noticeInfoVo.setNotice(notice);
            noticeInfoVos.add(noticeInfoVo);
        }
        return noticeInfoVos;
    }

}
