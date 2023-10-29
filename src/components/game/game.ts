import { render } from '../../UI/render';
import { Preview } from './gameModules/preview';
import { Options } from './gameModules/options';
import { Description } from './gameModules/description';
import { data } from '../data/data';
import { state } from './../../state/state';

export class Game {
  private preview;
  private options;
  private description;
  private buttonNext;
  public level;
  public hiddenComposer;

  constructor() {
    this.level = state.level;
    this.hiddenComposer = data[this.level][0];
    this.hiddenComposer = data[this.level][this.random() - 1];
    state.currentObj.id = this.hiddenComposer.id;
    state.currentObj.game = this.hiddenComposer.game;
    state.currentObj.name = this.hiddenComposer.name;
    state.currentObj.mp3 = this.hiddenComposer.mp3;
    state.currentObj.attachment = this.hiddenComposer.attachment;
    state.currentObj.composition = this.hiddenComposer.composition;
    state.currentObj.src = this.hiddenComposer.src;
    state.currentObj.alt = this.hiddenComposer.alt;
    state.currentObj.description = this.hiddenComposer.description;
    this.preview = new Preview().init();
    this.options = new Options(this.level).init();
    this.description = new Description().init();
    this.buttonNext = render({
      tag: 'button',
      className: 'game-button',
      innerHTML: 'Next Level',
    });
  }

  random() {
    const numId = Math.ceil(Math.random() * 6);
    return numId;
  }

  init() {
    return [this.preview, this.options, this.description, this.buttonNext];
  }
}
