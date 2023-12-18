import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.scss']
})
export class AppointmentPageComponent implements AfterViewInit {

  @ViewChild('targetSection', { static: false }) targetSection!: ElementRef;
  // @ViewChild('targetSection', { static: false }) targetSection!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    // if (this.targetSection) {
    //   this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    // }

    // this.route.fragment.subscribe((fragment: string | null) => {
    //   if (fragment === 'targetSection' && this.targetSection) {
    //     this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //   }
    // });


    setTimeout(() => {
      // Check if the targetSection is defined.
      if (this.targetSection) {
        // If it is defined, scroll to the target section smoothly.
        this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }

      // Subscribe to fragment changes in the route.
      this.route.fragment.subscribe((fragment: string | null) => {
        // If the fragment in the route is 'targetSection' and targetSection is defined,
        // scroll to the target section smoothly.
        if (fragment === 'targetSection' && this.targetSection) {
          this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }, 0); // Using a minimal timeout to ensure the content is fully loaded.
  
  }

  scrollToTarget(): void {
    if (this.targetSection) {
      this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment === 'targetSection' && this.targetSection) {
        this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  
  // scrollToTarget(): void {
  //   if (this.targetSection) {
  //     this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }


  // @ViewChild('targetSection', { static: false }) targetSection!: ElementRef;
  // @ViewChild('targetSection', { static: false }) targetSection!: ElementRef;

  // constructor(private route: ActivatedRoute) {}

  // ngAfterViewInit(): void {
  //   this.route.fragment.subscribe((fragment: string | null) => {
  //     if (fragment === 'targetSection' && this.targetSection) {
  //       this.scrollToElement(this.targetSection.nativeElement);
  //     } else if (this.targetSection) {
  //       this.scrollToElement(this.targetSection.nativeElement);
  //     }
  //   });
  // }

  // scrollToElement(element: any): void {
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
}
