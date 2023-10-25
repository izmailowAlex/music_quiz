import { render } from '../../UI/render';
import { Preview } from './gameModules/preview';
import { Options } from './gameModules/options';
import { Description } from './gameModules/description';

export class Game {
  private preview;
  private options;
  private description;
  private buttonNext;

  constructor() {
    this.preview = new Preview().init();
    this.options = new Options().init();
    this.description = new Description().init();
    this.buttonNext = render({
      tag: 'button',
      className: 'game-button',
      innerHTML: 'Next Level',
    });
  }

  init() {
    return [this.preview, this.options, this.description, this.buttonNext];
  }
}
