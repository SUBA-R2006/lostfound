package com.college.lostfound.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.college.lostfound.entity.ItemStatus;
import com.college.lostfound.entity.LostItem;
import com.college.lostfound.repository.LostItemRepository;

@Service
public class LostItemService {

    private final LostItemRepository repository;

    public LostItemService(
            LostItemRepository repository
    ) {
        this.repository = repository;
    }

    public LostItem saveItem(
            LostItem item
    ) {
        return repository.save(item);
    }

    public List<LostItem> getAllItems() {
        return repository.findAll();
    }

    public LostItem getItemById(
            Long id
    ) {

        return repository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Item Not Found"
                        )
                );
    }

    public List<LostItem> getItemsByOwner(
            String email
    ) {
        return repository.findByOwnerEmail(email);
    }

    public List<LostItem> getFoundItems() {

        return repository.findByStatus(
                ItemStatus.FOUND
        );
    }

    public LostItem claimItem(
            Long id
    ) {

        LostItem item =
                repository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Item Not Found"
                                )
                        );

        item.setStatus(
                ItemStatus.CLAIMED
        );

        return repository.save(item);
    }

    public List<LostItem> searchByItemName(
            String itemName
    ) {

        return repository
                .findByItemNameContainingIgnoreCase(
                        itemName
                );
    }

    public List<LostItem> searchByLocation(
            String location
    ) {

        return repository
                .findByLocationContainingIgnoreCase(
                        location
                );
    }

    public String deleteItem(
            Long id,
            String email
    ) {

        LostItem item =
                repository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Item Not Found"
                                )
                        );

        if (!email.equals(
                item.getOwnerEmail()
        )) {

            return "You Can Delete Only Your Own Items";
        }

        repository.delete(item);

        return "Item Deleted Successfully";
    }

    public LostItem updateItem(
            Long id,
            LostItem updatedItem,
            String email
    ) {

        LostItem item =
                repository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Item Not Found"
                                )
                        );

        if (!email.equals(
                item.getOwnerEmail()
        )) {

            throw new RuntimeException(
                    "You Can Update Only Your Own Items"
            );
        }

        item.setItemName(
                updatedItem.getItemName()
        );

        item.setDescription(
                updatedItem.getDescription()
        );

        item.setLocation(
                updatedItem.getLocation()
        );

        return repository.save(item);
    }

    // DASHBOARD STATISTICS

    public Map<String, Long> getStats() {

        Map<String, Long> stats =
                new HashMap<>();

        stats.put(
                "totalItems",
                repository.count()
        );

        stats.put(
                "lostItems",
                repository.countByStatus(
                        ItemStatus.LOST
                )
        );

        stats.put(
                "foundItems",
                repository.countByStatus(
                        ItemStatus.FOUND
                )
        );

        stats.put(
                "claimedItems",
                repository.countByStatus(
                        ItemStatus.CLAIMED
                )
        );

        return stats;
    }
    
}