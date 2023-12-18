import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chemical-peel',
  templateUrl: './chemical-peel.component.html',
  styleUrls: ['./chemical-peel.component.scss']
})
export class ChemicalPeelComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  beforeAfterSlides: OwlOptions = {
    nav: true,
    margin: 25,
    loop: true,
    dots: false,
        center: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
            '<i class="flaticon-015-left-arrow"></i>',
            '<i class="flaticon-014-right-arrow"></i>'
    ],
        responsive: {
            0: {
                items: 2
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
            1200: {
                items: 2
            }
        }
    }
  ngOnInit(): void {



    this.faq = [
      {
        id: 1,
        question: '1.How does it compare to other peels?',
        answer: "The Perfect Derma Peel combines powerful ingredients with effective acids to deliver results after one treatment, including lifting fine lines and reducing hyperpigmentation. It's non-invasive and virtually painless with minimal peeling.",
        expand: false
      },
      {
        id: 2,
        question: '2.How many treatments are needed?',
        answer: "One treatment improves overall skin tone, but multiple treatments (2-3, once every 4 weeks) may be necessary for severe conditions like Melasma or active acne.",
        expand: false
      },
      {
        id: 3,
        question: '3. How long will my results last?',
        answer: "Results last as long as you maintain proper skincare with recommended products. 2-4 treatments per year are recommended for maintenance.",
        expand: false
      },
      {
        id: 4,
        question: '4.What skin types respond well?',
        answer: "All skin types (Fitzpatrick 1-6) and ethnicities can be treated and benefit.",
        expand: false
      },
      {
        id: 5,
        question: '5.Is preconditioning required?',
        answer: 'No preconditioning is needed, except stopping Accutane usage 4 months prior.',
        expand: false
      },
      {
        id: 6,
        question: '6.Does it burn?',
        answer: "You may feel slight stinging or tingling that subsides quickly. Numbing occurs after the first application.",
        expand: false
      },
      {
        id: 7,
        question: '7.How long does application take?',
        answer: "The application takes only 15 minutes.",
        expand: false
      },
      {
        id: 8,
        question: '8.How severe is the peeling? ',
        answer: "Peeling is mainly thin sheets of skin starting around day 3 and generally complete by day 6 or 7.",
        expand: false
      },
      {
        id: 9,
        question: '9.What will I look like during and after the treatment? ',
        answer: "The skin will appear red or darker immediately after, and peeling begins on day 3. The Perfect Derma Moisturizer can reduce peeling visibility.",
        expand: false
      },
      {
        id: 10,
        question: '10.Can I resume my daily routine? ',
        answer: " Normal activities can be resumed immediately, but avoid heavy exercise and excessive sweating during peeling.",
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
    item.expand = !item.expand;
  }
}
