import { Component, Input, inject } from '@angular/core';
import { LoginService } from '../../shared/services/login/login.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { setToken } from '../../shared/store/auth/auth.actions';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ToastModule],
  standalone: true,
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public isSignUpAtivo = false;
  public loginForm!: FormGroup;
  public registerForm!: FormGroup;

  @Input() context: any;

   private messageService = inject(MessageService);

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private vps: ViewportScroller,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  authUser() {
    if (this.loginForm.valid) {
      this.loginService
        .authUser({
          Body: { email: this.loginForm.value.email, password: this.loginForm.value.password },
        })
        .subscribe({
          next: (res) => {
            const token = res?.result?.token;
            if (token) {
              this.store.dispatch(setToken({ token }));
              this.router.navigate(['/home']);
              this.vps.scrollToPosition([0, 0]);
              this.authService.setToken(token);
            }
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível autenticar o usuário!', life: 2500});
          },
        });
    } else {
      this.messageService.add({ severity: 'warn ', summary: 'Atenção', detail: 'Preencha todos os campos', life: 2500});
    }
  }

  createUser() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      if (this.loginService.emailValidator(user.email)) {
        this.loginService.createUser({ Body: user }).subscribe({
                next: (res) => {
                  const token = res?.result?.token;
                  if (token) {
                    this.store.dispatch(setToken({ token }));
                  }
                  window.location.href = '/home';
                  this.vps.scrollToPosition([0, 0]);
                },
                error: (err) => {
                  this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível criar o usuário', life: 2500});
                },
              });
      } else {
        this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Insira um e-mail válido', life: 3000});
      }
    } else {
      this.messageService.add({ severity: 'warn ', summary: 'Atenção', detail: 'Preencha todos os campos', life: 2500});
    }
  }

  changeMode(event: Event) {
    this.isSignUpAtivo = !this.isSignUpAtivo;
  }

  closeLogin() {
    this.context.closeLogin();
  }
}
