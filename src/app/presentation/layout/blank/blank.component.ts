import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpAuthRepository } from '@shell/infra/repositories/HttpAuthRepository';
import { AUTH_USE_CASES_PROVIDERS } from '@shell/presentation/providers/auth-use-cases.provider';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-blank',
  templateUrl: 'blank.component.html',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  providers: [
    // Infra (Nota: isso aqui poderia ser substituído por um token, para tornar ainda mais fácil trocar a dependência no futuro)
    { provide: HttpAuthRepository, useClass: HttpAuthRepository },

    // Use Cases
    ...AUTH_USE_CASES_PROVIDERS,
  ],
})
export class BlankComponent {}
