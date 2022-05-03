import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Auth from '../models/Auth';
import User from '../models/User';
import IResponse from '../models/IResponse';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  baseUrl: string = 'http://localhost:3333';

  constructor(private httpClient: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token')

    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  logon(email: string, password: string): Observable<IResponse<Auth>> {
    
    return this.httpClient.post<any>(`${this.baseUrl}/user/login`, { email, password });

  }

  createAccount(name: string, email: string, password: string): Observable<IResponse<User>> {

    console.log('createAccount')
    console.log(email)
    
    return this.httpClient.post<any>(`${this.baseUrl}/user`, { name, email, password });

  }

 

  listUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/user`, this.getHeaders())
  }

}
