import { render } from '../../../UI/render';
import png from './../../../assets/img/empty.png';
import { Player } from '../../Player/Player';

export class Preview {
  private preview;
  private player;

  constructor() {
    this.player = new Player().init();

    const previewImageImg = render({
      tag: 'img',
      className: 'preview-image__img',
      src: png,
      alt: 'Preview__image',
    });

    const previewImage = render({
      tag: 'div',
      className: 'preview-image',
      child: [previewImageImg],
    });

    const previewTitle = render({
      tag: 'div',
      className: 'preview__title',
      innerHTML: '* * *',
    });

    const previewWrapper = render({
      tag: 'div',
      className: 'preview-wrapper',
      child: [previewTitle, this.player],
    });

    this.preview = render({
      tag: 'div',
      className: 'preview',
      child: [previewImage, previewWrapper],
    });
  }

  init() {
    return this.preview;
  }
}
