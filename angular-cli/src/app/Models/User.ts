/**
 * Created by stc2 on 25/01/2017.
 */

export class User
{
  constructor(username: string, surname: string, emailaddress: string) {
    this.username = username;
    this.surname = surname;
    this.emailaddress = emailaddress;
  }


  username: string;
  surname: string;
  emailaddress: string;

  public isValid() : boolean {

    if (this.username.length > 1)
      return true;
    else
      return false;
  }
}


