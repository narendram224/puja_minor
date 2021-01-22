import { Component } from '@angular/core';
import { LoginService } from './service/login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IdeaShare';
  menuIcon:any='assets/images/menuIcon.svg';
  year = new Date().getFullYear();

  constructor(public login:LoginService){
    
  }
}
