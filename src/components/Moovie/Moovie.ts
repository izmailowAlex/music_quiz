import { render } from '../../UI/render';
import video_view from './../../assets/video/video_view.mp4';

export class Moovie {
  private video;

  constructor() {
    this.video = this.create();
  }

  private create() {
    const source = render({
      tag: 'source',
      attributes: [
        { attr: 'src', sign: `${video_view}` },
        { attr: 'type', sign: 'video/mp4' },
      ],
      className: 'source',
    });

    const video = render({
      tag: 'video',
      attributes: [
        { attr: 'autoplay', sign: 'autoplay' },
        { attr: 'muted', sign: 'true' },
        { attr: 'loop', sign: 'true' },
      ],
      className: 'video',
      child: [source],
    });

    return video;
  }

  init() {
    return this.video;
  }
}
