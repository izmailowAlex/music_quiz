import { render } from '../../UI/render';
import { Moovie } from '../Moovie/Moovie';
import { Preview } from '../Preview/Preview';
import { Options } from '../Options/Options';
import { Description } from '../Description/Description';
import { data } from '../../data/data';
import { state } from '../../state/state';
import Header from '../header/header';

class Main {
  private main;
  private moovie;
  private page;
  public level;
  public hiddenComposer;
  private score;
  public maxScore;

  constructor(page: string) {
    this.moovie = new Moovie().init();
    this.page = page;
    this.level = state.level;
    this.hiddenComposer = this.setHiddenComposer();
    this.score = 5;
    this.maxScore = this.score * data.length;

    this.main = render({
      tag: 'main',
      className: 'main',
    });

    if (this.page === 'home') {
      this.main.append(this.moovie);
    } else if (this.page === 'game') {
      this.main.append(this.create());
    } else if (this.page === 'result') {
      this.main.append(this.result());
    }
  }

  private create() {
    this.accumState();
    const preview = new Preview().init();
    const options = new Options(state.level, this.score).init();
    const description = new Description().init();
    const buttonNext = render({
      tag: 'button',
      className: 'game-button',
      innerHTML: state.level !== data.length - 1 ? 'Next Level' : 'Show result',
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

  private result() {
    const resultContain = `
      <div class="result">
        <h1 class="result__title">Congratulations!</h1>
        <p class="result-text">You scored ${
          this.getLocal().score !== this.getLocal().max
            ? this.getLocal().score +
              ' points out of ' +
              this.getLocal().max +
              ' possible'
            : 'maximum points'
        }</p>
        <button class="game-button">Try again!</button>
      </div>
    `;

    const container = render({
      tag: 'div',
      className: 'container',
      innerHTML: resultContain,
    });

    const btnAgain = container.querySelector(
      '.game-button'
    ) as HTMLButtonElement;

    btnAgain.addEventListener('click', () => {
      window.location.href = './game.html';
      this.removeLocal();
    });

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
    if (state.level === data.length - 1) {
      this.setLocal();
      window.location.href = './result.html';
    }
    this.level = state.level + 1;
    state.level = this.level;
    state.selectedDataObj = [];
    this.hiddenComposer = this.setHiddenComposer();
    new Header(this.page).update();
    main.innerHTML = '';
    main.append(this.create());
  }

  private getLocal() {
    const scoreItem = JSON.parse(localStorage.getItem('winner')!);
    return scoreItem;
  }

  private setLocal() {
    localStorage.setItem(
      'winner',
      JSON.stringify({ score: state.score, max: this.maxScore })
    );
  }

  private removeLocal() {
    localStorage.removeItem('winner');
  }

  init() {
    return this.main;
  }
}

export default Main;
