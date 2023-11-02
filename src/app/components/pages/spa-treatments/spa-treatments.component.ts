import { Component } from '@angular/core';

@Component({
  selector: 'app-spa-treatments',
  templateUrl: './spa-treatments.component.html',
  styleUrls: ['./spa-treatments.component.scss']
})
export class SpaTreatmentsComponent {
  prp: boolean = true;
  beauty: boolean = false;
  cosmetics: boolean = false;
  hairRemoval : boolean = false;
  hairRestoration : boolean = false;
  sexualHealth : boolean = false;
  weightLoss: boolean = false;
  // beauty: boolean = false;

  trigger1(){
    this.prp = true;
    this.beauty = false;
    this.cosmetics = false;
    this.hairRemoval = false;
    this.hairRestoration = false;
    this.sexualHealth = false;
    this.weightLoss = false;
  }
  trigger2(){
    this.prp = false;
    this.beauty = true;
    this.cosmetics = false;
    this.hairRemoval = false;
    this.hairRestoration = false;
    this.sexualHealth = false;
    this.weightLoss = false;
  }
  trigger3(){
    this.prp = false;
    this.beauty = false;
    this.cosmetics = true;
    this.hairRemoval = false;
    this.hairRestoration = false;
    this.sexualHealth = false;
    this.weightLoss = false;
  }
  trigger4(){
    this.prp = false;
    this.beauty = false;
    this.cosmetics = false;
    this.hairRemoval = true;
    this.hairRestoration = false;
    this.sexualHealth = false;
    this.weightLoss = false;
  }
  trigger5(){
    this.prp = false;
    this.beauty = false;
    this.cosmetics = false;
    this.hairRemoval = false;
    this.hairRestoration = true;
    this.sexualHealth = false;
    this.weightLoss = false;
  }
  trigger6(){
    this.prp = false;
    this.beauty = false;
    this.cosmetics = false;
    this.hairRemoval = false;
    this.hairRestoration = false;
    this.sexualHealth = true;
    this.weightLoss = false;
  }
  trigger7(){
    this.prp = false;
    this.beauty = false;
    this.cosmetics = false;
    this.hairRemoval = false;
    this.hairRestoration = false;
    this.sexualHealth = false;
    this.weightLoss = true;
  }
}
