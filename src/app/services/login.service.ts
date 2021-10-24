import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router: Router) { }

  login(user:any):Observable<User>{
    return this.http.post<User>(environment.userLogin,user)
}


  getUserDetail(){
    return this.http.get(environment.userDetail)
  }

  loginUser(token:string){
    localStorage.setItem("token", token);
    return true;
  }

  isLogedIn(){
    let token = localStorage.getItem("token");
    if(token== undefined || token == '' || token == null){
      return false;
      console.log("Is Login");
    }
    else{
      
      return true;
    }
    
    
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    

    this.router.navigate(['/home']);
  }
  getToken(){
    return localStorage.getItem("token");
  }

}
