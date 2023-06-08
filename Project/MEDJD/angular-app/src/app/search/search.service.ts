import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { ResponseGame, ResponseGames } from '../Models/games.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  getGames(): Observable<ResponseGames> {
    return this.http.get<ResponseGames>(`${baseUrl}games`);
  }


  getAGame(_id: string): Observable<ResponseGame> {
    const _url_m = `${baseUrl}games/game/${_id}`;
    return this.http.get<ResponseGame>(_url_m);
  }
}
