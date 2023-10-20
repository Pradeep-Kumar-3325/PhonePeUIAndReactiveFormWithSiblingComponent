import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-display',
  templateUrl: './app-display.component.html',
  styleUrls: ['./app-display.component.css']
})
export class AppDisplayComponent {
  @Input() 
  formDetail:any; 
}
