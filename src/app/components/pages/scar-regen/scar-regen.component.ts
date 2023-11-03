import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-scar-regen',
  templateUrl: './scar-regen.component.html',
  styleUrls: ['./scar-regen.component.scss']
})
export class ScarRegenComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1.What indications benefit from Tixel treatment?',
        answer: "Tixel treatment is ideal for addressing acne scars, stretch marks, fine lines, wrinkles, and active acne",
        expand: false
      },
      {
        id: 2,
        question: '2.What is the post-care treatment?',
        answer: "Patients may experience mild redness, swelling, and tiny scabs lasting up to 72 hours post-treatment. Avoid vigorous physical activity, hot showers, and direct sun exposure for the first 24 hours.",
        expand: false
      },
      {
        id: 3,
        question: '3.How often are treatments repeated? When can the results be seen?',
        answer: "Tixel treatment is typically repeated every 4 to 6 weeks. Full results are visible after completing the sixth session, but significant improvement can be seen even after a couple of treatments.",
        expand: false
      },
      {
        id: 4,
        question: '4.Is Tixel safe?',
        answer: "Yes, Tixel is a safe, non-invasive procedure with minimal risk of scarring or infection. It's pain-free and suitable for individuals who may be sensitive to pain or prefer a gentler approach. The procedure has no downtime, and patients can typically return to their regular activities after treatment.",
        expand: false
      },
    ]

  }
  isOpen = false;
  blogSlides: OwlOptions = {
    nav: true,
    margin: 25,
    loop: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>'
    ],
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 2
            },
            695: {
                items: 2
            },
            935: {
                items: 2
            },
            1115: {
                items: 3
            }
        }
    }
  openPopup(): void {
    this.isOpen = true;
  }
  closePopup(): void {
    this.isOpen = false;
  }
  expand(item: any) {
    debugger
    item.expand = !item.expand;
  }
}
