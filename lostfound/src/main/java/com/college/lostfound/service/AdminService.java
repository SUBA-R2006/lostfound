package com.college.lostfound.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.college.lostfound.entity.ItemStatus;
import com.college.lostfound.entity.LostItem;
import com.college.lostfound.entity.User;
import com.college.lostfound.repository.LostItemRepository;
import com.college.lostfound.repository.UserRepository;

@Service
public class AdminService {

    private final UserRepository userRepository;
    private final LostItemRepository itemRepository;

    public AdminService(
            UserRepository userRepository,
            LostItemRepository itemRepository
    ) {
        this.userRepository = userRepository;
        this.itemRepository = itemRepository;
    }

    public List<User> getAllUsers() {

        return userRepository.findAll();
    }

    public List<LostItem> getAllItems() {

        return itemRepository.findAll();
    }

    public void deleteAnyItem(
            Long id
    ) {

        itemRepository.deleteById(id);
    }

    public Map<String, Long> getStats() {

        Map<String, Long> stats =
                new HashMap<>();

        stats.put(
                "totalUsers",
                userRepository.count()
        );

        stats.put(
                "totalItems",
                itemRepository.count()
        );

        stats.put(
                "lostItems",
                itemRepository.countByStatus(
                        ItemStatus.LOST
                )
        );

        stats.put(
                "foundItems",
                itemRepository.countByStatus(
                        ItemStatus.FOUND
                )
        );

        stats.put(
                "claimedItems",
                itemRepository.countByStatus(
                        ItemStatus.CLAIMED
                )
        );

        return stats;
    }
}