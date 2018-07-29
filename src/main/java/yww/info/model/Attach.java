package yww.info.model;

import java.io.Serializable;

/**
 * Created by Software1 on 2018/1/15.
 */
public class Attach implements Serializable {

    private String  attach_code;
    private String  notice_code;
    private String attach_name;
    private String attach_uri;
    public Attach() {
    }


    public Attach(String attach_code, String notice_code, String attach_name, String attach_uri) {
        this.attach_code = attach_code;
        this.notice_code = notice_code;
        this.attach_name = attach_name;
        this.attach_uri = attach_uri;
    }

    public String getAttach_code() {
        return attach_code;
    }

    public void setAttach_code(String attach_code) {
        this.attach_code = attach_code;
    }

    public String getNotice_code() {
        return notice_code;
    }

    public void setNotice_code(String notice_code) {
        this.notice_code = notice_code;
    }

    public String getAttach_name() {
        return attach_name;
    }

    public void setAttach_name(String attach_name) {
        this.attach_name = attach_name;
    }

    public String getAttach_uri() {
        return attach_uri;
    }

    public void setAttach_uri(String attach_uri) {
        this.attach_uri = attach_uri;
    }

    @Override
    public String toString() {
        return "Attach{" +
                "attach_code='" + attach_code + '\'' +
                ", notice_code='" + notice_code + '\'' +
                ", attach_name='" + attach_name + '\'' +
                ", attach_uri='" + attach_uri + '\'' +
                '}';
    }
}
