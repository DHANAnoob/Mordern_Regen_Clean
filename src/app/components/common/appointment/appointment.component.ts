import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { send } from '@emailjs/browser';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
    // appointmentForm: FormGroup;
    mytime: Date = new Date();
    appointmentForm: FormGroup = this.fb.group({
        // reply_to: "",
        firstname: "",
        phonenumber: "",
        email: "",
        // primeconcern:"",
        message: "",
        lastname:"",
        osteoOptions:"",
        spaOptions:"",
        treatment:"",
        decision:"",
      })

    constructor(
        public router: Router, private fb: FormBuilder
    ) {
        this.appointmentForm = this.fb.group({
            treatment: ['', Validators.required],
            osteoOptions: [''],
            spaOptions: [''],
            firstname:[''],
            lastname:[''],
            email:[''],
            phonenumber:[''],
            decision:[''],
            message:[''],
        });
    }
    async send() {
        emailjs.init('CP5q9y33rTigEtgyk')
        let response = await emailjs.send("service_8mdxj6r", "template_8lmplcq", {
          firstname: this.appointmentForm.value.firstname,
          message: this.appointmentForm.value.message,
          email: this.appointmentForm.value.email,
          phonenumber: this.appointmentForm.value.phonenumber,
        //   primeconcern: this.appointmentForm.value.primeconcern,
          lastname:this.appointmentForm.value.lastname,
          treatment:this.appointmentForm.value.treatment,
          decision:this.appointmentForm.value.decision,
          osteoOptions:this.appointmentForm.value.osteoOptions,
          spaOptions:this.appointmentForm.value.spaOptions,
          // lastname:this.appointmentForm.value.primeconcern,
    
        });
        console.log(response);
        console.log(this.appointmentForm.value.firstname);
        console.log(this.appointmentForm.value.phonenumber);
        console.log(this.appointmentForm.value.primeconcern);
        
    
        alert('Message sent successfully');
        this.appointmentForm.reset();
    
      }


    // async send() {
    //     emailjs.init('CP5q9y33rTigEtgyk')
    //     let response = await emailjs.send("service_8mdxj6r", "template_rlx7mgg", {
    //       firstname: this.appointmentForm.value.firstname,
    //       message: this.appointmentForm.value.message,
    //       email: this.appointmentForm.value.email,
    //       phonenumber: this.appointmentForm.value.phonenumber,
    //       primeconcern: this.appointmentForm.value.primeconcern,
    //       lastname:this.appointmentForm.value.lastname,
    //       treatmentintrest:this.appointmentForm.value.treatmentintrest,
    //       decision:this.appointmentForm.value.decision,
    //       // lastname:this.appointmentForm.value.primeconcern,
    
    //     });
        
    // ngOnInit(): void { }
    isOsteoSelected() {
        const treatmentControl = this.appointmentForm.get('treatment');
        return treatmentControl ? treatmentControl.value === 'Osteoarthritis Treatment' : false;
    }

    isSpaSelected() {
        const treatmentControl = this.appointmentForm.get('treatment');
        return treatmentControl ? treatmentControl.value === 'Spa Treatment' : false;

    }

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}