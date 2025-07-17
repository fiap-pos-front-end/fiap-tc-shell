import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { News } from '../../shared/models/news.model';
import { LandingPageService } from '../../shared/services/landing-page/landing-page.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-landing-page',
  imports: [GalleriaModule, ButtonModule, LoginComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  public images: News[] = [];
  public modalOpen: boolean = false;

  constructor(private loginService: LandingPageService) {}

  ngOnInit(): void {
    document.body.style.overflowY = 'auto';
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
