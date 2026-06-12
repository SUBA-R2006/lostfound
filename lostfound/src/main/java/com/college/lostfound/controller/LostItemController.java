package com.college.lostfound.controller;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.college.lostfound.entity.LostItem;
import com.college.lostfound.service.LostItemService;

@RestController
@RequestMapping("/items")
public class LostItemController {

    private final LostItemService service;

    public LostItemController(
            LostItemService service
    ) {
        this.service = service;
    }

    @PostMapping("/add")
    public LostItem addItem(
            @RequestBody LostItem item,
            Authentication authentication
    ) {

        String email =
                authentication.getName();

        item.setOwnerEmail(email);

        return service.saveItem(item);
    }

    @GetMapping("/all")
    public List<LostItem> getAllItems() {
        return service.getAllItems();
    }

    @GetMapping("/{id}")
    public LostItem getItemById(
            @PathVariable Long id
    ) {

        return service.getItemById(id);
    }

    @GetMapping("/my-items")
    public List<LostItem> getMyItems(
            Authentication authentication
    ) {

        String email =
                authentication.getName();

        return service.getItemsByOwner(email);
    }

    @GetMapping("/found")
    public List<LostItem> getFoundItems() {

        return service.getFoundItems();
    }

    @PatchMapping("/claim/{id}")
    public LostItem claimItem(
            @PathVariable Long id
    ) {

        return service.claimItem(id);
    }

    @GetMapping("/search/name")
    public List<LostItem> searchByName(
            @RequestParam String itemName
    ) {

        return service.searchByItemName(itemName);
    }

    @GetMapping("/search/location")
    public List<LostItem> searchByLocation(
            @RequestParam String location
    ) {

        return service.searchByLocation(location);
    }

    @DeleteMapping("/{id}")
    public String deleteItem(
            @PathVariable Long id,
            Authentication authentication
    ) {

        return service.deleteItem(
                id,
                authentication.getName()
        );
    }

    @PatchMapping("/update/{id}")
    public LostItem updateItem(
            @PathVariable Long id,
            @RequestBody LostItem updatedItem,
            Authentication authentication
    ) {

        return service.updateItem(
                id,
                updatedItem,
                authentication.getName()
        );
    }
}