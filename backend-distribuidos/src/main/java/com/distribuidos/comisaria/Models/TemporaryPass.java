package com.distribuidos.comisaria.Models;

import javax.validation.constraints.NotNull;
import org.springframework.data.relational.core.mapping.Embedded.Nullable;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

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

    @NotNull
    String email;

    @Nullable 
    private Date requestDate;

    @Nullable 
    private Date limitDate;

    public TemporaryPass(){
        //
    }

    public TemporaryPass(String name, String lastname, String rut, String address, 
                        String reason, String email){
        this.name = name;
        this.lastname = lastname;
        this.rut = rut;
        this.address = address;
        this.reason = reason;
        this.email = email;
    }

    public void setRequestDate(Date requestDate) {
        Calendar calendar = Calendar.getInstance();
        this.requestDate = calendar.getTime();
    }

    public Date getLimitDate() {
        return limitDate;
    }

    public void setLimitDate(Date limitDate) {
        this.limitDate = limitDate;
    }

    public Date sumarHoras(Date date, int hours){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.HOUR, hours);
        return  calendar.getTime();
    }
}