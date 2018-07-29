package yww.info.controller;

/**
 * Created by Software1 on 2018/1/15.
 */

import yww.info.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;

@Controller
@RequestMapping("file")
public class FileController {
    @Autowired
    UserService userService;

    /**
     * 文件上传
     * @param file
     * @param request
     * @param model
     * @return
     */
    @RequestMapping(value = "/upload")
    @ResponseBody
    public String upload(MultipartFile file, HttpServletRequest request, Model model) {
        String path = request.getSession().getServletContext().getRealPath("upload");
        System.out.println(path);
        String fileName = file.getOriginalFilename();
        String[] ss = fileName.split("\\.");
       // System.out.println(ss[0]+"--"+ss[1]);
        //这里包括文件名加时间戳加文件格式
        fileName = ss[0]+System.currentTimeMillis()+"."+ss[1];
       // System.out.println(fileName);
        //String fileName = new Date().getTime()+".jpg";
        File targetFile = new File(path, fileName);
        if(!targetFile.exists()){
            targetFile.mkdirs();
        }
        //保存
        try {
            file.transferTo(targetFile);
            return  fileName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "-1";
    }

    @RequestMapping(value = "/delete")
    @ResponseBody
    public boolean delete(String  filename, HttpServletRequest request) {
        String path = request.getSession().getServletContext().getRealPath("upload");
        //System.out.println(filename);
        try {
            File f = new File(path,filename);
            if (f.exists()) {
                f.delete();
            }
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @RequestMapping(value = "/upload_headpic")
    @ResponseBody
    public String uploadHeadpic(MultipartFile file,String usercode,HttpServletRequest request,Model model){
        String path = request.getSession().getServletContext().getRealPath("upload_headpic");
        System.out.println(path);
        String fileName = file.getOriginalFilename();
        String[] ss = fileName.split("\\.");
        // System.out.println(ss[0]+"--"+ss[1]);
        fileName = usercode+"."+ss[1];
        userService.updateHeadpic(usercode,fileName);
        // System.out.println(fileName);
        //String fileName = new Date().getTime()+".jpg";
        File targetFile = new File(path, fileName);
        if(!targetFile.exists()){
            targetFile.mkdirs();

        }else{
            targetFile.delete();
        }
        //保存
        try {

            file.transferTo(targetFile);
            return  fileName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "-1";
    }

    /**
     * 文件下载功能:主要用于照片的上传和下载
     * @param request
     * @param response
     * @throws Exception
     */
    @RequestMapping(value = "/download")
    @ResponseBody
    public void download(HttpServletRequest request,HttpServletResponse response) throws Exception{
        //模拟文件，myfile.txt为需要下载的文件
        String fileName = request.getSession().getServletContext().getRealPath("upload")+"/myfile.txt";
        //获取输入流
        InputStream bis = new BufferedInputStream(new FileInputStream(new File(fileName)));
        //假如以中文名下载的话
        String filename = "下载文件.txt";
        //转码，免得文件名中文乱码
        filename = URLEncoder.encode(filename,"UTF-8");
        //设置文件下载头
        response.addHeader("Content-Disposition", "attachment;filename=" + filename);
        //1.设置文件ContentType类型，这样设置，会自动判断下载文件类型
        response.setContentType("multipart/form-data");
        BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream());
        int len = 0;
        while((len = bis.read()) != -1){
            out.write(len);
            out.flush();
        }
        out.close();
    }




    /**
     * app手机照片上传
     * @param file
     * @param request
     * @param model
     * @return
     */
    @RequestMapping(value = "/uploadAPP")
    @ResponseBody
    public String uploadAPP(MultipartFile file, HttpServletRequest request, Model model) {
        String path = request.getSession().getServletContext().getRealPath("upload");
        System.out.println(path);
        String fileName = file.getOriginalFilename();
        /*String[] ss = fileName.split("\\.");
        // System.out.println(ss[0]+"--"+ss[1]);
        //这里包括文件名加时间戳加文件格式
        fileName = ss[0]+System.currentTimeMillis()+"."+ss[1];
        // System.out.println(fileName);
        //String fileName = new Date().getTime()+".jpg";
        //userService.updateHeadpic(usercode,fileName);*/
        File targetFile = new File(path, fileName);
        if(!targetFile.exists()){
            targetFile.mkdirs();
        }
        //保存
        try {
            file.transferTo(targetFile);
            return  fileName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "-1";
    }


    @RequestMapping(value = "/uploadAPPHead")
    @ResponseBody
    public String uploadAPPHead(MultipartFile file, HttpServletRequest request, Model model) {
        String path = request.getSession().getServletContext().getRealPath("upload_headpic");
        System.out.println(path);
        String fileName = file.getOriginalFilename();
        /*String[] ss = fileName.split("\\.");
        // System.out.println(ss[0]+"--"+ss[1]);
        //这里包括文件名加时间戳加文件格式
        fileName = ss[0]+System.currentTimeMillis()+"."+ss[1];
        // System.out.println(fileName);
        //String fileName = new Date().getTime()+".jpg";
        //userService.updateHeadpic(usercode,fileName);*/
        File targetFile = new File(path, fileName);
        if(!targetFile.exists()){
            targetFile.mkdirs();
        }
        //保存
        try {
            file.transferTo(targetFile);
            return  fileName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "-1";
    }

 /*   *//**
     * app手机头像上传
     * @param file
     * @param request
     * @param model
     * @return
     *//*
    @RequestMapping(value = "/uploadAPP_headpic")
    @ResponseBody
    public String uploadAPPHeadpic(MultipartFile file,String usercode,HttpServletRequest request,Model model){
        String path = request.getSession().getServletContext().getRealPath("upload_headpic");
        System.out.println(path);
        String fileName = file.getOriginalFilename();
        String[] ss = fileName.split("\\.");
        // System.out.println(ss[0]+"--"+ss[1]);
        fileName = usercode+"."+ss[1];
        userService.updateHeadpic(usercode,fileName);
        // System.out.println(fileName);
        //String fileName = new Date().getTime()+".jpg";
        File targetFile = new File(path, fileName);
        if(!targetFile.exists()){
            targetFile.mkdirs();

        }else{
            targetFile.delete();
        }
        //保存
        try {

            file.transferTo(targetFile);
            return  fileName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "-1";
    }
*/

}
