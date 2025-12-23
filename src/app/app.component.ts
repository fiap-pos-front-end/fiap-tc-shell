import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStore } from '@shell/presentation/state/auth/auth.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly authStore = inject(AuthStore);

  effect = effect(() => {
    this.authStore.setToken(this.authStore.token());
  });
}
