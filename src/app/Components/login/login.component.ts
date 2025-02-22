import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  submitted = false;

  constructor(private formBuild:FormBuilder, private userService:UserService, private route: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email: [''],
      password:['']
    })
  }

  Login(){
    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.userService.login(reqData).subscribe((result:any)=>{
      console.log(result);
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.userService.login(reqData).subscribe((response:any)=>{
        console.log(response.message);
        localStorage.setItem("token", response.data);
        sessionStorage.setItem("token",response.data);
        this.route.navigateByUrl("/home/notes")
      });
    }
  }
}
