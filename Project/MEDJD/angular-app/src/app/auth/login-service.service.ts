import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, tap, throwError } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  sessionToken!: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${baseUrl}auth/login`, { email, password }).pipe(
      tap((response: any) => {
        console.log('Login bem-sucedido');


        const sessionToken = response.authentication.sessionToken;
        localStorage.setItem('token', sessionToken);

        window.location.href = '/home';
      }),
      catchError((error: any) => {
        console.error(error);
        return throwError('Ocorreu um erro durante o login');
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    // Verifique se o token existe e se é válido
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
  }


  register(email: string, password: string) {
    return this.http.post<any>(`${baseUrl}auth/register`, { email, password }).pipe(
      tap((response: any) => {
        console.log('Registado com sucesso');
        localStorage.setItem('token', response.authentication.sessionToken);
        // Armazenar o sessionToken em localStorage, sessionStorage ou outro mecanismo de armazenamento de sua escolha
        window.location.href = '/home';
      }),
      catchError((error: any) => {
        console.error(error);
        return throwError('Ocorreu um erro durante o registo');
      })
    );
  }

}
