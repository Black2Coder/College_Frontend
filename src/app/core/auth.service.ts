import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  sessionUser:BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  
  user:User;
  constructor(private http:HttpClient) {
    this.loadSessonUser();
   }

   loadSessonUser(){
    this.user=new  User();
    this.user.userName="";
   }
   nextUser(data:User){
     this.user=data;
     console.log(this.user);
     
     this.sessionUser.next(this.user); 
   }

}
