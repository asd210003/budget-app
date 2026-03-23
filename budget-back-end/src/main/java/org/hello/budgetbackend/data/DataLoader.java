package org.hello.budgetbackend.data;

import lombok.RequiredArgsConstructor;
import org.hello.budgetbackend.entities.User;
import org.hello.budgetbackend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            User drew = new User();
            drew.setFirstName("person");
            drew.setUsername("person123");
            drew.setPassword("password123");
            drew.setEmail("example@example.com");
            userRepository.save(drew);
        }
    }
}
