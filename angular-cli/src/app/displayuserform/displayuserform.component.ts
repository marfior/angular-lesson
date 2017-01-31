import {Component, OnInit, Input} from '@angular/core';
import {User} from "../Models/User";

@Component({
  selector: 'app-displayuserform',
  templateUrl: './displayuserform.component.html',
  styleUrls: ['./displayuserform.component.css']
})
export class DisplayuserformComponent implements OnInit {

  @Input() userRegistered : User;

  constructor() { }

  ngOnInit() {
  }


}
