import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ad-campaign',
  imports: [CommonModule,
    Header,
    Footer,
    RouterOutlet
  ],
  templateUrl: './ad-campaign.html',
  styleUrl: './ad-campaign.css',
})
export class AdCampaign {
  portfolioItems = [1, 2, 3, 4, 5, 6];

  pricingTiers = [
    {
      name: 'Traffic Heist',
      price: '₹25k',
      period: 'per month',
      features: [
        '10 premium ad creatives/month',
        'Basic motion graphics',
        '2 A/B test variants',
        'Weekly performance review'
      ],
      buttonText: 'START NOW',
      buttonClass: 'btn-secondary',
      highlighted: false,
      accentColor: 'emerald'
    },
    {
      name: 'ROAS Reactor',
      price: '₹55k',
      period: 'per month',
      features: [
        '25 high-converting creatives/month',
        'Advanced VFX & 3D renders',
        '5+ A/B test variants per creative',
        'Full-funnel campaign strategy',
        'Dedicated creative strategist'
      ],
      buttonText: 'GET STARTED',
      buttonClass: 'btn-primary',
      highlighted: true,
      accentColor: 'emerald'
    },
    {
      name: 'Market Monopoly',
      price: '₹90k',
      period: 'per month',
      features: [
        'Unlimited premium creatives',
        'Hollywood-grade ***',
        'Aggressive multi-variant testing',
        'Complete omnichannel domination',
        'Priority support & weekly calls'
      ],
      buttonText: 'GO PREMIUM',
      buttonClass: 'btn-cyan',
      highlighted: false,
      accentColor: 'cyan'
    }
  ];

  faqItems = [
    {
      id: 'faq-1',
      question: "What's your pricing model?",
      answer: "No retainers, no hidden fees. You pay a flat monthly rate based on creative volume and complexity. We're incentivized to make your ads print money - when you win, we win.",
      expanded: false
    },
    {
      id: 'faq-2',
      question: 'How is this different from other agencies?',
      answer: "We're creative-first, not media-buying-first. While other agencies recycle templates, we build custom VFX and motion graphics that actually stop thumbs. Our entire system is built around creative testing velocity - we ship 3-5x more variants than traditional agencies.",
      expanded: false
    },
    {
      id: 'faq-3',
      question: 'How fast can we launch?',
      answer: "First batch of creatives ships within 7 days. Full campaigns live within 14 days. We move fast because speed = data = better decisions. The faster we test, the faster we find your winning formula.",
      expanded: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].expanded = !this.faqItems[index].expanded;
  }

  scrollToPlans(): void {
    const element = document.getElementById('pricing-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  openAuditForm(): void {
    console.log('Opening audit form...');
    // Add your audit form logic here
  }

  openStrategyCall(): void {
    console.log('Opening strategy call booking...');
    // Add your strategy call booking logic here
  }
}
