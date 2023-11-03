import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-meet-our-team',
  templateUrl: './meet-our-team.component.html',
  styleUrls: ['./meet-our-team.component.scss']
})
export class MeetOurTeamComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1.What causes stretch marks?',
        answer: "Stretch marks develop due to rapid skin stretching during growth spurts, pregnancy, weight changes, and are a common part of life.",
        expand: false
      },
      {
        id: 2,
        question: '2.How does PRP treatment work for stretch marks?',
        answer: "PRP stimulates collagen and elastin production in your skin, enhancing the healing process. It's a safe and minimally invasive procedure",
        expand: false
      },
      {
        id: 3,
        question: '3.Is PRP treatment for stretch marks safe?',
        answer: "Yes, PRP treatments use your own blood, eliminating allergy risks. The procedure is performed by qualified nurses in a hygienic setting",
        expand: false
      },
      {
        id: 4,
        question: '4.What skin conditions can PRP skin needling address?',
        answer: "PRP skin needling treats a range of conditions, including stretch marks, wrinkles, acne scarring, and uneven skin tone.",
        expand: false
      },
      {
        id: 5,
        question: "5.What's the recovery time after PRP skin needling for stretch marks?",
        answer: "Recovery is quick, with minimal discomfort and redness that fades shortly after treatment",
        expand: false
      },
      {
        id: 6,
        question: '6.How many PRP sessions are recommended for optimal results?',
        answer: "A series of 3-4 treatments, spaced 4-6 weeks apart, is often recommended for the best results, with improvements seen even after a couple of sessions.",
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
