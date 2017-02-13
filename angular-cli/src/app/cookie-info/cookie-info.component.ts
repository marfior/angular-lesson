import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Models/CookieService";
import {errorComparator} from "tslint/lib/test/lintError";

@Component({
  selector: 'app-cookie-info',
  templateUrl: './cookie-info.component.html',
  styleUrls: ['./cookie-info.component.css']
})
export class CookieInfoComponent implements OnInit {

  private cookies = [];

  constructor(private cookieService: CookieService) {

   cookieService.getAll().subscribe(
     // Data call
     (cookies)=> {
       this.cookies = cookies;
     },
     // Error call
     (err) => {
       console.error('There was a problem calling the API');
     },
     // Finally call
     () => {
       console.log("API was called.");
     });

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
