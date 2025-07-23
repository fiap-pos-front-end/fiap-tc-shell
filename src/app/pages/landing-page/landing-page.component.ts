import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { News } from '../../shared/models/news.model';
import { LandingPageService } from '../../shared/services/landing-page/landing-page.service';
import { Router } from '@angular/router';
import { AuthStore } from '../../shared/store/auth/auth.store';
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
      this.router.navigate(['/inicio']);
    }
    this.images = this.loginService.getImages();
  }
}
