import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private loginService: LoginServiceService,  private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cpass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const cpass = this.registerForm.value.cpass;

    if (password === cpass){
        this.loginService.register(email, password).subscribe(
        () => {
          // Login bem-sucedido, redirecionar ou executar ações adicionais
        },
        error => {
          // Lidar com erros de login
          alert("Dados incorretos")
        }
      );
    } else {
      alert("As senhas não coicidem!")
    }

  }

}
