import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { News } from '../../shared/models/news.model';
import { LandingPageService } from '../../shared/services/landing-page/landing-page.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AuthStore } from '../../shared/store/auth/auth.store';
@Component({
  selector: 'app-landing-page',
  imports: [GalleriaModule, ButtonModule, LoginComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  public images: News[] = [];
  public modalOpen: boolean = false;

  constructor(private loginService: LandingPageService) {}

  ngOnInit(): void {
    const token = this.authStore.token();
    if (token?.trim()) {
      this.router.navigate(['/banking']);
    }
    this.images = this.loginService.getImages();
  }

  openLogin() {
    this.modalOpen = !this.modalOpen;
  }

  closeLogin() {
    this.modalOpen = !this.modalOpen;
  }
}
