import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  
  detail = ""; 
  send(formDetail : any){ 
    this.detail = formDetail; 
  }
}
