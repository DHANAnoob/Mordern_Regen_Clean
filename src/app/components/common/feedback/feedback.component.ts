import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    feedbackSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
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
                items: 1
            },
            695: {
                items: 2
            },
            935: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    }
    feedbackSlides2: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
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
                items: 1
            },
            695: {
                items: 2
            },
            935: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    }
    feedbackSlides3: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
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
                items: 1
            },
            695: {
                items: 2
            },
            935: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    }
    testimonialsSlides: OwlOptions = {
        items: 1,
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>'
		]
    }

}