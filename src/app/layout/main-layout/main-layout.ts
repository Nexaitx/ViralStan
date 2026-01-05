import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Check, X, Eye, Zap, Sparkles, TrendingUp, Users, Clock
} from 'lucide-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  CheckIcon = Check;
  XIcon = X;
  EyeIcon = Eye;
  ZapIcon = Zap;
  SparklesIcon = Sparkles;
  TrendingUpIcon = TrendingUp;
  UsersIcon = Users;
  ClockIcon = Clock;

  videoPath: string = 'assets/brands/';
  youtubeVideoIds = ['https://youtube.com/shorts/IKzuDhmGi2k?si=7TziM6dVB-saMA5y',
    'https://youtube.com/shorts/diaO_a8lmy0?si=MOPMONUrpMiYtohD',
    'https://youtube.com/shorts/u2PC3RUgYgM?si=yUXgcsv99gWsN_sZ',
    'https://youtube.com/shorts/T_2uxb6auTI?si=Cq8Cm33KFFoV2Cfv',
    'https://youtube.com/shorts/7VndJSZgfUY?si=K10RnjRJcP5jjGX9',
    'https://youtube.com/shorts/CG-hq8skVoI?si=qfXOm0xoPo3GCaBw',
    'https://youtube.com/shorts/-VwiLp0cxng?si=mMkaFJT3fVostamM'];

  constructor(private sanitizer: DomSanitizer) { }

  getSafeUrl(id: string): SafeResourceUrl {
    // Note: Use /embed/ even for Shorts IDs
    const url = `https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // nextBrandVideo() {
      extractYouTubeId(url: string): string {
        // Extract video ID from various YouTube URL formats
        if (!url) return '';
      
        // Handle shorts URLs: https://youtube.com/shorts/VIDEO_ID?si=...
        const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
        if (shortsMatch) return shortsMatch[1];
      
        // Handle regular URLs: https://www.youtube.com/watch?v=VIDEO_ID
        const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
        if (watchMatch) return watchMatch[1];
      
        // If it's already just an ID, return it
        return url;
      }

  //   this.currentBrandVideoIndex = (this.currentBrandVideoIndex + 1) % this.youtubeVideoIds.length;
  // }

  // Responsive carousel state
  itemsPerView: number = 1;
  private resizeListener: any;

  get maxStartIndex(): number {
    return Math.max(0, this.youtubeVideoIds.length - this.itemsPerView);
  }

  updateItemsPerView() {
    const w = window.innerWidth;
    console.log('Window width:', w);
    const prev = this.itemsPerView;
    if (w >= 1024) this.itemsPerView = 3; // large
    else if (w >= 768) this.itemsPerView = 2; // medium
    else this.itemsPerView = 1; // small

    // Ensure currentBrandVideoIndex is within range after change
    if (this.currentBrandVideoIndex > this.maxStartIndex) {
      this.currentBrandVideoIndex = this.maxStartIndex;
    }
    return prev !== this.itemsPerView;
  }

  // Move carousel by one start index (not rotating individual visible slots)
  nextBrandVideo() {
    this.currentBrandVideoIndex = this.currentBrandVideoIndex >= this.maxStartIndex
      ? 0
      : this.currentBrandVideoIndex + 1;
  }

  prevBrandVideo() {
    this.currentBrandVideoIndex = this.currentBrandVideoIndex === 0
      ? this.maxStartIndex
      : this.currentBrandVideoIndex - 1;
  }

  // Return transform for inner track
  getTranslate(): string {
    const shiftPercent = (this.currentBrandVideoIndex * (100 / this.itemsPerView));
    return `translateX(-${shiftPercent}%)`;
  }

  goToVideo(index: number) {
    this.currentBrandVideoIndex = index;
  }

  public videoFiles = [
    'ViralstanHomepageVideo001.mp4',
    'ViralstanHomepageVideo002.mp4',
    'ViralstanHomepageVideo003.mp4',
    'ViralstanHomepageVideo004.mp4',
  ];
  currentBrandVideoIndex: number = 0;

  private autoPlayInterval: any;
  private intervalDuration: number = 7000; // 7 seconds per video

  // Brands for the header section
  brands: string[] = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'];

  sparkFeatures = [
    "1 x Hero CGI/VFX Video (30-45 Seconds).",
    "2 x High-End 3D Product Reveal / Fluid Simulations for Reel/ Story.",
    "Professional Color Grading & Sound Design.",
    "Hyper-Realistic 3D Modeling & Texturing",
    "Concept Storyboard & Pre-Visualization",
    "Advanced Sound Design & SFX Sync",
    "Multi-Format Delivery",
    "Full Commercial Usage Rights",
    "2 Rounds of Precision Revisions"
  ];

  surgeFeatures = [
    "Professional Crew & Talent - 1 Model + 1 Cinematographer included.",
    "4 x High-Fashion Reels (Post-Production) with VFX/Motion graphics.",
    "Comprehensive Pre-Production",
    "Studio Rental & Set Design – Includes background setup and lighting.",
    "Bonus: 10 High-Res Professionally retouched Photos for website/catalogue",
    "Creative Direction & On-Set Supervision",
    "Cinematic Color Grading",
    "Licensed Trendy Audio Selection – Copyright-safe music",
    "Full Rights Management"
  ];

  empireFeatures = [
    "Monthly \"Viral Strategy\" Session for Content Calendar",
    "2 x Premium VFX/CGI Reels",
    "6 x Fast-Paced Motion Graphic Edits",
    "Weekly Trend Alerts",
    "Professional Sound Design & Mixing",
    "Dedicated Account Manager",
    "24-Hour Express Turnaround",
    "Monthly Analytics Review",
    "Source File Archival"
  ];

  standardAgencyFeatures = [
    "Stock footage & templates",
    "2-week delivery minimum",
    "Generic 'viral' strategies",
    "Outsourced to freelancers",
    "Email-only communication",
    "Extra fees for revisions",
    "No trend awareness",
    "Cookie-cutter content",
  ];

  viralstanFeatures = [
    "Custom VFX & CGI from scratch",
    "24-48hr turnaround available",
    "Data-backed viral mechanics",
    "In-house creative team",
    "Real-time WhatsApp/Slack",
    "Unlimited revisions included",
    "Trend forecasting included",
    "Culture-shifting originals",
  ];


  public currentVideoIndex = 0;


  ngOnInit() {
    setInterval(() => {
      this.nextVideo();
    }, 7000);
    // Initialize responsive items per view
    this.updateItemsPerView();
    // Listen for resize to update itemsPerView
    this.resizeListener = () => this.updateItemsPerView();
    window.addEventListener('resize', this.resizeListener);

    // Start autoplay for brand carousel
    this.autoPlayInterval = setInterval(() => {
      this.nextBrandVideo();
    }, this.intervalDuration);
  }

  ngOnDestroy() {
    // Remove resize listener and stop autoplay
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    this.stopAutoPlay();
  }

  openWhatsApp() {
    const phoneNumber = '916284500902'; // country code + number
    const message = 'Hi, ViralStan! I want to know more about your services';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


  nextVideo() {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoFiles.length;
  }

  // Method to switch to the previous video
  prevVideo() {
    this.currentVideoIndex = (this.currentVideoIndex - 1 + this.videoFiles.length) % this.videoFiles.length;
  }

  // nextBrandVideo() {
  //   this.stopAutoPlay();
  //   this.currentBrandVideoIndex = (this.currentBrandVideoIndex + 1) % this.brandVideoFiles.length;
  //   this.startAutoPlay();
  // }

  // prevBrandVideo() {
  //   this.stopAutoPlay();
  //   this.currentBrandVideoIndex = (this.currentBrandVideoIndex - 1 + this.brandVideoFiles.length) % this.brandVideoFiles.length;
  //   this.startAutoPlay();
  // }

  // goToVideo(index: number) {
  //   this.stopAutoPlay();
  //   this.currentBrandVideoIndex = index;
  //   this.startAutoPlay();
  // }

  // startAutoPlay() {
  //   console.log('Starting autoplay');
  //   this.stopAutoPlay();
  //   this.autoPlayInterval = setInterval(() => {
  //     this.currentBrandVideoIndex = (this.currentBrandVideoIndex + 1) % this.brandVideoFiles.length;
  //   }, this.intervalDuration);
  // }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

}
