package com.college.lostfound.controller;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/upload")
public class FileUploadController {

    private static final String UPLOAD_DIR =
            System.getProperty("user.dir")
                    + "/uploads/";

    @PostMapping
    public ResponseEntity<String> uploadFile(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        File directory =
                new File(UPLOAD_DIR);

        if (!directory.exists()) {
            directory.mkdirs();
        }

        String fileName =
                UUID.randomUUID()
                        + "_"
                        + file.getOriginalFilename();

        File destination =
                new File(
                        UPLOAD_DIR + fileName
                );

        file.transferTo(destination);

        return ResponseEntity.ok(
                "/uploads/" + fileName
        );
    }
}