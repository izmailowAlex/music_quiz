import { render } from './../UI/render';
import { headerListItems } from './../components/data/data';

export class CreateHeaderWrapper {
  private page;
  private gameLevel;
  private headerWrapper;
  private arrListItems: HTMLElement[];

  constructor(level: string) {
    const ROOT = document.querySelector('#root');
    this.gameLevel = level;
    this.arrListItems = [];

    if (ROOT && ROOT instanceof HTMLElement) {
      if (this.page !== undefined) {
        this.page = ROOT.dataset.id;
      }
    }

    if (this.page === 'home') {
      const headerLogo = render({
        tag: 'div',
        className: 'header-logo',
      });

      const headerNavLink = render({
        tag: 'a',
        className: 'header-nav__link',
        attributes: [{ attr: 'href', sign: './game.html' }],
        innerHTML: 'Start the quiz',
        child: [],
      });

      const headerNavTitle = render({
        tag: 'div',
        className: 'header-nav__title',
        child: [headerNavLink],
      });

      const headerNav = render({
        tag: 'div',
        className: 'header-nav',
        child: [headerNavTitle],
      });

      const headerUp = render({
        tag: 'div',
        className: 'header-up',
        child: [headerLogo, headerNav],
      });

      this.headerWrapper = render({
        tag: 'div',
        className: 'header-wrapper',
        child: [headerUp],
      });

      // this.headerContain = `
      //   <div class="header-up">
      //     <div class="header-logo"></div>
      //     <div class="header-nav">
      //       <div class="header-nav__title">
      //         <a class="header-nav__link" href="./game.html">
      //           Start the quiz
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // `;
    } else {
      const headerLogo = render({
        tag: 'div',
        className: 'header-logo',
      });

      const headerScoreSpan = render({
        tag: 'span',
        id: 'score',
        innerHTML: '0',
      });

      const headerScore = render({
        tag: 'div',
        className: 'header-score',
        innerHTML: 'Score: ',
        child: [headerScoreSpan],
      });

      headerListItems.forEach((item, id) => {
        let className = 'header-list__item';
        if (String(id + 1) === this.gameLevel) {
          className = 'header-list__item active';
        }
        const listItem = render({
          tag: 'li',
          className: className,
          innerHTML: item,
        });
        this.arrListItems.push(listItem);
      });

      const headerNavList = render({
        tag: 'ul',
        className: 'header-nav__list',
        child: this.arrListItems,
      });

      const headerUp = render({
        tag: 'div',
        className: 'header-up',
        child: [headerLogo, headerScore],
      });

      const headerNav = render({
        tag: 'nav',
        className: 'header-nav',
        child: [headerNavList],
      });

      this.headerWrapper = render({
        tag: 'div',
        className: 'header-wrapper',
        child: [headerUp, headerNav],
      });

      // this.createListItems();

      // this.headerContain = `
      //   <div class="header-up">
      //     <div class="header-logo"></div>
      //     <div class="header-score">Score: <span id="score">0</span></div>
      //   </div>
      //   <nav class="header-nav">
      //     <ul class="header-nav__list">
      //       <li class="header-list__item">Classic</li>
      //       <li class="header-list__item">Russian classic</li>
      //       <li class="header-list__item">Romantic</li>
      //       <li class="header-list__item">Pop</li>
      //       <li class="header-list__item">Rock</li>
      //       <li class="header-list__item">Jazz</li>
      //     </ul>
      //   </nav>
      // `;
    }
  }

  init() {
    return this.headerWrapper;
  }
}
