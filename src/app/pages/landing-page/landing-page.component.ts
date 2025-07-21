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
    this.images = this.loginService.getImages();
  }

  openLogin() {
    this.modalOpen = !this.modalOpen;
  }

  closeLogin() {
    this.modalOpen = !this.modalOpen;
  }
}
