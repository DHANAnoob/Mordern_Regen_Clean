import { Component, ViewEncapsulation, ViewChild,OnInit } from '@angular/core';
// import { CarouselAnimationEffect, CarouselComponent } from '@syncfusion/ej2-angular-navigations';
// import { CarouselComponent } from 'angular-bootstrap-md';
// import { MdbCarouselComponent } from 'angular-bootstrap-md';
// import { CarouselComponent } from 'angular-bootstrap-md';
import { OwlOptions } from 'ngx-owl-carousel-o';

// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-homefive-banner',
  templateUrl: './homefive-banner.component.html',
  styleUrls: ['./homefive-banner.component.scss']
})

export class HomefiveBannerComponent implements OnInit {
  
  // constructor(private el: ElementRef) {}

  ngOnInit() {

  }
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
  // ngAfterViewInit() {

  //   this.runCarouselScript();
  // }

  // private runCarouselScript() {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'path-to-your-jquery-bootstrap-script.js'; // Replace with the path to your jQuery Bootstrap script
  //   script.onload = () => {
  //     $(this.el.nativeElement).find('#myCarousel').carousel({
  //       interval: 3000 
  //     });
  //   };

  //   document.head.appendChild(script);
  // }
  

}
