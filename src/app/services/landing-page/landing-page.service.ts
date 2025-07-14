import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  getData() {
        return [
            {
                itemImageSrc: 'assets/images/image-ByteBank.png',
                thumbnailImageSrc: 'assets/images/image-ByteBank.png',
                alt: 'É novo por aqui ? Clique para conferir mais sobre nós',
                title: 'Conheça o ByteBank'
            },
            {
                itemImageSrc: 'assets/images/image-newUpdate.png',
                thumbnailImageSrc: 'assets/images/image-newUpdate.png',
                alt: 'Confira a nova interface modernizada do nosso aplicativo',
                title: 'Nova atualização disponível'
            },
            {
                itemImageSrc: 'assets/images/image-app_ByteBank.png',
                thumbnailImageSrc: 'assets/images/image-app_ByteBank.png',
                alt: 'Fiquem ligados na próxima etapa de desafios',
                title: 'ByteBank no seu smartphone?'
            },
            {
                itemImageSrc: 'assets/images/image-TI_FINANCAS.png',
                thumbnailImageSrc: 'assets/images/image-TI_FINANCAS.png',
                alt: 'Leia esse artigo incrível para entender mais',
                title: 'Tecnologia a favor da sua economia'
            }
        ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
