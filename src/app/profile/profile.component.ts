import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : User = new User();
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.service.getUserDetail().subscribe(
      (res:any)=> {this.user = res;
       
     console.log(this.user);
     
     }
   )
  }

}
