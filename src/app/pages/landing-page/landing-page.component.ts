import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { LandingPageService } from '../../shared/services/landing-page/landing-page.service';
import { News } from '../../core/models/news.model';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-landing-page',
  imports: [GalleriaModule, ButtonModule, LoginComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  public images: News[] = [];
  public modalOpen: boolean = false;

  constructor(private loginService: LandingPageService) {}

  ngOnInit(): void {
    this.loginService.getImages().then((images) => (this.images = images));
  }

  openLogin() {
    document.body.style.overflowY = 'hidden';
    this.modalOpen = !this.modalOpen;
  }

  closeLogin() {
    document.body.style.overflowY = 'auto';
    this.modalOpen = !this.modalOpen;
  }
}
