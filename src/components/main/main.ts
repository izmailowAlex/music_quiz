import { render } from './../../UI/render';
import { Moovie } from './../Moovie/Moovie';
import { Preview } from './../Preview/Preview';
import { Options } from './../Options/Options';
import { Description } from './../Description/Description';
import { data } from './../../data/data';
import { state } from './../../state/state';
import Header from '../Header/Header';

class Main {
  private main;
  private moovie;
  private page;
  public level;
  public hiddenComposer;
  public selectedComposer;
  private score;

  constructor(page: string) {
    this.moovie = new Moovie().init();
    this.page = page;
    this.level = state.level;
    this.hiddenComposer = this.setHiddenComposer();
    this.selectedComposer = state.selectedComposer;
    this.score = 6;

    this.main = render({
      tag: 'main',
      className: 'main',
    });

    if (this.page === 'home') {
      this.main.append(this.moovie);
    } else if (this.page === 'game') {
      this.main.append(this.create());
    }
  }

  private create() {
    this.accumState();
    const preview = new Preview().init();
    const options = new Options(state.level, this.score).init();
    const description = new Description(state.selectedComposer).init();
    const buttonNext = render({
      tag: 'button',
      className: 'game-button-next',
      innerHTML: 'Next Level',
      btn: true,
      disabled: 'true',
    });

    const gameWrapper = render({
      tag: 'div',
      className: 'game-field',
      child: [preview, options, description, buttonNext],
    });

    const container = render({
      tag: 'div',
      className: 'container',
      child: [gameWrapper],
    });

    buttonNext.addEventListener('click', () => this.update());

    return container;
  }
  private accumState() {
    state.currentObj.id = this.hiddenComposer.id;
    state.currentObj.game = this.hiddenComposer.game;
    state.currentObj.name = this.hiddenComposer.name;
    state.currentObj.mp3 = this.hiddenComposer.mp3;
    state.currentObj.attachment = this.hiddenComposer.attachment;
    state.currentObj.composition = this.hiddenComposer.composition;
    state.currentObj.src = this.hiddenComposer.src;
    state.currentObj.alt = this.hiddenComposer.alt;
    state.currentObj.description = this.hiddenComposer.description;
  }

  private random() {
    const numId = Math.ceil(Math.random() * 6);
    return numId;
  }

  private setHiddenComposer() {
    return data[this.level][this.random() - 1];
  }

  private update() {
    const main = document.querySelector('.main') as HTMLDivElement;
    this.level = state.level + 1;
    state.level = this.level;
    state.selectedDataObj = [];
    state.selectedComposer = '';
    this.hiddenComposer = this.setHiddenComposer();
    new Header(this.page).update();
    main.innerHTML = '';
    main.append(this.create());
  }

  init() {
    return this.main;
  }
}

export default Main;
