package com.cocotask.core.session.service;

import com.cocotask.core.session.domain.SessionWeb;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
public class SessionWebService {
    private static final Logger logger = LoggerFactory.getLogger(SessionWebService.class);

    public SessionWeb getRestSession(HttpSession session) {
        Long loginUserUid = (Long) session.getAttribute(SessionWeb.LOGIN_USER_UID);
        String logninUserName = (String) session.getAttribute(SessionWeb.LOGIN_USER_NAME);

        SessionWeb sessionWeb = new SessionWeb();
        sessionWeb.setUserUid(loginUserUid);
        sessionWeb.setLoginUserName(logninUserName);

        logger.debug(sessionWeb.toString());

        return sessionWeb;
    }
}
