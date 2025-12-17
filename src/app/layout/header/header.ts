import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  openWhatsApp() {
  const phoneNumber = '916284500902'; // country code + number
  const message = 'Hi, ViralStan! I want to know more about your services';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
}
