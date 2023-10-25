import { render } from '../../UI/render';

export class Header {
  private header;

  constructor() {
    const ROOT = document.querySelector('#root');
    let page: string | undefined = '';
    let headerContain = '';

    if (ROOT && ROOT instanceof HTMLElement) {
      if (page !== undefined) {
        page = ROOT.dataset.id;
      }
    }
    if (page === 'home') {
      headerContain = `
        <div class="header-up">
          <div class="header-logo"></div>
          <div class="header-nav">
            <div class="header-nav__title">
              <a class="header-nav__link" href="./game.html">
                Start the quiz
              </a>
            </div>
          </div>
        </div>
      `;
    } else if (page === 'game') {
      headerContain = `
        <div class="header-up">
          <div class="header-logo"></div>
          <div class="header__score">Score: <span id="score">0</span></div>
        </div>
        <nav class="header-nav">
          <ul class="header-nav__list">
            <li class="header-list__item">Classic</li>
            <li class="header-list__item">Russian classic</li>
            <li class="header-list__item">Romantic</li>
            <li class="header-list__item">Pop</li>
            <li class="header-list__item">Rock</li>
            <li class="header-list__item">Jazz</li>
          </ul>
        </nav>
      `;
    } else {
      headerContain = '';
    }

    const headerWrapper = render({
      tag: 'div',
      className: 'header-wrapper',
      innerHTML: headerContain,
    });

    const container = render({
      tag: 'div',
      className: 'container',
      child: [headerWrapper],
    });

    this.header = render({
      tag: 'header',
      className: 'header',
      child: [container],
    });
  }

  init() {
    return this.header;
  }
}
