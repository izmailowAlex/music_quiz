import { render } from '../../UI/render';
import { Moovie } from '../Moovie/Moovie';
import { Game } from '../game/game';

export class Main {
  private main;
  private container;
  private moovie;
  private game;

  constructor() {
    const ROOT = document.querySelector('#root');
    this.moovie = new Moovie().init();
    this.game = new Game().init();

    let page: string | undefined = '';

    if (ROOT && ROOT instanceof HTMLElement) {
      if (page !== undefined) {
        page = ROOT.dataset.id;
      }
    }

    const gameWrapper = render({
      tag: 'div',
      className: 'game-wrapper',
      child: [this.game],
    });

    this.container = render({
      tag: 'div',
      className: 'container',
      child: [gameWrapper],
    });

    this.main = render({
      tag: 'main',
      className: 'main',
    });

    if (page === 'home') {
      this.main.append(this.moovie);
    } else if (page === 'game') {
      this.main.append(this.container);
    } else {
      console.log('result');
    }
  }

  init() {
    return this.main;
  }
}
