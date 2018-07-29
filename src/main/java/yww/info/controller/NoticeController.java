package yww.info.controller;

import yww.info.service.NoticeService;
import yww.info.viewmodel.NoticeInfoVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
@Controller
@RequestMapping("notice")
public class NoticeController {
    @Autowired
    NoticeService noticeService;

    /**
     * 根据公告类别ID加载这个类别下面的所有公告
     * @param noticetype_code
     * @return
     */
    @RequestMapping("/selectType")
    @ResponseBody
    public List<NoticeInfoVo> loadList(Integer noticetype_code,String user_code){
        System.out.println("in controller"+noticetype_code+"   "+user_code);
        return noticeService.loadList(noticetype_code,user_code);
    }


    /**
     * 通过ID获取公告详细信息
     * @param code
     * @return
     */
    @RequestMapping("/loadByCode")
    @ResponseBody
    public NoticeInfoVo loadByCode(String code){

        return noticeService.loadByCode(code);

    }

    /**
     *发布公告
     * @param attaches
     * @param noticetype_code
     * @param notice_title
     * @param notice_desc
     * @param notice_info
     * @param session
     * @return
     */
    @RequestMapping("/distribute")
    @ResponseBody
    public boolean distribute(String attaches, String noticetype_code, String notice_title, String notice_desc, String notice_info, HttpSession session){

        List<String> ss = null;
        if(attaches==null || attaches.trim().equals("")){
            ss = new ArrayList<String>();
        }else{
            String sss[] = attaches.split("\\\\");
            ss = Arrays.asList(sss);
        }

        return  noticeService.distribute(ss,Integer.parseInt(noticetype_code),notice_title,notice_desc,notice_info,session);
    }

    /**
     * 根据公告ID删除此条公告
     * @param notice_code
     * @return
     */
    @RequestMapping("/delete")
    @ResponseBody
    public  boolean delete(String notice_code,HttpSession session){
        System.out.println("in delete controller "+notice_code);
        return noticeService.deleteByNoticeCode(notice_code,session);
    }

    /**
     *根据公告类别ID进行公告编辑
     * @param noticetype_code
     * @param notice_title
     * @param notice_desc
     * @param notice_info
     * @param session
     * @return
     */
    @RequestMapping("/noticeEdit")
    @ResponseBody
    public boolean update(String attaches,String notice_code, String noticetype_code, String notice_title, String notice_desc, String notice_info, HttpSession session){
        List<String> ss = null;
        if(attaches==null || attaches.trim().equals("")){
            ss = new ArrayList<String>();
        }else{
            String sss[] = attaches.split("\\\\");
            ss = Arrays.asList(sss);
        }

        return noticeService.update(ss,notice_code,Integer.parseInt(noticetype_code),notice_title,notice_desc,notice_info,session);
    }


    @RequestMapping("/noticeEditPass")
    @ResponseBody
    public boolean updateNoticePass(String attaches,String notice_code, String noticetype_code, String notice_title, String notice_desc, String notice_info, HttpSession session){
        List<String> ss = null;
        if(attaches==null || attaches.trim().equals("")){
            ss = new ArrayList<String>();
        }else{
            String sss[] = attaches.split("\\\\");
            ss = Arrays.asList(sss);
        }

        return noticeService.updateNoticePass(ss,notice_code,Integer.parseInt(noticetype_code),notice_title,notice_desc,notice_info,session);
    }

    @RequestMapping("/noticeEditUnPass")
    @ResponseBody
    public boolean updateNoticeUnPass(String notice_code){
        return noticeService.updateNoticeUnPass(notice_code);
    }

}
