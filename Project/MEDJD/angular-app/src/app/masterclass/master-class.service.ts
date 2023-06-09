import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestMasterClass, RequestMasterClassC, ResponseMasterClass, ResponseMasterClasses } from '../Models/masterclass.model';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterClassService {

  constructor(private http: HttpClient) { }


  getMasters(): Observable<ResponseMasterClasses> {
    return this.http.get<ResponseMasterClasses>(`${baseUrl}masterClass`);
  }

  getAMaster(_id: string): Observable<ResponseMasterClass> {
    const _url_m = `${baseUrl}masterClass/${_id}`;
    return this.http.get<ResponseMasterClass>(_url_m);
  }

  createMaster(request: RequestMasterClassC): Observable<ResponseMasterClass>{
    return this.http.post<ResponseMasterClass>(`${baseUrl}masterClass/new`, request)
  }

  deleteMaster(_id: string): Observable<any>{
    return this.http.delete<any>(`${baseUrl}masterClass/${_id}`)
  }

  updateMaster(_id: string, request: RequestMasterClass) : Observable<ResponseMasterClass>{
    return this.http.patch<ResponseMasterClass>(`${baseUrl}masterClass/${_id}`, request)
  }
}
