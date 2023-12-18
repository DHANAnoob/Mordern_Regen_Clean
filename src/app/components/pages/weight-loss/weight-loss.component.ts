import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-weight-loss',
  templateUrl: './weight-loss.component.html',
  styleUrls: ['./weight-loss.component.scss']
})
export class WeightLossComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {



    this.faq = [
      {
        id: 1,
        question: '1. How does Semaglutide Injection benefit my health?',
        answer: 'Semaglutide Injection not only aids in weight loss but also contributes to improved health by reducing blood sugar levels, enhancing lipid profiles, lowering blood pressure, and decreasing markers of inflammation and oxidative stress.',
        expand: false
      },
      {
        id: 2,
        question: '2. How does Semaglutide work?',
        answer: "Semaglutide is administered as a once-a-week subcutaneous injection and is often combined with amino acids, minerals, and IV vitamins to boost energy and promote fat burning.",
        expand: false
      },
      {
        id: 3,
        question: '3. What are the primary benefits of Semaglutide?',
        answer: 'Semaglutide offers benefits like controlled blood sugar, reduced body weight, suppressed appetite, enhanced insulin production, and a sensation of fullness in the brain ',
        expand: false
      },
      {
        id: 4,
        question: '4. What is the typical rate of weight loss with Semaglutide?',
        answer: "Semaglutide can lead to a gradual weight loss of approximately 1-2 pounds per week, depending on individual response and adherence to dietary habits",
        expand: false
      },
      {
        id: 5,
        question: '5. Are there any side effects associated with Semaglutide?',
        answer: 'Common side effects include nausea, vomiting, diarrhea, abdominal pain, and constipation. Your healthcare provider can provide more information on potential side effects.',
        expand: false
      },
      {
        id: 6,
        question: '6. Is Semaglutide suitable for everyone?',
        answer: "Semaglutide may not be suitable for individuals with a history of certain medical conditions or allergies. It's essential to discuss your medical history and any preexisting conditions with your healthcare provider before starting the treatment",
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
