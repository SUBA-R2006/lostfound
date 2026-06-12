package com.college.lostfound.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.college.lostfound.config.JwtService;
import com.college.lostfound.dto.LoginRequest;
import com.college.lostfound.dto.RegisterRequest;
import com.college.lostfound.entity.Role;
import com.college.lostfound.entity.User;
import com.college.lostfound.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    private final BCryptPasswordEncoder encoder =
            new BCryptPasswordEncoder();

    // REGISTER
    public String register(RegisterRequest request) {

        Optional<User> existingUser =
                userRepository.findByEmail(
                        request.getEmail()
                );

        if (existingUser.isPresent()) {
            return "Email Already Registered";
        }

        User user = new User();

        user.setName(
                request.getName()
        );

        user.setEmail(
                request.getEmail()
        );

        user.setPassword(
                encoder.encode(
                        request.getPassword()
                )
        );

        // Default Role
        user.setRole(
                Role.USER
        );

        userRepository.save(
                user
        );

        return "User Registered Successfully";
    }

    // LOGIN
    public String login(
            LoginRequest request
    ) {

        Optional<User> optionalUser =
                userRepository.findByEmail(
                        request.getEmail()
                );

        if (optionalUser.isEmpty()) {
            return "User Not Found";
        }

        User user =
                optionalUser.get();

        boolean isPasswordCorrect =
                encoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (isPasswordCorrect) {

            return jwtService.generateToken(
                    user.getEmail(),
                    user.getRole().name()
            );
        }

        return "Invalid Password";
    }
}