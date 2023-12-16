import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.scss']
})
export class AppointmentPageComponent implements AfterViewInit {

  @ViewChild('targetSection', { static: false }) targetSection!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    // Additional logic after the view has been initialized
  }

  scrollToTarget(): void {
    if (this.targetSection) {
      this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
