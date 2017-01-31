import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../Models/User";
import {userInfo} from "os";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class HeaderComponentComponent implements OnInit {

  userHeader: User = new User("Martin","Fjura","");

  constructor() {

    //let userHeader = new User();

    this.userHeader.username = "Martinn";
    this.userHeader.surname = "fior";

  }

  ngOnInit() {
  }

}
