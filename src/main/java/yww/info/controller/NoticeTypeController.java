package yww.info.controller;

import yww.info.model.Noticetype;
import yww.info.service.NoticeTypeService;
import yww.info.viewmodel.NoticeTypesVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
@Controller
@RequestMapping("noticeType")
public class NoticeTypeController {
    @Autowired
    NoticeTypeService noticeTypeService;


    /**
     *增加公告类别
     * @param not_noticetype_code
     * @param noticetype_name
     * @return
     */
    @RequestMapping("/add")
    @ResponseBody
     public boolean add(int not_noticetype_code, String noticetype_name){
             System.out.println("in add noticeType controller");
               return noticeTypeService.add(not_noticetype_code,noticetype_name);
    }

    /**
     * 删除公告类别
     * @param noticetype_code
     * @return
     */
    @RequestMapping("/delete")
    @ResponseBody
    public  boolean delete(int noticetype_code){
        return noticeTypeService.delete(noticetype_code);
    }


    /**
     * 更新公告类别
     * @param noticetype_code
     * @param not_noticetype_code
     * @param noticetype_name
     * @return
     */
    @RequestMapping("/update")
    @ResponseBody
    public  boolean update(int noticetype_code,int not_noticetype_code, String noticetype_name){
        return noticeTypeService.update(noticetype_code,not_noticetype_code,noticetype_name);
    }

    /**
     *加载所有公告类别
     * @return
     */
    @RequestMapping("/typelist")
    @ResponseBody
    public  List<Noticetype> loadNoticetype(){
        return noticeTypeService.loadNoticetype();
    }

    /**
     *根据公告类别id加载公告类别及公告信息
     * @param pid
     * @return
     */
    @RequestMapping("/tree")
    @ResponseBody
    public List<NoticeTypesVo> loadByNoticetypeCode(int pid){
        return noticeTypeService.loadByNoticetypeCode(pid);
    }

    /**
     * 加载所有公告类别
     * @return
     */
    @RequestMapping("/sel")
    @ResponseBody
    public List<Noticetype> loadNoticetypeList(){
        return noticeTypeService.loadNoticetypeList();

    }

}
