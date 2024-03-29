package com.arbc.development.mvc.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import jakarta.persistence.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "users")
public class Cliente {
    @Id
    @GeneratedValue
    private Long id;
    @NonNull
    private String username;
    private String name;
    private String lastname;
    private String email;  
}
