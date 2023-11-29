import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-prf-fillers',
  templateUrl: './prf-fillers.component.html',
  styleUrls: ['./prf-fillers.component.scss']
})
export class PrfFillersComponent {

  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1.Is PRF treatment safe?',
        answer: 'Yes, PRF Fillers are extremely safe due to their autologous nature.',
        expand: false
      },
      {
        id: 2,
        question: '2.How do PRP and PRF differ?',
        answer: "PRF offers more enduring and concentrated results compared to PRP.",
        expand: false
      },
      {
        id: 3,
        question: '3.What is the downtime after PRF treatment?',
        answer: 'Minimal downtime, with transient side effects usually resolving within a few days.',
        expand: false
      },
      {
        id: 4,
        question: '4. Are there adverse reactions to PRF treatment? ',
        answer: "Adverse reactions are minimal thanks to PRF's autologous nature.",
        expand: false
      },
      {
        id: 5,
        question: '5. When do PRF results peak?        ',
        answer: 'PRF results typically peak around four months post-treatment.',
        expand: false
      },
      {
        id: 6,
        question: '6.How long do the results of PRF treatment last?',
        // answer: 'PRF results are enduring, with maintenance treatments available as needed.',
        answer: 'PRF results lasts 6-12 weeks, with maintenance treatment available as needed.',
        expand: false
      }
    ]

  }
  // Video Popup
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
