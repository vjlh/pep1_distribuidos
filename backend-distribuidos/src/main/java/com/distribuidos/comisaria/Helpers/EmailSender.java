package com.distribuidos.comisaria.Helpers;

import com.distribuidos.comisaria.Models.TemporaryPass;
import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;


public class EmailSender {

    public static void sendMail(TemporaryPass temporaryPass) throws AddressException, MessagingException, IOException {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.setProperty("mail.smtp.user", "comisariavirtual.2.2020@gmail.com");
        props.setProperty("mail.smtp.password", "Percy1234");
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("comisariavirtual.2.2020@gmail.com","Percy1234");
            }
        });
        Message msg = new MimeMessage(session);
        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(temporaryPass.getEmail()));
        msg.setSubject("Permiso exitosamente generado");
        msg.setSentDate(new Date());
        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent("<p> Estimado/a " + temporaryPass.getName() + " " + temporaryPass.getLastname() + ", se ha generado un permiso temporal a su nombre con la siguiente información:</p>\n" + 
                                   "<hr>" +
                                   "<p><strong>Información del permiso</strong>\n<ul>" +
                                   "<li>ID: "+temporaryPass.getId() + "</li>\n" +
                                   "<li>Motivo: " + temporaryPass.getReason() + "</li>\n" +
                                   "<li>Hora de inicio: " + temporaryPass.getRequestDate() + "</li>\n" +
                                   "<li>Hora de término: " + temporaryPass.getLimitDate() + "</li>\n</ul>" +
                                   "<hr>" +
                                   "<p><strong>Información de la persona solicitante</strong></li>\n<ul>" +
                                   "<li>Nombre: " + temporaryPass.getName() + " " + temporaryPass.getLastname() +"</li>\n" +
                                   "<li>Rut: " + temporaryPass.getRut() + "</li>\n" +
                                   "<li>Dirección: " + temporaryPass.getAddress() + "</li>\n</ul>" +
                                   "<li>Mensaje enviado a través de Comisaría Virtual\n", 
                                   "text/html");        
        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);
        msg.setContent(multipart);
        Transport.send(msg);
    }
}