import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [Header,
    Footer,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, AfterViewInit {
  @ViewChild('orb1') orb1!: ElementRef;
  @ViewChild('orb2') orb2!: ElementRef;
  @ViewChild('orb3') orb3!: ElementRef;

  services = [
    {
      title: 'Social Media Management',
      tagline: 'Turn Scrolls Into Fans.',
      desc: "We don't chase trends.<br>We build brand presence that compounds.",
      features: ['Platform-specific strategies', 'Content calendars that convert', 'Community growth & engagement', 'Reels, shorts & viral formats'],
      ctaText: 'Grow Your Social Media'
    },
    {
      title: 'Google & Meta Ads',
      tagline: 'Every Click Accounted For.',
      desc: "Ads aren't an expense — they're an investment when done right.",
      features: ['ROI-focused ad strategies', 'High-converting creatives & copy', 'Funnel-based targeting', 'Continuous optimization & scaling'],
      ctaText: 'Launch High-Performance Ads'
    },
    {
      title: 'VFX / CGI Videos',
      tagline: 'Visuals That Look Unreal — Results That Are Real.',
      desc: "If you want attention in 2025, CGI & VFX are non-negotiable.",
      features: ['Product CGI & brand films', 'Hyper-realistic visual storytelling', 'Perfect for ads & launches', 'Designed to stop the scroll instantly'],
      ctaText: 'Create Cinematic Visuals'
    }
    // ... Add Service 04 and 05 here similarly
  ];

  steps = [
    { icon: '1️⃣', title: 'Understand Your Brand', desc: 'We deep-dive into your goals, audience & market.' },
    { icon: '2️⃣', title: 'Build the Attention Engine', desc: 'Creative + strategy + performance working together.' },
    { icon: '3️⃣', title: 'Execute, Optimize, Scale', desc: 'Data-driven decisions. Real growth.' }
  ];

  clients = ['Brands', 'Startups', 'Influencers', 'Artists & Creators', 'E-commerce & Personal Brands'];

  ngOnInit() {}

  ngAfterViewInit() {
    this.initScrollObserver();
  }

  // Parallax Effect for Orbs
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.pageYOffset;
    if (this.orb1) this.orb1.nativeElement.style.transform = `translateY(${scrolled * 0.5}px)`;
    if (this.orb2) this.orb2.nativeElement.style.transform = `translateY(${scrolled * 0.7}px)`;
    if (this.orb3) this.orb3.nativeElement.style.transform = `translateY(${scrolled * 0.9}px)`;
  }

  initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
