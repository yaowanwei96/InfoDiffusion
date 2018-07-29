package yww.info.service.serviceImpl;

import org.springframework.transaction.annotation.Transactional;
import yww.info.dao.RoleDao;
import yww.info.dao.Role_divDao;
import yww.info.model.Menu;
import yww.info.model.Role;
import yww.info.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by Administrator on 2018/1/11.
 */
@Service
@Transactional
public class RoleServiceImpl implements RoleService {
    @Autowired
    RoleDao roleDao;

    @Autowired
    Role_divDao role_divDao;

    @Override
    public boolean add(String role_name, int role_weight) {
        return roleDao.addAll(role_name,role_weight);
    }

    @Override
    public boolean delete(int role_code) {
        return roleDao.delete(role_code);
    }

    @Override
    public boolean update(int role_code, String role_name, int role_weight) {
        return roleDao.update(role_code,role_name,role_weight);
    }

    @Override
    public boolean select(int role_code) {
        return roleDao.select(role_code);
    }

    @Override
    public List<Role> loadRoleList() {
        return roleDao.loadRoleList();
    }

    @Override
    public List<Role> loadRoleByUserCode(String user_code, HttpSession session) {
        return roleDao.loadByUserCode(user_code);
    }

    @Override
    public boolean roleMenuAdd(String role_code, String menus, HttpSession session) {
        boolean ok1=false;
        boolean flag=false;
        if(roleDao.isRoleMenu(role_code)!=null){
            flag=true;
            ok1= roleDao.deleteRoleMenuByRoleCode(role_code);
        }
        System.out.println("ok1:"+ok1+"flag:"+flag);
        System.out.println(menus);
        boolean ok2=false;
        String menu4=menus.replace("\"","").trim();
        System.out.println(menu4);
        if(menu4.equals("null")&&((flag&&ok1)||(!flag&&!ok1))){
            System.out.println("in test");
            return true;
        }else{

        String menus1=menu4.replace("[","");
        String menus2=menus1.replace("]","");
        String menus3=menus2.replaceAll(" ","");//替换单引号
        //String menus4=menus2.replace("\"","").trim();//替换单引号
        /*if(menus3==null&&((flag&&ok1)||(!flag&&!ok1))){
            return true;
        }else{*/
            String[] ss = menus3.split(",");
            //  System.out.print("d"+Integer.parseInt(ss[0])+"     "+ss[1]+"m");
            for(int i=0;i<ss.length;i++){
                ok2= roleDao.addRoleMenu(Integer.parseInt(role_code),Integer.parseInt(ss[i]));
            }
            if((flag&&ok1&&ok2)||(!flag&&!ok1&&ok2)){
                return true;
            }
        }

        return false;
    }

    @Override
    public boolean roleUserAdd(String user_code, String roles, HttpSession session) {
        boolean ok1=false;
        boolean flag=false;
        if(role_divDao.isRoleUser(user_code)!=null){
            flag=true;
            ok1= role_divDao.deleteRoleUserByUserCode(user_code);
        }
        boolean ok2=false;
        String menus4=roles.replace("\"","").trim();//替换单引号
        System.out.println("menus4"+menus4);
        if(menus4.equals("null")&&((flag&&ok1)||(!flag&&!ok1))){
            System.out.println("in test");
            return true;
        }else{
        String menus1=menus4.replace("[","");
        String menus2=menus1.replace("]","");
        String menus3=menus2.replaceAll(" ","");//替换单引号
            String[] ss = menus3.split(",");
            for(int i=0;i<ss.length;i++){
                ok2= role_divDao.addRoleUser(user_code,Integer.parseInt(ss[i]));
            }
            if((flag&&ok1&&ok2)||(!flag&&!ok1&&ok2)){
                return true;
            }
        }

        return false;
    }

}
