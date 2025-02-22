import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup
  submitted = false;

  constructor(private formBuild:FormBuilder, private userService:UserService, private route: Router){}
  
    ngOnInit(): void {
      this.registerForm = this.formBuild.group({
        firstName: [''],
        lastName: [''],
        dob: [''],
        gender: [''],
        email: [''],
        password: ['']
      });      
    }
  
    Register(){
      let reqData = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        dob: this.registerForm.value.dob,
        gender: this.registerForm.value.gender,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }
      this.userService.register(reqData).subscribe((result:any)=>{
        console.log(result);
      })
    }
  
    // onSubmit(){
    //   this.submitted = true;
    //   if(this.registerForm.valid){
    //     let reqData = {
    //       firstName: this.registerForm.value.firstName,
    //       lastName: this.registerForm.value.lastName,
    //       dob: this.registerForm.value.dob,
    //       gender: this.registerForm.value.gender,
    //       email: this.registerForm.value.email,
    //       password: this.registerForm.value.password
    //     }
    //     this.userService.register(reqData).subscribe((response:any)=>{
    //       console.log(response.message);
    //       localStorage.setItem("token", response.data);
    //       sessionStorage.setItem("token",response.data);
    //       this.route.navigateByUrl("/home/notes")
    //     });
    //   }
    // }
}
