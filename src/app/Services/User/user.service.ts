import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  register(reqData: any){
    let header = {
      headers: new HttpHeaders({
        'content-type':'application/json',
        //'Authorization':'token'
      })
    }
    return this.httpService.postService('https://localhost:44392/api/Users/Reg',reqData,false,header)
  }

  login(reqData: any){
    let header = {
      headers: new HttpHeaders({
        'content-type':'application/json',
        //'Authorization':'token'
      })
    }
    return this.httpService.postService('https://localhost:44392/api/Users/Login',reqData,false,header)
  }
}
