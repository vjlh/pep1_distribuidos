package com.distribuidos.comisaria.Controllers;

import com.distribuidos.comisaria.Models.TemporaryPass;
import com.distribuidos.comisaria.Repositories.TemporaryPassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.ArrayList;



@RestController
@RequestMapping("/virtual_platform")
@CrossOrigin(origins = "*")
public class TemporaryPassController{
    @Autowired
    TemporaryPassRepository temporaryPassRepository;

    @GetMapping("/temporarypasses")
    public ArrayList<TemporaryPass> getAllTemporaryPasses(){
        return temporaryPassRepository.findAll();
    }

    @PostMapping("/newTemporarypass")
    public TemporaryPass createTemporaryPass(@RequestBody TemporaryPass newTemporaryPass){
        newTemporaryPass.setRequestDate(new Date(System.currentTimeMillis()));
        newTemporaryPass.setLimitDate(newTemporaryPass.sumarHoras(newTemporaryPass.getRequestDate(), 2));
        return temporaryPassRepository.save(newTemporaryPass);
    }

}
