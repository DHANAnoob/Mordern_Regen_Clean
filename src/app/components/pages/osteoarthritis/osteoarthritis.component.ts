import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-osteoarthritis',
  templateUrl: './osteoarthritis.component.html',
  styleUrls: ['./osteoarthritis.component.scss']
})
export class OsteoarthritisComponent implements OnInit{
  
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1.Is the treatment painful?',
        answer: "Our advanced approach prioritizes patient comfort, minimizing discomfort during the osteoarthritis treatment process.",
        expand: false
      },
      {
        id: 2,
        question: '2.How long does the treatment take?',
        answer: "Treatment duration varies, but our efficient procedures aim to provide timely relief and promote a swift recovery.",
        expand: false
      },
      {
        id: 3,
        question: '3.Are there any potential side effects?',
        answer:`The carefully curated combination minimizes adverse effects, ensuring effective osteoarthritis relief with a focus on patient well-being.`,
        expand: false
      },
      {
        id: 4,
        question: '4.Will I need multiple sessions?',
        answer: "Treatment plans are personalized, and the number of sessions depends on the severity of osteoarthritis; our goal is to optimize results.",
        expand: false
      },
      {
        id: 5,
        question: '5.When can I expect to see results?',
        answer: "Rapid recovery is prioritized, and improvements in pain reduction and joint function are typically noticeable within a reasonable timeframe.",
        expand: false
      },
      {
        id: 6,
        question: '6.Is the treatment suitable for all joints?',
        answer: "Yes, whether it's your knee, shoulder, or another joint, our comprehensive approach covers various joints to address osteoarthritis effectively.",
        expand: false
      },
    ]

  }
// Video Popup
isOpen = false;
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
