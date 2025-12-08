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
    "2-3 VFX Reels/Month",
    "Basic 3D Product Renders",
    "48hr Turnaround",
    "Trend Alerts",
    "WhatsApp Support",
  ];

  surgeFeatures = [
    "6-8 VFX Reels/Month",
    "Advanced CGI Sequences",
    "24hr Rush Available",
    "Viral Strategy Sessions",
    "Dedicated Slack Channel",
    "Analytics Dashboard",
  ];

  empireFeatures = [
    "Unlimited VFX Content",
    "Full Cinematic Productions",
    "Same-Day Turnaround",
    "White-Glove Creative Direction",
    "Dedicated Team",
    "Priority Everything",
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
