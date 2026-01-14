import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-product',
  imports: [Header,
    Footer,
    RouterOutlet
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    // We ensure this only runs in the browser, not during server-side rendering
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  private initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Select all elements with class 'card' within this component
    const cards = this.el.nativeElement.querySelectorAll('.card');
    cards.forEach((card: HTMLElement) => {
      // Set initial state
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      // Start observing
      observer.observe(card);
    });
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
