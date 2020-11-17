package com.distribuidos.comisaria.Models;

import com.distribuidos.comisaria.Helpers.EmailSender;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.mail.MessagingException;
import java.io.IOException;

@Data
@NoArgsConstructor
public class Email {

    private TemporaryPass temporaryPass;

    public Email(TemporaryPass temporaryPass){
        this.temporaryPass = temporaryPass;
    }
    public void sendEmail() throws IOException, MessagingException {
        EmailSender.sendMail(this.temporaryPass);
    }
}
