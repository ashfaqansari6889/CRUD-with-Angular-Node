import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post(`${baseUrl}users/login`,data);
    // localStorage.setItem('token', JSON.stringify(data));
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
