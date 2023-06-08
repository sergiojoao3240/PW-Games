import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { ResponseSubjects } from '../Models/subject.model';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  constructor(private http: HttpClient) { }


  getSubjects(): Observable<ResponseSubjects> {

    return this.http.get<ResponseSubjects>(`${baseUrl}curriculum`);
  }

}
