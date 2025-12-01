import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Content } from './layout/content/content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Header,
    Content,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ViralStan');
}
