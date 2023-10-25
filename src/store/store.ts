import { render } from './../UI/render';
import { headerListItems } from './../components/data/data';

export class CreateHeaderWrapper {
  private gameLevel;
  private headerWrapper;
  private arrListItems: HTMLElement[];

  constructor(level: string) {
    const ROOT = document.querySelector('#root');
    let page: string | undefined = '';
    this.gameLevel = level;
    this.arrListItems = [];

    if (ROOT && ROOT instanceof HTMLElement) {
      if (page !== undefined) {
        page = ROOT.dataset.id;
      }
    }

    if (page === 'home') {
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
    }
  }

  init() {
    return this.headerWrapper;
  }
}
