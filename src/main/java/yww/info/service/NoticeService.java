package yww.info.service;


import yww.info.model.Attach;
import yww.info.model.Notice;
import yww.info.viewmodel.NoticeInfoVo;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
public interface NoticeService {

    List<NoticeInfoVo> loadList(int noticetype_code,String user_code);

    boolean distribute(List<String> attaches, int noticetype_code, String notice_title, String notice_desc, String notice_info, HttpSession session);

    boolean deleteByNoticeCode(String i, HttpSession session);

    boolean update(List<String> ss, String notice_code, int i, String notice_title, String nsotice_desc, String notice_info, HttpSession session);


    NoticeInfoVo loadByCode(String code);


    List<NoticeInfoVo> loadPassNotice();

    List<NoticeInfoVo> loadUnPassNotice();

    boolean updateNoticePass(List<String> ss, String notice_code, int i, String notice_title, String notice_desc, String notice_info, HttpSession session);

    boolean updateNoticeUnPass(String notice_code);

    List<NoticeInfoVo> loadFailedNotice(String user_code);

    List<NoticeInfoVo> loadUnpassedNoticeByUser(String user_code);
}
