import { render } from '../../../UI/render';
import png from './../../../assets/img/empty.png';

export class Preview {
  private preview;

  constructor() {
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

    const previewButton = render({
      tag: 'button',
      className: 'preview__btn',
      id: 'play',
    });

    const playerProgressBar = render({
      tag: 'input',
      className: 'player-progress-bar',
      attributes: [
        { attr: 'type', sign: 'range' },
        { attr: 'min', sign: '0' },
        { attr: 'max', sign: '100' },
        { attr: 'name', sign: 'input' },
        { attr: 'value', sign: '0' },
      ],
    });

    const playerProgress = render({
      tag: 'div',
      className: 'player-progress',
      child: [playerProgressBar],
    });

    const playerTimeCurrent = render({
      tag: 'div',
      className: 'player-time-current',
      innerHTML: '00:00',
    });

    const playerTimeFull = render({
      tag: 'div',
      className: 'player-time-full',
      innerHTML: '00:00',
    });

    const playerTime = render({
      tag: 'div',
      className: 'player-time',
      child: [playerTimeCurrent, playerTimeFull],
    });

    const previewPlayer = render({
      tag: 'div',
      className: 'preview-player',
      child: [playerProgress, playerTime],
    });

    const previewProgress = render({
      tag: 'div',
      className: 'preview-progress',
      child: [previewButton, previewPlayer],
    });

    const previewWrapper = render({
      tag: 'div',
      className: 'preview-wrapper',
      child: [previewTitle, previewProgress],
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
