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
  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.service.getPost().subscribe(
      response => {this.posts=response;
      console.log(response);
      
      },
      err => console.log(err.error)
      
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
