import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '@shell/domain';
import { LandingPageService } from '@shell/shared/services/landing-page/landing-page.service';
import { AuthStore } from '@shell/shared/store/auth/auth.store';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-landing-page',
  imports: [GalleriaModule, ButtonModule],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  public images: News[] = [];

  constructor(private loginService: LandingPageService) {}

  ngOnInit(): void {
    const token = this.authStore.token();
    if (token?.trim()) {
      this.router.navigate(['/banking']);
    }
    this.images = this.loginService.getImages();
  }
}
