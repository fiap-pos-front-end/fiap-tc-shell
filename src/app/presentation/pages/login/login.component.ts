import { ViewportScroller } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from '@fiap-pos-front-end/fiap-tc-shared';
import { LoginService } from '@shell/shared/services/login/login.service';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Toast],
  standalone: true,
  providers: [MessageService, Toast],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
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

    this.loginService
      .authUser(this.form.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
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
      this.loginService
        .createUser(user)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
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

  private handleAuthResponse(res: AuthResponse) {
    const token = res?.access_token;
    if (token) {
      this.closeLogin();
      this.router.navigate(['/banking']);
      this.vps.scrollToPosition([0, 0]);
    }
  }
}
