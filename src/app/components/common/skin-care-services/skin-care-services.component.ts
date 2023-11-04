import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skin-care-services',
  templateUrl: './skin-care-services.component.html',
  styleUrls: ['./skin-care-services.component.scss']
})
export class SkinCareServicesComponent implements OnInit {

  skin: boolean = true;
  ortho: boolean = false;
  tissueRegen :boolean = false;
  sexualHealth:boolean = false;

  constructor() { }
 
  trigger(){
    this.skin = true;
    this.ortho = false;
    this.tissueRegen = false;
    this.sexualHealth = false;
  }
  newTrigger(){
    this.skin = false;
    this.ortho = true;
    this.tissueRegen = false;
    this.sexualHealth = false;
  }
  newTrigger1(){
    this.skin = false;
    this.ortho = false;
    this.tissueRegen = true;
    this.sexualHealth = false;
  }
  newTrigger2(){
    this.skin = false;
    this.ortho = false;
    this.tissueRegen = false;
    this.sexualHealth = true;
  }
  ngOnInit(): void {
  }

}
