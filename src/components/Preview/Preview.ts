import { render } from './../../UI/render';
import png from './../../assets/img/empty.jpg';
import { Player } from './../Player/Player';

export class Preview {
  private preview;
  private player;

  constructor() {
    this.player = new Player('main').init();
    this.preview = this.create();
  }

  create() {
    const previewContain = `
      <div class="preview-image">
        <img class="preview-image__img" src="${png}" alt="Preview image"/>
      </div>
      <div class="preview-wrapper">
        <div class="preview__title">* * * * *</div>
      </div>
    `;

    const preview = render({
      tag: 'div',
      className: 'preview',
      innerHTML: previewContain,
    });

    const previewWrapper = preview.querySelector(
      '.preview-wrapper'
    ) as HTMLDivElement;
    previewWrapper.append(this.player);

    return preview;
  }

  init() {
    return this.preview;
  }
}
