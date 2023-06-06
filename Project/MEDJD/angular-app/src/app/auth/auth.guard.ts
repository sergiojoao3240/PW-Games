import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/auth/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginServiceService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn()) {
      // Com autenticação, permite a navegação
      return true;
    } else {
      // Sem autenticação, redireciona para a página de login
      console.log("Sem login ou token inválido")
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
