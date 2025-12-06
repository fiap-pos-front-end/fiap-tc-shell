export class News {
  private constructor(
    public readonly title: string,
    public readonly alt: string,
    public readonly itemImageSrc: string,
    public readonly thumbnailImageSrc: string,
  ) {}

  static create(data: { title: string; alt: string; itemImageSrc: string; thumbnailImageSrc: string }): News {
    return new News(data.title, data.alt, data.itemImageSrc, data.thumbnailImageSrc);
  }
}
