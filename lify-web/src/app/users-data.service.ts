import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const URL = 'https://686575db5b5d8d03398138b5.mockapi.io/lify/users';

export interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsersDataService {

  constructor(private http: HttpClient) { }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(URL, user);
  }

  emailExists(email: string): Observable<boolean> {
    return this.http.get<User[]>(URL).pipe(
      map(users => users.some(user => user.email.toLowerCase() === email.toLowerCase()))
    )
  }
}
