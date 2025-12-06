import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-content',
  imports: [ScrollTriggerDirective],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
