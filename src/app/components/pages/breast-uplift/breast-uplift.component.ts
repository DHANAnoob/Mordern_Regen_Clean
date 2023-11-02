import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-breast-uplift',
  templateUrl: './breast-uplift.component.html',
  styleUrls: ['./breast-uplift.component.scss']
})
export class BreastUpliftComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1. How Does PRP Help with Breast Size and Shape?',
        answer: "PRP's growth factors promote healing, collagen production, elastin production, new fatty tissue, and blood vessel growth, enhancing breast size, shape, skin quality, and overall appearance.",
        expand: false
      },
      {
        id: 2,
        question: '2. What is the Role of PRP in the PRP Breast Lift Procedure?',
        answer: "PRP, derived from the patient's blood, is expertly injected into specific breast areas, stimulating collagen production, enhancing firmness and shape naturally.",
        expand: false
      },
      {
        id: 3,
        question: '3. What Can I Expect After the Treatment?',
        answer: "Post-treatment, slight swelling, redness, or minimal bruising around the injection sites might be observed. Given the nature of PRP, significant complications are uncommon. Maximum results are typically visible around four months after the treatment.",
        expand: false
      },
      {
        id: 4,
        question: '4. What are the Advantages of PRP for Breast Enhancement?',
        answer: "PRP offers natural uplift, safety, flexibility, longevity, minimal risks, and improved skin quality in comparison to traditional fillers.",
        expand: false
      },
      {
        id: 5,
        question: '5. Is the PRP Breast Lift a Surgical Procedure?',
        answer: "No, the PRP Breast Lift is non-surgical, utilizing your body's natural regenerative capabilities",
        expand: false
      },
      {
        id: 6,
        question: '6. Who is an Ideal Candidate for the PRP Breast Lift?',
        answer: "Individuals looking to enhance breast size, shape, and skin quality can consider the PRP Breast Lift, which is tailored to address various concerns while minimizing risks",
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
