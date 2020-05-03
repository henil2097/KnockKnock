package com.KnockKnock.Controllers;


import com.KnockKnock.Entities.Login;
import com.KnockKnock.Entities.UserRole;
import com.KnockKnock.Repositories.LoginRepository;
import com.KnockKnock.Services.LoginService;
import com.KnockKnock.Services.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class LoginController {

    @Autowired
    LoginRepository loginRepository;

    @Autowired
    UserRoleService userRoleService;

    @Autowired
    LoginService loginService;




    @GetMapping("/verifyCustomer/{role}")
    public String verifyCustomer(@RequestParam("cmobile") String mobile, @RequestParam("cpass") String password,
                               @PathVariable(value="role") long roleId) {


        List<Login> log;
        log = loginRepository.findAll();

        UserRole role=userRoleService.findById(roleId);

        for (Login l : log) {

            if ((mobile).equals(l.getMobileNo()) && (password).equals(l.getPassword()) && (role).equals(l.getUserRole())) {

                Date date=new Date();
                l.setLastLoginDate(date);
                return "success";
            }
        }
        return "failed";
    }
}