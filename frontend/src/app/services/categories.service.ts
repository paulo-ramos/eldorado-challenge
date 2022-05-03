import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Auth from '../models/Auth';
import User from '../models/User';


import { Router } from '@angular/router';
import { catchError, map, Observable, ObservableInput } from 'rxjs';

import apiConfig from '../config/url';
import Category from '../models/Category';
import IResponse from '../models/IResponse';
import Response from '../models/Response';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private verifyToken(error: any): ObservableInput<any> {
    if (error.status === 401) {
      this.router.navigate(['/'])
    }

    throw new Error('Não autorizado')
  }

  getcategories(): Observable<IResponse<Category[]>> {
    const token = localStorage.getItem('token')

    console.log(token);

    const result =  this.httpClient.get<any>(`${apiConfig.baseUrl}/category`, { 
      
      
    });

    console.log(result);

    return result;

    // return this.httpClient.get<IResponse<Category[]>>(`${apiConfig.baseUrl}/category`, {
    //   headers: { 'Authorization': `Bearer ${token}` },
    //   observe: 'response',
    //   responseType: 'json'
    // })
    // .pipe(
    //   map((response) => response.body || new Response<Category[]>()),
    //   catchError(this.verifyToken)
    // )

  }

  createCategory(name: string): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    return this.httpClient.post<IResponse<any>>(`${apiConfig.baseUrl}/category`, {name}, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
    .pipe(
      map((response) => response.body || new Response<any>()),
      catchError(this.verifyToken)
    )
  }

  deleteCategory(categoryId: number, categoryKey: string): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    return this.httpClient.delete<IResponse<any>>(`${apiConfig.baseUrl}/category/{categoryId} / {categoryKey}`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
    .pipe(
      map((response) => response.body || new Response<any>()),
      catchError(this.verifyToken)
    )
  }



}
