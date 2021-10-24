import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedIn:Boolean = false;
  userName :string;
  constructor(private loginService:LoginService, public auth: AuthService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLogedIn()
    this.userName= localStorage.getItem('userName');
  }
  logout(){
    this.loginService.logout();
    location.reload();
  }

}
