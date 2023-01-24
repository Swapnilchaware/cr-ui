import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
   private _http: HttpClient
  ) {

  }

  signInUser(username:String,password:String) {
   
    let data = {
      'username' : username,
      'password' : password
    }
   return this._http.put(environment.url + 'signIn',data);
  }

  signUpUser(username:String,password:String,dob:any) {
    
    let data = {
      'username' : username,
      'password' : password,
      'dateOfBirth' : dob
    }
  return this._http.post(environment.url + 'signUp',data);
  }

  getProfile(username:String) {
    
    let data = {
      'username' : username,
    }
  return this._http.put(environment.url,data);
  }
}
