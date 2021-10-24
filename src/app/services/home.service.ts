import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../post/Post';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getPost():Observable<Post[]>{
    let token = localStorage.getItem('token')
    let tokenBearer = 'Bearer '+ token;
    const headers = new HttpHeaders().set("Authorization", tokenBearer);
    return this.http.get<Post[]>(environment.getPost,{headers});
  }
  getHome():Observable<any>{
    
    return this.http.get(environment.home,{responseType:'text' as 'json'})
  }

}
