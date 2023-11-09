import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

export interface user {
  name: string;
  job: string;
  gender: string;
  country: string;
  age: number;
  avatar: string
}

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  constructor(private userService: UserService){}

  public users : user[]
  // public users : {name:string, job:string, gender:string, country:string, age:number, avatar:string}[]=[];

  ngOnInit(){
    this.users = this.userService.users
  }

  ShowDetails(user:user){
    this.userService.ShowUserDetails(user); 
  }
}
