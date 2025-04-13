package com.capstone.SafeHug;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SafeHugFrontConnectTest {

    @RequestMapping("/test")
    public String Test(){

        return "connection test";
    }
}