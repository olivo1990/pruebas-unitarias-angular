import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API:string = 'https://api.github.com';

  constructor(private http:HttpClient) { }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(`${this.API}/users`, {});
  }
}
