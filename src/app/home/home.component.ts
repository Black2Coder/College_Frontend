import { Component, OnInit } from '@angular/core';
import { Blog } from '../Blog';
import { BlogService } from '../blog.service';
import { Post } from '../post/Post';
import { HomeService } from '../services/home.service';
import { User } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:Post[]=[];
  title:any;
  p:number=1;
  errorMessage:string;
  constructor(private service:HomeService) { }

  ngOnInit(): void {
    let token  = localStorage.getItem('token')
    
    this.service.getPost().subscribe(
      response => {this.posts=response;
      },
      err => {
        this.posts = null;
        this.errorMessage = err.message;
        console.log(err.message)
      }
      );
  }
  search(){
    if(this.title==""){
      this.ngOnInit();
    }
    else{
      this.posts=this.posts.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    }
  }

}
