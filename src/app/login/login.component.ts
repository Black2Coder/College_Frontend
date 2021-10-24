import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { LoginService } from '../services/login.service';

import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successMessage:string;
  errorMessage:string;
  loginForm:FormGroup;
  user : User = new User();
  constructor(private form:FormBuilder, private service:LoginService , private router:Router) { }

  ngOnInit(): void {

    this.loginForm= this.form.group({
      contact:['',[Validators.required,Validators.pattern("[6-9][0-9]{9}")]],
      password:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]

    })

  }

  login(){
    this.user= null;
    this.service.login(this.loginForm.value).subscribe(
      res => {
        this.errorMessage=null;
        this.service.loginUser(res.token)
        this.service.getUserDetail().subscribe(
           (res:any)=> {this.user = res;
            localStorage.setItem("userName", this.user.userName)
          console.log(this.user);
          
          }
        )
        
        // this.auth.nextUser(this.user)
        this.router.navigate(['/home'])
      // console.log(this.user.userName);
      },
      err=>this.errorMessage = err.error.errorMessage
    )
  }


}
