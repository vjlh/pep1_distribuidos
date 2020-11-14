package com.distribuidos.comisaria.Repositories;

import com.distribuidos.comisaria.Models.TemporaryPass;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

@Repository
public interface TemporaryPassRepository extends JpaRepository<TemporaryPass, Long>{
    ArrayList<TemporaryPass> findAll();
}