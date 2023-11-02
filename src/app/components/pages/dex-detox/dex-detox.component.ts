import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dex-detox',
  templateUrl: './dex-detox.component.html',
  styleUrls: ['./dex-detox.component.scss']
})
export class DexDetoxComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {

    this.faq = [
      {
        id: 1,
        question: '1.Am I the Right Candidate',
        answer: "PRP is ideal for those seeking a non-surgical neck rejuvenation, but may not be suitable for individuals with active cancer, regular smokers, those with unrealistic expectations, hemophiliacs, compromised immune systems, or those on high-dose anticoagulant therapy",
        expand: false
      },
      {
        id: 2,
        question: '2. What after my Treatment?',
        answer: "Minimal swelling, redness, or bruising may occur post-treatment, with full effects usually visible after around four months",
        expand: false
      },
      {
        id: 3,
        question: '3. How Safe is the DexDetox Treatment for the Neck? ',
        answer: "PRP treatment is safe, with minimal risk due to its origin from the patient's body",
        expand: false
      },
      {
        id: 4,
        question: '4. What Makes PRP Distinct in Neck Treatments?',
        answer: "PRP provides a natural, richer, and prolonged rejuvenation, especially due to its growth factors, ensuring optimized outcomes",
        expand: false
      },
      {
        id: 5,
        question: '5. Is There a Significant Recovery Period with the DexDetox Treatment?',
        answer: "Typically, there's no significant recovery period. Minor symptoms such as slight redness or swelling should resolve within a few days",
        expand: false
      },
      {
        id: 6,
        question: '6. How Long Do the Results Last?',
        answer: 'The results of PRP treatments are enduring, with effects typically lasting for an extended period, and maintenance treatments can be scheduled as needed to prolong the benefits',
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
