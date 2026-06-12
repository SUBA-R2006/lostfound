package com.college.lostfound.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.college.lostfound.entity.ItemStatus;
import com.college.lostfound.entity.LostItem;

public interface LostItemRepository
        extends JpaRepository<LostItem, Long> {

    long countByStatus(
            ItemStatus status
    );

    List<LostItem> findByOwnerEmail(
            String ownerEmail
    );

    List<LostItem> findByStatus(
            ItemStatus status
    );

    List<LostItem> findByItemNameContainingIgnoreCase(
            String itemName
    );

    List<LostItem> findByLocationContainingIgnoreCase(
            String location
    );
}