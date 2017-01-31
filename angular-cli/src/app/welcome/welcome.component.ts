import {Component, OnInit, Input} from '@angular/core';
import {User} from "../Models/User";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() userObj: User = null;


  constructor() { }

  ngOnInit() {
  }



}
