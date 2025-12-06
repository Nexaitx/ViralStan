import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]',
  standalone: true,
})
export class ScrollTriggerDirective implements OnInit, OnDestroy {
  @Input() scrollTriggerClass = 'in-view';
  @Input() scrollTriggerThreshold = 0.1; // Trigger when 10% of element is visible

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const options = {
        threshold: this.scrollTriggerThreshold,
        rootMargin: '0px 0px -50px 0px', // Trigger a bit before fully in view
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element enters viewport
            this.el.nativeElement.classList.add(this.scrollTriggerClass);
            // Unobserve after animation triggers (optional: remove to re-trigger on scroll)
            if (this.observer) {
              this.observer.unobserve(entry.target);
            }
          }
        });
      }, options);

      this.observer.observe(this.el.nativeElement);
    } else {
      // Fallback: add class immediately if IntersectionObserver not supported
      this.el.nativeElement.classList.add(this.scrollTriggerClass);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
