import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sexual-health',
  templateUrl: './sexual-health.component.html',
  styleUrls: ['./sexual-health.component.scss']
})
export class SexualHealthComponent implements OnInit {
// isExpand:boolean=false;

faq:any=[];
  constructor(
    public router: Router
) { }
  ngOnInit(){
    this.faq=[
      {
      id:1,
      question:'1. How long does the O-Shot procedure take?',
      answer:'The O-Shot takes about 30 minutes in total.',
      expand:false
    },
    {
      id:2,
      question:'2. Is there any recovery time after the O-Shot?',
      answer:"There's no recovery time; you can resume activities immediately.",
      expand:false
    },
    {
      id:3,
      question:'3. How many O-Shot treatments are recommended?',
      answer:'Typically, one to three treatments spaced 8-12 weeks apart are advised for optimal results, with maintenance treatments as needed.',
      expand:false
    },
    {
      id:4,
      question:'4. How soon can I engage in sexual activity after the O-Shot?      ',
      answer:'You can immediately resume sexual activity post-procedure, once the topical numbing agent wears off.      ',
      expand:false
    },
    {
      id:5,
      question:'5. Can the O-Shot help with issues other than sexual wellness?      ',
      answer:'Yes, the O-Shot has shown benefits for urinary incontinence, vaginal dryness, and vulva skin texture improvement.      ',
      expand:false
    },
    {
      id:6,
      question:'6. How often should maintenance treatments be scheduled?',
      answer:'Maintenance treatments are typically recommended every 6-12 months.',
      expand:false
    }
  ]
  }
  isOpen = false;
  openPopup(): void {
      this.isOpen = true;
  }
  closePopup(): void {
      this.isOpen = false;
  }
  expand(item:any){
    debugger
    item.expand=!item.expand;
  }
  
}
