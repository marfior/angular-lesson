import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Models/CookieService";

@Component({
  selector: 'app-eat-cookie',
  templateUrl: './eat-cookie.component.html',
  styleUrls: ['./eat-cookie.component.css']
})
export class EatCookieComponent implements OnInit {

  constructor(private cookieService: CookieService) {

  }

  ngOnInit() {
  }

  public eatCookie()
  {
    this.cookieService.removeCookie(0);
  }
}
