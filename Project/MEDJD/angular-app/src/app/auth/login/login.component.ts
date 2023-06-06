import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(private loginService: LoginServiceService,  private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }


  ngOnInit(): void {}


  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.loginService.login(email, password).subscribe(
      () => {
        // Login bem-sucedido, redirecionar ou executar ações adicionais
      },
      error => {
        // Lidar com erros de login
        alert("Dados incorretos")
      }
    );
  }
}
