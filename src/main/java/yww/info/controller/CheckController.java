package yww.info.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import yww.info.dao.AttachDao;
import yww.info.dao.NoticeDao;
import yww.info.dao.NoticeTypeDao;
import yww.info.dao.UserDao;
import yww.info.model.Notice;
import yww.info.service.NoticeService;
import yww.info.service.NoticeTypeService;
import yww.info.service.UserService;
import yww.info.viewmodel.NoticeInfoVo;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by LQ on 2018/4/17.
 */
@Controller
@RequestMapping("check")
public class CheckController {

    @Autowired
    NoticeService noticeService;

    @Autowired
    NoticeTypeService noticeTypeService;

    @Autowired
    UserService userService;

    @RequestMapping(value = "/loadpassnotice")
    @ResponseBody
    public List<NoticeInfoVo> loadPassNotice() {
        System.out.println("in pass controller");
        return noticeService.loadPassNotice();
    }

    @RequestMapping(value = "/loadunpassnotice")
    @ResponseBody
    public List<NoticeInfoVo> loadUnPassNotice() {
        return noticeService.loadUnPassNotice();
    }



    @RequestMapping(value = "/loadFailednotice")
    @ResponseBody
    public List<NoticeInfoVo> loadFailedNotice(String user_code) {
        return noticeService.loadFailedNotice(user_code);
    }

    @RequestMapping(value = "/loadunpassednoticeByuser")
    @ResponseBody
    public List<NoticeInfoVo> loadUnpassedNoticeByUser(String user_code) {
        return noticeService.loadUnpassedNoticeByUser(user_code);
    }

}
