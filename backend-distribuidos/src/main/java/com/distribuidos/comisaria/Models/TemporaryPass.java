package com.distribuidos.comisaria.Models;

import javax.validation.constraints.NotNull;
import org.springframework.data.relational.core.mapping.Embedded.Nullable;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "temporaryPass")
@JsonIgnoreProperties(value = {"createdAt", "_class"}, allowGetters = true)
public class TemporaryPass{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    String name;

    @NotNull
    String lastname;

    @NotNull
    String rut;

    @NotNull
    String address;

    @NotNull
    String reason;

    @Nullable 
    private Timestamp requestDate;

    @Nullable 
    private Timestamp limitDate;

    public TemporaryPass(){
        //
    }

    public TemporaryPass(String name, String lastname, String rut, String address, 
                        String reason, Timestamp requestDate, Timestamp limitDate){
        this.name = name;
        this.lastname = lastname;
        this.rut = rut;
        this.address = address;
        this.reason = reason;
        this.requestDate = requestDate;
        this.limitDate = limitDate;
    } 


}