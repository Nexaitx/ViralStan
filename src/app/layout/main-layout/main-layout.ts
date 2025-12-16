import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Check, X, Eye, Zap, Sparkles, TrendingUp, Users, Clock 
} from 'lucide-angular';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, LucideAngularModule],
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

  // Data Arrays
  brands = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"];

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

}
