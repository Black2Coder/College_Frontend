import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../Blog';
import { PostService } from './post.service';
import { Post } from './Post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogForm:FormGroup;
  successMessage:string;
  errorMessage:string;
  reg : Post;

  constructor(private form:FormBuilder, private service:PostService) { }

  ngOnInit(): void {
    this.blogForm = this.form.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      file:['',[Validators.required ]]
    })
  }
  
  post(){
    // this.successMessage = null;
    // this.errorMessage =null;
    this.service.postService(this.blogForm.value).subscribe(res =>this.successMessage= res,
      err => this.errorMessage = err.error.text )
  }

}
