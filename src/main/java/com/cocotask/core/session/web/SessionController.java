package com.cocotask.core.session.web;

import com.cocotask.core.session.domain.SessionWeb;
import com.cocotask.core.session.service.SessionWebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/web")
public class SessionController {
    @Autowired
    private SessionWebService sessionWebService;

    @GetMapping("/session")
    public SessionWeb readSession(HttpSession session) {
        SessionWeb sessionWeb = sessionWebService.getRestSession(session);

        return sessionWeb;
    }
}
