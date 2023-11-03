import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hair-removal',
  templateUrl: './hair-removal.component.html',
  styleUrls: ['./hair-removal.component.scss']
})
export class HairRemovalComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1.What differentiates Soprano from other laser hair removal systems?',
        answer: "Soprano's combination of diode laser technology and the SHR method ensures a virtually painless experience while maintaining high effectiveness.",
        expand: false
      },
      {
        id: 2,
        question: '2.How many sessions will I need?',
        answer: "The number of sessions required varies based on individual hair growth cycles and thickness, but multiple sessions are typically recommended for optimal results",
        expand: false
      },
      {
        id: 3,
        question: '3.Is the treatment painful?',
        answer: "Thanks to Soprano's in-built cooling mechanism and gradual heating, most users find the experience comfortable and pain-free.",
        expand: false
      },
      {
        id: 4,
        question: '4.Are there any side effects?',
        answer: "Some may experience temporary redness or minor skin irritation post-treatment, but this usually subsides quickly. It's crucial to follow aftercare advice to minimize potential side effects.",
        expand: false
      },
      {
        id: 5,
        question: '5.Can I undergo treatment if I have a tan?',
        answer: "Yes, one of Soprano's advantages is its suitability for tanned and diverse skin types.",
        expand: false
      },
      {
        id: 6,
        question: '6.How long do the results last?',
        answer: "Results vary based on individual factors, but with regular maintenance sessions, you can expect long-lasting smooth skin",
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
