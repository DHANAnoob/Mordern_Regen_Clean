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
    checkboxChecked: boolean = false;
    constructor(
        public router: Router, private fb: FormBuilder
    ) {
    }

    ngOnInit(): void{
        this.appointmentForm = this.fb.group({
            treatment: [null, [Validators.required]],
            osteoOptions: [null, [Validators.required]],
            spaOptions:[null, [Validators.required]],
            firstname:[null, [Validators.required]],
            lastname:[null, [Validators.required]],
            email:[null, [Validators.email,Validators.required]],
            phonenumber:[null, [Validators.required]],
            decision:[null, [Validators.required]],
            message:[null, [Validators.required]],
            check: [false, [Validators.requiredTrue]], 
        });

    }
    onCheckboxChange() {
        this.checkboxChecked = !this.checkboxChecked;
        // Reset the checkbox validation error when the checkbox is checked
        if (this.checkboxChecked) {
          this.appointmentForm.get('check')?.setErrors(null);
        }
      }
    async send() {
        if (this.appointmentForm.valid && this.checkboxChecked){
            emailjs.init('CP5q9y33rTigEtgyk')
            let response = await emailjs.send("service_8mdxj6r", "template_8lmplcq", {
              firstname: this.appointmentForm.value.firstname,
              message: this.appointmentForm.value.message,
              email: this.appointmentForm.value.email,
              phonenumber: this.appointmentForm.value.phonenumber,
    
              lastname:this.appointmentForm.value.lastname,
              treatment:this.appointmentForm.value.treatment,
              decision:this.appointmentForm.value.decision,
              osteoOptions:this.appointmentForm.value.osteoOptions,
              spaOptions:this.appointmentForm.value.spaOptions,
        
            });
            console.log(response);
            console.log(this.appointmentForm.value.firstname);
            console.log(this.appointmentForm.value.phonenumber);
            console.log(this.appointmentForm.value.primeconcern);
            
        
            alert('Message sent successfully');
            this.appointmentForm.reset();
        }else {
            if (!this.checkboxChecked) {
              this.appointmentForm.get('check')?.setErrors({ required: true });
            }
            alert('Form is not valid. Please check your inputs.');
          }
       
    
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
    
    isSoftwaveSelected() {
        const treatmentControl = this.appointmentForm.get('treatment');
        return treatmentControl ? treatmentControl.value === 'softWave' : false;
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