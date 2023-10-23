import { render } from '../../UI/render';
import { Preview } from './gameModules/preview';

export class Game {
  private preview;
  // private options;
  // private description;
  // private next;

  constructor() {
    this.preview = new Preview().init();
    // this.preview = render({
    //   tag: 'div',
    //   className: 'preview',
    // });
  }

  init() {
    return this.preview;
  }
}
