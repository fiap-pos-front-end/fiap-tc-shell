import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  getData() {
        return [
            {
                itemImageSrc: 'assets/images/gallery/image-ByteBank.png',
                thumbnailImageSrc: 'assets/images/gallery/image-ByteBank.png',
                alt: 'É novo por aqui ? Clique para conferir mais sobre nós',
                title: 'Conheça o Bytebank'
            },
            {
                itemImageSrc: 'assets/images/gallery/image-newUpdate.png',
                thumbnailImageSrc: 'assets/images/gallery/image-newUpdate.png',
                alt: 'Confira a nova interface modernizada do nosso aplicativo',
                title: 'Nova atualização disponível'
            },
            {
                itemImageSrc: 'assets/images/gallery/image-app_ByteBank.png',
                thumbnailImageSrc: 'assets/images/gallery/image-app_ByteBank.png',
                alt: 'Fiquem ligados na próxima etapa de desafios',
                title: 'Bytebank no seu smartphone?'
            },
            {
                itemImageSrc: 'assets/images/gallery/image-TI_FINANCAS.png',
                thumbnailImageSrc: 'assets/images/gallery/image-TI_FINANCAS.png',
                alt: 'Leia esse artigo incrível para entender mais',
                title: 'Tecnologia a favor da sua economia'
            }
        ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
