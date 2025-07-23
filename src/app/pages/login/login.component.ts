import { ViewportScroller } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponsePayload } from '@fiap-pos-front-end/fiap-tc-shared';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { LoginService } from '../../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Toast],
  standalone: true,
  providers: [MessageService, Toast],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  private messageService = inject(MessageService);
  private loginService = inject(LoginService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private vps = inject(ViewportScroller);

  isSignUpAtivo = false;
  form!: FormGroup;

  @Input() context!: { closeLogin: () => void };

  ngOnInit() {
    document.body.style.overflowY = 'hidden';

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    document.body.style.overflowY = 'auto';
  }

  authUser() {
    if (!this.form.valid) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Preencha todos os campos', life: 2500 });
      return;
    }

    this.loginService.authUser(this.form.value).subscribe({
      next: (res) => this.handleAuthResponse(res),
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível autenticar o usuário!',
          life: 2500,
        }),
    });
  }

  createUser() {
    if (!this.form.valid) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Preencha todos os campos', life: 2500 });
      return;
    }

    const user = this.form.value;
    if (this.loginService.emailValidator(user.email)) {
      this.loginService.createUser(user).subscribe({
        next: (res) => this.handleAuthResponse(res),
        error: () =>
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível criar o usuário',
            life: 2500,
          }),
      });
    }
  }
  changeMode() {
    this.form.reset();
    this.isSignUpAtivo = !this.isSignUpAtivo;
  }

  closeLogin() {
    this.context.closeLogin();
  }

  private handleAuthResponse(res: AuthResponsePayload) {
    const token = res?.access_token;
    if (token) {
      this.router.navigate(['/banking']);
      this.vps.scrollToPosition([0, 0]);
    }
  }
}
