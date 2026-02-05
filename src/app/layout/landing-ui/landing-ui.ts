import { Component } from '@angular/core';
import { Header } from '../header/header';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-ui',
  imports: [Header,
    MatTabsModule,
    CommonModule
  ],
  templateUrl: './landing-ui.html',
  styleUrl: './landing-ui.css',
})
export class LandingUi {
  lotsOfTabs: string[] = [
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
    'Service 5',
    'Service 6',
    'Service 7',
    'Service 8',
    'Service 9',
    'Service 10'
  ];

  reports = [
    { title: "Women's Wear Market Trends Report", category: 'Ecommerce', image: 'assets/womens-wear.jpg' },
    { title: "Hotel Industry Market Trends Report", category: 'Hospitality', image: 'assets/hotel.jpg' },
    { title: "Mutual Funds Market Trends Report", category: 'Investment', image: 'assets/mutual-funds.jpg' }
  ];

  // FAQ Data
  faqs = [
    {
      question: 'What can Techmagnate SEO service do for my business in Kolkata?',
      answer: 'As a top SEO company in Kolkata, Techmagnate helps your business rank higher on Google, attract more local customers, and increase conversions.',
      isOpen: true
    },
    { question: 'How does Techmagnate’s SEO strategy differ from other agencies in Delhi?', answer: '...', isOpen: false },
    { question: 'Does Techmagnate offer AI-driven or LLM-optimized SEO solutions?', answer: '...', isOpen: false },
    { question: 'What are the top SEO trends businesses in Delhi should focus on?', answer: '...', isOpen: false }
  ];

  newsItems = [
    {
      title: 'Techmagnate Introduces Agentic AI Digital Marketing Services',
      source: 'Social Samosa',
      date: 'Jan 16, 2026',
      image: 'assets/img/news-agentic-ai.jpg',
      link: '#'
    },
    {
      title: 'Techmagnate Appoints Ajaz Mirza as Vice President, Digital Operations',
      source: 'Techmagnate Press',
      date: 'Jan 16, 2026',
      image: 'assets/img/news-appointment.jpg',
      link: '#'
    },
  ];

  featuredLogos = [
    { name: 'Business Standard', src: 'assets/img/logos/business-standard.png' },
    { name: 'Deccan Herald', src: 'assets/img/logos/deccan-herald.png' },
    { name: 'Financial Express', src: 'assets/img/logos/financial-express.png' },
    { name: 'Social Samosa', src: 'assets/img/logos/social-samosa.png' },
    { name: 'The Hans India', src: 'assets/img/logos/hans-india.png' }
  ];
  officeInfo = {
    city: 'Delhi',
    type: 'Corporate Office',
    address: 'A-24/8, 1st Floor, Rathi Tower, NH-19, Mohan Cooperative Industrial Estate, New Delhi, 110044',
    email: 'enquiry@techmagnate.com',
    salesPhone: '+91-9910308266',
    hrEmail: 'jobs@techmagnate.com'
  };

  services = ['SEO Services', 'PPC Advertising', 'Content Marketing', 'Social Media'];

  onSubmit() {
    console.log('Form Submitted');
  }
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
