package com.distribuidos.comisaria.Repositories;

import com.distribuidos.comisaria.Models.TemporaryPass;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface TemporaryPassRepository extends JpaRepository<TemporaryPass, Long>{
    TemporaryPass findTemporaryPassById(Long id);
}