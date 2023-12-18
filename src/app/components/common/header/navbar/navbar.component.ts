import { Component, OnInit, HostListener,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


    // @ViewChild('targetSection', { static: false }) targetSection!: ElementRef;
    constructor(
        public router: Router,
    ) { }

    // @ViewChild('targetSection', { static: false }) targetSection!: ElementRef;
  
    // constructor(private route: ActivatedRoute,public router:Router) {}
  
    // ngAfterViewInit(): void {
    // }
  
    // scrollToTarget(): void {
    //   if (this.targetSection) {
    //     this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //   }
  
    //   this.route.fragment.subscribe((fragment: string | null) => {
    //     if (fragment === 'targetSection' && this.targetSection) {
    //       this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   });
    // }

    ngOnInit(): void {}

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    searchClassApplied = false;
    searchToggleClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

}