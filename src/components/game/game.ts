import { render } from '../../UI/render';
import { Preview } from './gameModules/preview';
import { Options } from './gameModules/options';
import { Description } from './gameModules/description';

export class Game {
  private preview;
  private options;
  private description;
  // private next;

  constructor() {
    this.preview = new Preview().init();
    this.options = new Options().init();
    this.description = new Description().init();
    // this.preview = render({
    //   tag: 'div',
    //   className: 'preview',
    // });
  }

  init() {
    return [this.preview, this.options, this.description];
  }
}
