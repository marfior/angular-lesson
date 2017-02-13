/**
 * Created by stc2 on 06/02/2017.
 */
import {Injectable} from "@angular/core";
import {Cookie} from "./Cookie";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class CookieService{

  arrCookies: Array<Cookie> = [];
  //arrCookies: any = [];

  constructor(private httpServ: Http) {

/*
    for (var _i = 0; _i < 5; _i++)
    {
      let cookie = new Cookie(_i,"type" + _i, _i+10,"Round");
      this.arrCookies.push(cookie);
    }
*/

  }


  public addCookie(newCookie: Cookie)
  {
    this.arrCookies.push(newCookie); //new Cookie("added",15,"Star"));

    this.httpServ.post("http://192.168.1.129:3000/cookies",
      {
        cookieType: newCookie.cookieType,
        cookieSizeInMillimetres: newCookie.cookieSizeInMillimetres,
        cookieShape: newCookie.cookieShape
      },{}).subscribe();


  }

  public removeCookie(id: number)
  {
    this.arrCookies.filter(cookie => cookie.id !== id);

    this.httpServ.delete("http://192.168.1.129:3000/cookies/" + id).subscribe();

  }

  public getAll()
  {  // get data using a restful API
    return  this.httpServ.get("http://192.168.1.129:3000/cookies")
                  .map(responseObj => responseObj.json()
                      .map(jsonCookie => new Cookie(jsonCookie) )
                  )
  }






}
