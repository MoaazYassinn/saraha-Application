import nodemailer from "nodemailer"

import { template } from "./template.js";
import Jwt from "jsonwebtoken";

export const sendEmails=async(email)=>{

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "willknowyou578@gmail.com",
          pass: "calrfvbwjtsmhnju",
        },
      });
       let token=Jwt.sign({email},"myNameIsMoaaz")

      const info = await transporter.sendMail({
        from: '"YouWillKnow" <willknowyou578@gmail.com>', 
        to: email, // list of receivers
        subject: "Forgive me", // Subject line // plain text body
        html:template(token), // html body
      });
    
      console.log("Message sent: %s", info.messageId);
}