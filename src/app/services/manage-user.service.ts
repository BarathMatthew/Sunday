import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {
  
private url:string ='http://localhost:3004/Users';

  constructor(private http:HttpClient) { }
  
  insert(data: any) {
    return this.http.post(this.url,data).subscribe();
  }
  getAllUsers(){
    return this.http.get<User[]>(this.url);
  }
}
