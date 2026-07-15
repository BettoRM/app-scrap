import { inject, Service } from '@angular/core';
import { IPlanForm, IPlanResponseList } from '../interfaces/IPlan';
import { IRequestList } from '../interfaces/IRequest';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IResponse } from '../interfaces/IResponse';
import { API_URL } from '../clases/apiConfig';

@Service()
export class PlanService {
  private httpClient = inject(HttpClient);
  private NAMEENDPOINT: string = 'plan';

  queryPlan<T extends IPlanResponseList[] | IPlanForm[]>(data: IRequestList) {
    let paramsQuery = new HttpParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        paramsQuery = paramsQuery.set(key, value);
      }
    });

    return this.httpClient.get<IResponse<T>>(`${API_URL}${this.NAMEENDPOINT}`, {
      params: paramsQuery,
      withCredentials: true,
    });
  }

  newPlan(data: IPlanForm) {
    return this.httpClient.post<IResponse<[]>>(
      `${API_URL}${this.NAMEENDPOINT}`,
      JSON.stringify(data),
      {
        withCredentials: true,
        observe: 'response',
      },
    );
  }

  editPlan(data: IPlanForm) {
    return this.httpClient.put<IResponse<[]>>(
      `${API_URL}${this.NAMEENDPOINT}`,
      JSON.stringify(data),
      {
        withCredentials: true,
        observe: 'response',
      },
    );
  }

  delPlan(data: IPlanForm) {
    console.log(JSON.stringify(data));
    return this.httpClient.delete<IResponse<[]>>(`${API_URL}${this.NAMEENDPOINT}`, {
      params: {
        codide: data.codigo,
      },
      withCredentials: true,
      observe: 'response',
    });
  }
}
