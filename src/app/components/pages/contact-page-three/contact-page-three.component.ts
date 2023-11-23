import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import emailjs, { send } from '@emailjs/browser';


@Component({
  selector: 'app-contact-page-three',
  templateUrl: './contact-page-three.component.html',
  styleUrls: ['./contact-page-three.component.scss']
})
export class ContactPageThreeComponent {


  reactiveForms: FormGroup = this.fb.group({
    firstname: "",
    phonenumber: "",
    email: "",
    primeconcern:"",
    message: "",
    lastname:"",
    treatmentintrest:"",
    decision:"",
  })

  checkboxChecked: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForms = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phonenumber: [null, [Validators.required]],
      primeconcern: [null, [Validators.required]],
      treatmentintrest: [null, [Validators.required]],
      decision: [null, [Validators.required]],
      message: [null, [Validators.required]],
      check: [false, [Validators.requiredTrue]], 
    });
  }
  onCheckboxChange() {
    this.checkboxChecked = !this.checkboxChecked;
    // Reset the checkbox validation error when the checkbox is checked
    if (this.checkboxChecked) {
      this.reactiveForms.get('check')?.setErrors(null);
    }
  }
  
  // async send() {
  //   emailjs.init('CP5q9y33rTigEtgyk')
  //   let response = await emailjs.send("service_8mdxj6r", "template_rlx7mgg", {
  //     firstname: this.reactiveForms.value.firstname,
  //     message: this.reactiveForms.value.message,
  //     email: this.reactiveForms.value.email,
  //     phonenumber: this.reactiveForms.value.phonenumber,
  //     primeconcern: this.reactiveForms.value.primeconcern,
  //     lastname:this.reactiveForms.value.lastname,
  //     treatmentintrest:this.reactiveForms.value.treatmentintrest,
  //     decision:this.reactiveForms.value.decision,

  //   });
  //   console.log(response);
  //   console.log(this.reactiveForms.value.firstname);
  //   console.log(this.reactiveForms.value.phonenumber);
  //   console.log(this.reactiveForms.value.primeconcern);
  //   console.log(this.reactiveForms);
    

  //   alert('Message sent successfully');
  //   this.reactiveForms.reset();

  // }
  async send() {
    if (this.reactiveForms.valid && this.checkboxChecked) {
      emailjs.init('CP5q9y33rTigEtgyk'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
      
      let response = await emailjs.send("service_8mdxj6r", "template_rlx7mgg", {
        firstname: this.reactiveForms.value.firstname,
        message: this.reactiveForms.value.message,
        email: this.reactiveForms.value.email,
        phonenumber: this.reactiveForms.value.phonenumber,
        primeconcern: this.reactiveForms.value.primeconcern,
        lastname: this.reactiveForms.value.lastname,
        treatmentintrest: this.reactiveForms.value.treatmentintrest,
        decision: this.reactiveForms.value.decision,
      });

      console.log(response);
      console.log(this.reactiveForms.value.firstname);
      console.log(this.reactiveForms.value.phonenumber);
      console.log(this.reactiveForms.value.primeconcern);
      console.log(this.reactiveForms);

      alert('Message sent successfully');
      this.reactiveForms.reset();
    } else {
      if (!this.checkboxChecked) {
        this.reactiveForms.get('check')?.setErrors({ required: true });
      }
      alert('Form is not valid. Please check your inputs.');
    }
  }
  }