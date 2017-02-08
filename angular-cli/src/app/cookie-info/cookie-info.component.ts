import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Models/CookieService";

@Component({
  selector: 'app-cookie-info',
  templateUrl: './cookie-info.component.html',
  styleUrls: ['./cookie-info.component.css']
})
export class CookieInfoComponent implements OnInit {

  private cookies = [];

  constructor(private cookieService: CookieService) {

   cookieService.getAll().subscribe();
   //cookies => {
    //this.cookies = cookies;
    //}

  }

  ngOnInit() {
  }


  public getAll()
  {
    return this.cookies;
  }

  public eatCookie(id: number)
  {
      this.cookieService.removeCookie(id);
  }


}
