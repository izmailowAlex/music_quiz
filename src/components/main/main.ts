import { render } from '../../UI/render';
import { Moovie } from '../Moovie/Moovie';

export class Main {
  private main;
  private moovie;

  constructor() {
    const ROOT = document.querySelector('#root');
    this.moovie = new Moovie().init();

    let page: string | undefined = '';
    let mainContain = '';

    if (ROOT && ROOT instanceof HTMLElement) {
      if (page !== undefined) {
        page = ROOT.dataset.id;
      }
    }

    const mainWrapper = render({
      tag: 'div',
      className: 'main-wrapper',
      innerHTML: mainContain,
    });

    const container = render({
      tag: 'div',
      className: 'container',
      child: mainWrapper,
    });

    this.main = render({
      tag: 'main',
      className: 'main',
      child: container,
    });

    if (page === 'home') {
      this.main.append(this.moovie);
    } else if (page === 'game') {
      console.log('game');
    } else {
      console.log('result');
    }
  }

  init() {
    return this.main;
  }
}
