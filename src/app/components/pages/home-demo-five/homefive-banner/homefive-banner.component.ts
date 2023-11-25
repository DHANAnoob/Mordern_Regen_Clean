import {Component, ElementRef, OnInit, QueryList, ViewChildren  } from '@angular/core';
// import { CarouselAnimationEffect, CarouselComponent } from '@syncfusion/ej2-angular-navigations';
// import { CarouselComponent } from 'angular-bootstrap-md';
// import { MdbCarouselComponent } from 'angular-bootstrap-md';
// import { CarouselComponent } from 'angular-bootstrap-md';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { CarouselModule } from 'angular-bootstrap-md';
import { CarouselConfig } from 'angular-bootstrap-md';

// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-homefive-banner',
  templateUrl: './homefive-banner.component.html',
  styleUrls: ['./homefive-banner.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})

export class HomefiveBannerComponent implements OnInit {
  
  slides = [
    {
      image: '../../../../../assets/images/banner/Contact Us.png',
      alt: 'Slide 1',
      title: 'Slide 1 Title',
      description: 'Description for Slide 1.'
    },
    {
      image: '../../../../../assets/images/banner/Appointment.png',
      alt: 'Slide 2',
      title: 'Slide 2 Title',
      description: 'Description for Slide 2.'
    },
    // Add more slides as needed
  ];

  currentSlide = this.slides[0];
  private interval: any;
  constructor() { }


  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  
  private startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }
  private stopCarousel() {
    clearInterval(this.interval);
  }

  nextSlide() {
    const currentIndex = this.slides.indexOf(this.currentSlide);
    const nextIndex = (currentIndex + 1) % this.slides.length;
    this.currentSlide = this.slides[nextIndex];
  }

  prevSlide() {
    const currentIndex = this.slides.indexOf(this.currentSlide);
    const prevIndex = (currentIndex - 1 + this.slides.length) % this.slides.length;
    this.currentSlide = this.slides[prevIndex];
  }

  // ----------------------
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
