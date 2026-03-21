package org.hello.budgetbackend.service;

import org.hello.budgetbackend.entities.User;
import org.hello.budgetbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        Optional<User> userToUpdate = userRepository.findById(user.getUserId());
        if(userToUpdate.isPresent()){
            return userRepository.save(user);
        }
        return null;
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
