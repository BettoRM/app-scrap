import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { API_URL } from '../clases/apiConfig';
// Interfaces
import { IRequestList } from '../interfaces/IRequest';
import { IResponse } from '../interfaces/IResponse';
import { IUsuarioResponseList } from '../interfaces/IUsuario';

@Service()
export class UsuarioService {
  private httpClient = inject(HttpClient);
  private NAMEENDPOINT: string = 'usuario';

  queryUsuario(data: IRequestList) {
    let paramsQuery = new HttpParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        paramsQuery = paramsQuery.set(key, value);
      }
    });

    return this.httpClient.get<IResponse<IUsuarioResponseList[]>>(API_URL + this.NAMEENDPOINT, {
      params: paramsQuery,
      withCredentials: true,
    });
  }
}
