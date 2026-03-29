import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateService {

    private url = 'http://localhost:8080/api/register';

    constructor (private http: HttpClient) {}

    create(firstName: string, username: string, email: string, password: string) {
      return this.http.post(this.url, {firstName,  username, email, password}, {responseType: 'text'});
    }

}
