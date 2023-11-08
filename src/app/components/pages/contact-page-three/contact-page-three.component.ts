import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import emailjs, { send } from '@emailjs/browser'

@Component({
  selector: 'app-contact-page-three',
  templateUrl: './contact-page-three.component.html',
  styleUrls: ['./contact-page-three.component.scss']
})
export class ContactPageThreeComponent {


  reactiveForms: FormGroup = this.fb.group({
    reply_to: "jdhanasekar1999@gmail.com",
    // firstname: "",
    // phonenumber: "",
    // email: "",
    // primeconcern: "",
    // message:"",
    firstname: "",
    phonenumber: "",
    email: "",
    primeconcern:"",
    message: "",
  })
  constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.reactiveForms = new FormGroup({
  //     firstname: new FormControl(null, [Validators.required]),
  //     lastname: new FormControl(null, [Validators.required]),
  //     email: new FormControl(null , [Validators.email,Validators.required]),
  //     phoneNumber: new FormControl(null , [Validators.email,Validators.required]),
  //     primeConcern:  new FormControl(null, [Validators.required]),
  //     treatmentIntrest: new FormControl(null, [Validators.required]),
  //     decision: new FormControl(null, [Validators.required]),
  //     message: new FormControl(null, [Validators.required]),
  //   });

  // }
  // formSubmitted(){
  //   console.log(this.reactiveForms);
  // }
  async send() {
    emailjs.init('CP5q9y33rTigEtgyk')
    let response = await emailjs.send("service_8mdxj6r", "template_rlx7mgg", {
      firstname: this.reactiveForms.value.firstname,
      // to_name: "dhana",
      // first_name: "dhana",
      message: this.reactiveForms.value.message,
      // reply_to: this.reactiveForms.value.to_name,
      email: this.reactiveForms.value.email,
      phonenumber: this.reactiveForms.value.phonenumber,
      primeconcern: this.reactiveForms.value.primeconcern,
    });
    console.log(response);
    console.log(this.reactiveForms.value.firstname);
    console.log(this.reactiveForms.value.phonenumber);
    console.log(this.reactiveForms.value.primeconcern);
    

    alert('Message sent successfully');
    this.reactiveForms.reset();

  }

  
}
