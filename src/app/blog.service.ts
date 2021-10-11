import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Blog } from './Blog';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  url:string ="http://localhost:3000/Posts";
  getPost(){
    return this.http.get<Blog[]>(this.url);
  }


}
