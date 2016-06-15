package com.cocotask.core.user.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/web")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    /**
     * 사용자 목록 페이지를 호출한다.
     * @return
     */
    @GetMapping("/users")
    public String getUsers() {
        logger.debug("call getUsers()");

        return "core/user/users";
    }
}
