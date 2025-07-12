import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Microgreen } from './microgreen-list/Microgreen';

const URL = 'https://686575db5b5d8d03398138b5.mockapi.io/lify/microgreens';

@Injectable({
  providedIn: 'root'
})
export class MicrogreenDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Microgreen[]> {
    return this.http.get<Microgreen[]>(URL);
  }
}
