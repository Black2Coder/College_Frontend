import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  successMessage:any;
  errorMessage:string ;
  pass:string;
  conf_pass:string;
  isMatching:boolean = false;
  constructor(private form:FormBuilder, private service:RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.form.group({
      userName : ['',[Validators.required, Validators.pattern("[A-Za-z ]+")]],
      emailId: ['',[Validators.required ,Validators.email]],
      contact:['',[Validators.required, Validators.pattern("[6-9][0-9]{9}")]],
      password:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })

  }

  passMatch(){
    if(this.pass===this.conf_pass){
      this.isMatching=true;
    }
    else{
      this.isMatching=false;
    }
  }
 
  registerNow(){
    this.service.register(this.registerForm.value).subscribe(
      (res) => { 
        this.errorMessage=null;
        this.successMessage =res;
      console.log(res)
      },
      
      (err) => {
        this.successMessage=null;
        this.errorMessage = err.error.text;  }
    )
    
  }
  goToHomePage(){
    
  }
  
}
