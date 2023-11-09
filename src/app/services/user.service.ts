import { EventEmitter } from "@angular/core"
import { user } from "../all-users/all-users.component";

export class UserService{
    users = [
        {name:'John', job:'Teacher', gender: 'Male', country:'United States', age:35, avatar:'assets/john.jpg'},
        {name:'Mark', job:'Designer', gender: 'Male', country:'Germany', age:35, avatar:'assets/john.jpg'},
        {name:'Merry', job:'Lawyer', gender: 'Female', country:'Ireland', age:35, avatar:'assets/merry.jpg'},
        {name:'Steve', job:'Doctor', gender: 'Male', country:'india', age:35, avatar:'assets/john.jpg'}
    ]

    OnShowDetailsClicked = new  EventEmitter<user>();

    ShowUserDetails(user:user){
        this.OnShowDetailsClicked.emit(user);
    }
}