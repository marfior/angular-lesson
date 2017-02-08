import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Models/CookieService";
import {Cookie} from "../Models/Cookie";

@Component({
  selector: 'app-create-cookie',
  templateUrl: './create-cookie.component.html',
  styleUrls: ['./create-cookie.component.css']
})
export class CreateCookieComponent implements OnInit {

  private cookie: Cookie = new Cookie(0,"",0,"");

  constructor(private cookieService: CookieService) {

  }

  ngOnInit() {
  }

  public bakeCookie()
  {
    this.cookieService.addCookie(new Cookie(this.cookie.id,
                                            this.cookie.cookieShape,
                                            this.cookie.cookieSizeInMillimetres,
                                            this.cookie.cookieType));
  }

}
