import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token:any;
  constructor(private httpService:HttpService) {
    this.token = localStorage.getItem('token')
   }

   addNotes(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44392/api/Notes/CreateNote',reqData, true, header);
   }

   getNotes(){
    let header = {
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44392/api/Notes/FindAllNotes',true,header);
   }
}
