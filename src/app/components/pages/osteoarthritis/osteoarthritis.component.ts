import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-osteoarthritis',
  templateUrl: './osteoarthritis.component.html',
  styleUrls: ['./osteoarthritis.component.scss']
})
export class OsteoarthritisComponent implements OnInit{
  
  constructor(
    public router: Router
) { }

ngOnInit(): void {}

// Video Popup
isOpen = false;
openPopup(): void {
    this.isOpen = true;
}
closePopup(): void {
    this.isOpen = false;
}
}
