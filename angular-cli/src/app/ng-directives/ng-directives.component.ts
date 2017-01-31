import { Component, OnInit } from '@angular/core';
import {User} from "../Models/User";
import {ToDo} from "../Models/ToDo";

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent implements OnInit {

  private toggle: boolean= false;
  private usersRegistered: Array<User> = [
    new User("Martin","Fiorentino",""),
    new User("David","Stellini",""),
    new User("Peter","Bartolo",""),
    new User("Kenneth","Borg",""),
  ]

  private todolist: Array<ToDo> = [
                      {
                        "task_name": "Take out clothes from washing line",
                        "complete": false
                      },
                      {
                        "task_name": "Buy groceries",
                        "complete": false
                      },
                      {
                        "task_name": "Prepare dinner",
                        "complete": false
                      },
                      {
                        "task_name": "Watch netflix",
                        "complete": true
                      }
                    ];



  constructor() { }

  ngOnInit() {
  }

}
