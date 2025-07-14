import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public isSignUpAtivo = false;
  public loginForm!: FormGroup;
  public registerForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email:['', Validators.required]
    });

  }

  authUser() {
    if (this.loginForm.valid) {
      this.loginService.authUser({
        Body: { email: this.loginForm.value.email, password: this.loginForm.value.password }
      }).subscribe({
        next: data => console.log('Usuário autenticado:', data),
        error: err => console.error('Erro ao autenticar:', err)
      });
    } else {
      console.log('Formulário inválido');
    };
  }

  createUser() {
    this.loginService.createUser({ Body: 
        {   "username": "teste 2",
            "email": "teste@gmail.com",
            "password": "testes",
        }});
  }

  changeMode(event: Event) {
    this.isSignUpAtivo = !this.isSignUpAtivo;
  }

}
