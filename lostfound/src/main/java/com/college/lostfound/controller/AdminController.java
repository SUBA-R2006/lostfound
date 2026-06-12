package com.college.lostfound.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.college.lostfound.entity.LostItem;
import com.college.lostfound.entity.User;
import com.college.lostfound.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(
            AdminService adminService
    ) {
        this.adminService = adminService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {

        return adminService.getAllUsers();
    }

    @GetMapping("/items")
    public List<LostItem> getAllItems() {

        return adminService.getAllItems();
    }

    @GetMapping("/stats")
    public Map<String, Long> getStats() {

        return adminService.getStats();
    }

    @DeleteMapping("/item/{id}")
    public String deleteAnyItem(
            @PathVariable Long id
    ) {

        adminService.deleteAnyItem(id);

        return "Item Deleted By Admin";
    }
}