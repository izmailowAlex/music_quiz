import { render } from '../../UI/render';
import { Preview } from './gameModules/preview';
import { Options } from './gameModules/options';

export class Game {
  private preview;
  private options;
  // private description;
  // private next;

  constructor() {
    this.preview = new Preview().init();
    this.options = new Options().init();
    // this.preview = render({
    //   tag: 'div',
    //   className: 'preview',
    // });
  }

  init() {
    return [this.preview, this.options];
  }
}
