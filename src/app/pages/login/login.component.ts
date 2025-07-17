import { ViewportScroller } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { LoginService } from '../../shared/services/login/login.service';
import { AuthStore } from '../../shared/store/auth/auth.store';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Toast],
  standalone: true,
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly authStore = inject(AuthStore);

  public isSignUpAtivo = false;
  public loginForm!: FormGroup;
  public registerForm!: FormGroup;

  @Input() context: any;

  private messageService = inject(MessageService);

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private vps: ViewportScroller,
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
    if (!this.loginForm.valid) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Preencha todos os campos', life: 2500 });
      return;
    }

    this.loginService.authUser(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (res) => {
        const token = res?.access_token;
        if (token) {
          this.authStore.setToken(token);
          this.router.navigate(['/home']);
          this.vps.scrollToPosition([0, 0]);
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível autenticar o usuário!',
          life: 2500,
        });
      },
    });
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
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Não foi possível criar o usuário',
              life: 2500,
            });
          },
        });
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Atenção',
          detail: 'Insira um e-mail válido',
          life: 3000,
        });
      }
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Preencha todos os campos', life: 2500 });
    }
  }

  changeMode() {
    this.isSignUpAtivo = !this.isSignUpAtivo;
  }

  closeLogin() {
    this.context.closeLogin();
  }
}
