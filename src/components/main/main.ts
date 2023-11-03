import { render } from './../../UI/render';
import { Moovie } from './../Moovie/Moovie';
import { Preview } from './../Preview/Preview';
import { Options } from './../Options/Options';
import { Description } from './../Description/Description';
import { state } from './../../state/state';

class Main {
  private main;
  private moovie;
  private page;
  private preview;
  private options;
  private description;
  private buttonNext;

  constructor(page: string) {
    this.moovie = new Moovie().init();
    this.preview = new Preview().init();
    this.options = new Options(state.level).init();
    this.description = new Description(state.selectedComposer).init();
    this.page = page;

    this.buttonNext = render({
      tag: 'button',
      className: 'game-button-next',
      innerHTML: 'Next Level',
      btn: true,
      disabled: 'true',
    });

    this.main = this.create();
  }

  private create() {
    const main = render({
      tag: 'main',
      className: 'main',
    });
    const gameWrapper = render({
      tag: 'div',
      className: 'game-field',
      child: [this.preview, this.options, this.description, this.buttonNext],
    });
    const container = render({
      tag: 'div',
      className: 'container',
      child: [gameWrapper],
    });

    this.buttonNext = render({
      tag: 'button',
      className: 'game-button-next',
      innerHTML: 'Next Level',
      btn: true,
      disabled: 'true',
    });

    if (this.page === 'home') {
      main.append(this.moovie);
    } else if (this.page === 'game') {
      main.append(container);
    }

    return main;
  }

  init() {
    return this.main;
  }
}

export default Main;
