import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-micro-needling',
  templateUrl: './micro-needling.component.html',
  styleUrls: ['./micro-needling.component.scss']
})
export class MicroNeedlingComponent{
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {



    this.faq = [
      {
        id: 1,
        question: '1. Is Microneedling the Right Choice for You',
        answer: 'deal candidates for microneedling are non-pregnant, non-smokers, without recent radiation treatment, does not have any other skin conditions, and are with realistic outcome expectations.',
        expand: false
      },
      {
        id: 2,
        question: '2. Why Opt for Microneedling?',
        answer: "Microneedling enhances skin texture, reduces wrinkles, and softens scars, resulting in radiant skin with renewed vitality",
        expand: false
      },
      {
        id: 3,
        question: '3. What Are the Target Areas for Microneedling?',
        answer: ' Microneedling can be performed on the face, neck, chest, arms, and even hands, offering versatility for various body areas',
        expand: false
      },
      {
        id: 4,
        question: '4. What Is the Recovery Like, and Are There Any Side Effects?',
        answer: "Post-treatment, patients may experience mild redness, temporary swelling, or peeling, similar to a mild sunburn, which typically subsides within a few days. Post-treatment care instructions should be followed.",
        expand: false
      },
      {
        id: 5,
        question: '5. How Many Treatments Should I Get?',
        answer: 'On average, three to six sessions, spaced 4-6 weeks apart, are suggested for best results. A tailored treatment plan will be discussed during your consultation',
        expand: false
      },
      {
        id: 6,
        question: '6. Is Microneedling Painful?',
        answer: ' Microneedling is usually well-tolerated, and a topical anesthetic can be applied to minimize discomfort during the procedure.',
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
