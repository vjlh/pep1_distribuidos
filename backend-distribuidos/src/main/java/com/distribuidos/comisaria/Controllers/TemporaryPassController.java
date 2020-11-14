package com.distribuidos.comisaria.Controllers;

import com.distribuidos.comisaria.Models.TemporaryPass;
import com.distribuidos.comisaria.Repositories.TemporaryPassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/virtual_platform")
@CrossOrigin(origins = "*")
public class TemporaryPassController{
    @Autowired
    TemporaryPassRepository temporaryPassRepository;

    @GetMapping("/temporarypasses")
    public List<TemporaryPass> getAllTemporaryPasses(){
        return temporaryPassRepository.findAll();
    }

    @GetMapping("/temporarypass/{id}")
    public TemporaryPass getTemporaryPassById(@PathVariable Long id){
        return temporaryPassRepository.findTemporaryPassById(id);
    }

    //Updatear
    @PutMapping("/temporarypass/{id}")
    public TemporaryPass updateTemporaryPass(@PathVariable Long id, @Valid @RequestBody TemporaryPass updatedTemporaryPass){
        return temporaryPassRepository.findById(id)
            .map(temporaryPass -> {
                temporaryPass.setName(updatedTemporaryPass.getName());
                temporaryPass.setLastname(updatedTemporaryPass.getLastname());
                temporaryPass.setRut(updatedTemporaryPass.getRut());
                temporaryPass.setAddress(updatedTemporaryPass.getAddress());
                temporaryPass.setReason(updatedTemporaryPass.getReason());
                temporaryPass.setRequestDate(new Timestamp(System.currentTimeMillis()));
                temporaryPass.setLimitDate(new Timestamp(System.currentTimeMillis()));
                return temporaryPassRepository.save(temporaryPass);
            }).orElseGet(() -> {
                return temporaryPassRepository.save(updatedTemporaryPass);
            });
    }

    @PostMapping("/temporarypass")
    public TemporaryPass storeTemporaryPass(@Valid @RequestBody TemporaryPass newTemporaryPass){
        newTemporaryPass.setRequestDate(new Timestamp(System.currentTimeMillis()));
        newTemporaryPass.setLimitDate(new Timestamp(System.currentTimeMillis()));
        return temporaryPassRepository.save(newTemporaryPass);
    }

    @DeleteMapping("/temporarypass/{id}")
    public void deleteTemporaryPass(@PathVariable Long id){
        temporaryPassRepository.deleteById(id);
    }
}
