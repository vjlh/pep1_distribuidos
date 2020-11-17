package com.distribuidos.comisaria.Controllers;

import org.springframework.web.bind.annotation.*;
import com.distribuidos.comisaria.Models.*;
import javax.mail.MessagingException;
import java.io.IOException;
import javax.validation.Valid;

@RestController
@RequestMapping("/virtual_platform")
@CrossOrigin(origins = "*")
public class EmailController {

    @PostMapping("/sendEmail")
    @ResponseBody
    public void sendEmail(@Valid @RequestBody TemporaryPass temporaryPass) 
      throws IOException, MessagingException {

      Email email  = new Email(temporaryPass);
      email.sendEmail();
    }
}