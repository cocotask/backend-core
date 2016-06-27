package com.cocotask.core.session.domain;

public class SessionWeb {
    public static final String LOGIN_USER_UID = "loginUserUid";
    public static final String LOGIN_USER_NAME = "loginUserName";

    private Long userUid;
    private String loginUserName;

    public Long getUserUid() {
        return userUid;
    }

    public void setUserUid(Long userUid) {
        this.userUid = userUid;
    }

    public String getLoginUserName() {
        return loginUserName;
    }

    public void setLoginUserName(String loginUserName) {
        this.loginUserName = loginUserName;
    }

    @Override
    public String toString() {
        return "SessionWeb{" +
                "userUid=" + userUid +
                ", loginUserName='" + loginUserName + '\'' +
                '}';
    }
}
