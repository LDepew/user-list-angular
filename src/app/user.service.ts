import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/api/users/";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<any[]> {
    return this.http.get(this.url) as Observable<any[]>;
  }
}
