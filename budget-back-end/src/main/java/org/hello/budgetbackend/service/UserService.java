package org.hello.budgetbackend.service;

import org.hello.budgetbackend.entities.User;

public interface UserService {

    User saveUser(User user);

    User updateUser(User user);

    void deleteUser(Long userId);

    boolean validateUser(String username, String password);

}
