import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-prp-facial',
  templateUrl: './prp-facial.component.html',
  styleUrls: ['./prp-facial.component.scss']
})
export class PrpFacialComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1. Is the PRP Facial procedure painful?',
        answer: 'PRP Facials are typically well-tolerated, and a topical anesthetic can be applied to minimize discomfort during the procedure.',
        expand: false
      },
      {
        id: 2,
        question: '2. How long does a PRP Facial session take?',
        answer: "A typical PRP Facial session lasts about an hour, offering a quick and convenient treatment option.",
        expand: false
      },
      {
        id: 3,
        question: '3. How many PRP Facial sessions are recommended for optimal results?',
        answer: "Most individuals find that a single annual session is sufficient to maintain enhanced skin texture and tone, but personalized recommendations may vary.",
        expand: false
      },
      {
        id: 4,
        question: '4. Are there any notable side effects associated with PRP Facials?',
        answer: "Adverse reactions are minimal, as PRP Facials capitalize on your body's natural healing abilities, reducing the likelihood of complications .",
        expand: false
      },
      {
        id: 5,
        question: '5. Can PRP Facials be used for specific skin concerns like fine lines and wrinkles?',
        answer: 'Yes, PRP Facials are effective in addressing fine lines and wrinkles, as they stimulate collagen synthesis, promoting skin rejuvenation.',
        expand: false
      },
      {
        id: 6,
        question: '6. Is there any downtime required after a PRP Facial session?',
        answer: "There's minimal downtime associated with PRP Facials, and you can typically resume your regular activities shortly after the treatment",
        expand: false
      }
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
