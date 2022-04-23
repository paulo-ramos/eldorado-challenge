import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Auth from '../models/Auth';
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

  autenticar(email: string, password: string): Observable<IResponse<Auth>> {
    return this.httpClient.post<IResponse<Auth>>(`${this.baseUrl}/user/login`, { email, password });
  }

  listarCarros(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/user`, this.getHeaders())
  }

}
