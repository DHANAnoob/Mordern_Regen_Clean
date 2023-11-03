import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hair-restoration',
  templateUrl: './hair-restoration.component.html',
  styleUrls: ['./hair-restoration.component.scss']
})
export class HairRestorationComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1.Who Should Opt for PRP Hair Restoration?',
        answer: "PRP is suitable for those in good health seeking fuller hair. Inform our team about your medications. Smoking, bloodthinning meds, or substance misuse may affect eligibility",
        expand: false
      },
      {
        id: 2,
        question: '2.What Are the Target Areas for Hair Restoration?',
        answer: "PRP primarily targets the scalp but can address thinning hair in areas like eyebrows or beard.",
        expand: false
      },
      {
        id: 3,
        question: '3.Post-Treatment Scenario and Possible Side Effects?',
        answer: "Expect mild tenderness, swelling, or redness post-treatment, usually subsiding in 24-48 hours. Possible side effects include slight bruising, itching, or a headache. Avoid exercise, hot showers, and direct sun exposure for the first 24 hours.",
        expand: false
      },
      {
        id: 4,
        question: '4.How Many Sessions for Optimal Results?',
        answer: "Typically, a series of 3-4 treatments, spaced 4-6 weeks apart, is recommended. Maintenance sessions every 6-12 months help sustain the benefits.",
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
