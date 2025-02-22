import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup

  constructor(private formBuild:FormBuilder, private userService:UserService){}

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
}
