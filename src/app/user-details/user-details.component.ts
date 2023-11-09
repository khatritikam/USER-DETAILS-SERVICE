import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../all-users/all-users.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
  constructor(private userService: UserService){};

  user: user;
  
  ngOnInit(): void {
    this.userService.OnShowDetailsClicked.subscribe((data:user)=>{
      this.user =data;
    })
  }

   
}
