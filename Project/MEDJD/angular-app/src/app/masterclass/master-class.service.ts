import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMasterClasses } from '../Models/masterclass.model';
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
}
