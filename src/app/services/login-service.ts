import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../clases/apiConfig';
import { ILogin } from '../interfaces/ILogin';
import { IResponse } from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);

  queryLogin(data: ILogin) {
    return this.httpClient.post<IResponse>(API_URL + 'login', data, {
      withCredentials: true,
    });
  }
}
