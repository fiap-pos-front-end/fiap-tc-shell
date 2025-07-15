import { Component, Input } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setToken } from '../../store/auth/auth.actions';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public isSignUpAtivo = false;
  public loginForm!: FormGroup;
  public registerForm!: FormGroup;

  @Input() context : any;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
     private store: Store,
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

    this.loginService.getUser().subscribe(console.log);
  }

  authUser() {
    if (this.loginForm.valid) {
      this.loginService.authUser({
        Body: { email: this.loginForm.value.email, password: this.loginForm.value.password }
      }).subscribe({
        next: res => {
          const token = res?.result?.token;
          if (token) {
            this.store.dispatch(setToken({ token }));
            this.router.navigate(['/home']);
          }
        },
        error: err => {
          console.error('Erro ao autenticar:', err);
        }
      });
    } else {
      console.log('Formulário inválido');
    };
  }

  createUser() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.loginService.createUser({ Body: user }).subscribe({
        next: res => {
         const token = res?.result?.token;
          if (token) {
            this.store.dispatch(setToken({ token }));
            this.router.navigate(['/home']);
          }
        },
        error: err => {
          console.error('Erro ao criar usuário:', err);
        }
      });
    } else {
      console.warn('Formulário inválido!');
    }
  }

  changeMode(event: Event) {
    this.isSignUpAtivo = !this.isSignUpAtivo;
  }

  closeLogin() {
    this.context.closeLogin();
  }

}
