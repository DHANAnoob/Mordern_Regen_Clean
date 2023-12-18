import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iv',
  templateUrl: './iv.component.html',
  styleUrls: ['./iv.component.scss']
})
export class IvComponent {
  faq: any = [];
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {
    this.faq = [
      {
        id: 1,
        question: '1.What is IV Nutritional Therapy?',
        answer: "It's a treatment that bypasses the digestive system and delivers nutrients directly into your bloodstream through an IV drip.",
        expand: false
      },
      {
        id: 2,
        question: '2.What are the potential benefits of IV Nutritional Therapy?',
        answer: "Some reported benefits include boosted immunity, reduced anxiety, and faster recovery times, but research is ongoing.",
        expand: false
      },
      {
        id: 3,
        question: '3.What are the different types of IV kits and medications available?',
        answer:`There are various kits like the "Myers' Cocktail" and individual medications like vitamin C and magnesium. Choosing the right option depends on your needs.`,
        expand: false
      },
      {
        id: 4,
        question: '4.Is IV Nutritional Therapy safe?',
        answer: "While generally safe, it's crucial to receive it under the supervision of a qualified healthcare professional to minimize risks.",
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
  debugger
  item.expand = !item.expand;
}
}
