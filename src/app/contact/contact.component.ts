import { Component } from '@angular/core';
import emailjs , {EmailJSResponseStatus} from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public sendEmail(event :Event){
    event.preventDefault();
    emailjs.sendForm('service_fsttubk' , 'template_jnxvffr' , 
    event.target as HTMLFormElement , '19AMGXmaYxXYEPBLD')
    .then((result : EmailJSResponseStatus) => {
      console.log(result.text)
      alert("Email Sent Successfully ")
    } , (err) => {
      console.log(err.text)
    })
  }

}
