import { render } from '../../UI/render';
import video_view from './../../assets/video/video_view.mp4';

export class Moovie {
  private video;

  constructor() {
    const source = render({
      tag: 'source',
      attributes: [
        { attr: 'src', sign: `${video_view}` },
        { attr: 'type', sign: 'video/mp4' },
      ],
      className: 'source',
    });

    this.video = render({
      tag: 'video',
      attributes: [
        { attr: 'autoplay', sign: 'autoplay' },
        { attr: 'muted', sign: 'true' },
        { attr: 'loop', sign: 'true' },
      ],
      className: 'video',
      child: source,
    });
  }

  init() {
    return this.video;
  }
}
