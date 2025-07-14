import { Component, OnInit, model } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { LandingPageService } from '../../services/landing-page/landing-page.service';
import { News } from '../../core/models/news.model';
@Component({
  selector: 'app-landing-page',
  imports: [GalleriaModule, ButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  //public images = Products([]);
  public images: News[] = [];

  constructor(
    private loginService: LandingPageService
  ) {}

  ngOnInit(): void {
     this.loginService.getImages().then((images) => this.images = images);
  }

}
