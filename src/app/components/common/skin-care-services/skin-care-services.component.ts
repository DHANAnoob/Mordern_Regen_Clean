import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skin-care-services',
  templateUrl: './skin-care-services.component.html',
  styleUrls: ['./skin-care-services.component.scss']
})
export class SkinCareServicesComponent implements OnInit {

  skin: boolean = true;
  ortho: boolean = false;

  constructor() { }
 
  trigger(){
    this.skin = true;
    this.ortho = false;
  }
  newTrigger(){
    this.skin = false;
    this.ortho = true;
  }
  ngOnInit(): void {
  }

}
