import { Component } from '@angular/core';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent {
  title = 'Demo';
  checked=true;
  detail = ""; 
  send(formDetail : any){ 
    this.detail = formDetail; 
  }
}
