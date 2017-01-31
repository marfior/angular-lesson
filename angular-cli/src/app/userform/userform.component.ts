import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../Models/User";

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  @Output() onRegistration : EventEmitter<User> = new EventEmitter();

  userRegister: User = new User("","","");

  constructor() { }

  ngOnInit() {
  }

  public register()
  {
    this.onRegistration.emit(new User(this.userRegister.username,
                                      this.userRegister.surname,
                                      this.userRegister.emailaddress));
  }

}
