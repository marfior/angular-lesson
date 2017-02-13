import {Response} from "_debugger";
/**
 * Created by stc2 on 06/02/2017.
 */

export class Cookie{

  id: number;
  cookieType: string;
  cookieSizeInMillimetres: number;
  cookieShape: string;
/*
  constructor(id: number,cookieType: string,  cookieSizeInMillimetres: number,  cookieShape: string) {
    this.id = id;
    this.cookieType= cookieType;
    this.cookieSizeInMillimetres= cookieSizeInMillimetres;
    this.cookieShape= cookieShape;
  }
*/

  constructor(jsonResponse: any) {
    this.id = jsonResponse.id;
    this.cookieType= jsonResponse.cookieType;
    this.cookieSizeInMillimetres= jsonResponse.cookieSizeInMillimetres;
    this.cookieShape= jsonResponse.cookieShape;
  }

  public doSomething() {

    console.log("testing");


  }



}
