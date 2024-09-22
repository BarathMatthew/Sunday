import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/model/User';
import { ManageUserService } from '../services/manage-user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent {

  user!:User;
  userList:User[]=[];
  myForm : FormGroup;
  constructor(private manageUserService:ManageUserService) {
    this.viewAllUsers()
    this.user = new User;
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      mobile:new FormControl('')
    })
   }

   Register(data:any){
    console.log(data);
    this.manageUserService.insert(data);
    alert("data inserted successfully")
   }

   viewAllUsers(){
    this.manageUserService.getAllUsers().subscribe(
      user=>this.userList=user
    )
   }
   
}
