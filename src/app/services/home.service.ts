import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Post[]>(environment.getPost);
  }

}
