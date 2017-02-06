import {Component, ViewEncapsulation} from '@angular/core';
import {ChatService} from "./Models/ChatService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';

  constructor(c: ChatService) {
    c.doSomething();
  }


}
