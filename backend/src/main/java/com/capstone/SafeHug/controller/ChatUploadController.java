package com.capstone.SafeHug.controller;

import com.capstone.SafeHug.service.S3Service;
import com.capstone.SafeHug.entity.ChatUpload;
import com.capstone.SafeHug.repository.ChatUploadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.services.s3.S3Client;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

@RestController
@RequestMapping("/api/upload")
@RequiredArgsConstructor
public class ChatUploadController {

    private final ChatUploadRepository chatUploadRepository;
    private final S3Service s3Service;

    @PostMapping
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,
                                        @RequestParam(value = "userId", required = false) Long userId) throws IOException {
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        String filePath = s3Service.uploadFile(fileName, file);

        ChatUpload chatUpload = ChatUpload.builder()
                .userId(userId)  // null이면 비회원
                .filePath(filePath)
                .uploadedAt(LocalDateTime.now())
                .build();

        chatUploadRepository.save(chatUpload);

        return ResponseEntity.ok("업로드 성공: " + filePath);
    }
}
