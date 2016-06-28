package com.cocotask.core;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CoreFrontendController {
    @RequestMapping("/web")
    public String welcome() {
        return "/core/home";
    }
}
