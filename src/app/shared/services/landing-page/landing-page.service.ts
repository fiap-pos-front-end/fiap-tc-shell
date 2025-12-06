import { Injectable } from '@angular/core';
import { News } from '@shell/domain';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  getImages(): News[] {
    return [
      {
        itemImageSrc: 'assets/images/gallery/banner_1.png',
        thumbnailImageSrc: 'assets/images/gallery/banner_1.png',
        alt: 'É novo por aqui ? Clique para conferir mais sobre nós',
        title: 'Conheça o Bytebank',
      },
      {
        itemImageSrc: 'assets/images/gallery/banner_2.png',
        thumbnailImageSrc: 'assets/images/gallery/banner_2.png',
        alt: 'Batemos recorde históricos para nós e tudo graças a vocês',
        title: 'Aumento na receita e assinantes!',
      },
      {
        itemImageSrc: 'assets/images/gallery/banner_3.png',
        thumbnailImageSrc: 'assets/images/gallery/banner_3.png',
        alt: 'Fiquem ligados na próxima etapa de desafios',
        title: 'Bytebank no seu smartphone?',
      },
      {
        itemImageSrc: 'assets/images/gallery/banner_4.png',
        thumbnailImageSrc: 'assets/images/gallery/banner_4.png',
        alt: 'Leia esse artigo incrível para entender mais',
        title: 'Tecnologia a favor da sua economia',
      },
    ];
  }
}
