package org.hello.budgetbackend.entities;


import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Data
@RequiredArgsConstructor
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String firstName;

    @Column(unique = true)
    private String username;

    private String password;

    @Column(unique = true)
    private String email;

    @CreationTimestamp
    private Date created;
}
