import { render } from '../../UI/render';
import { headerListItems } from '../../data/data';
import { state } from '../../state/state';
import { renderLiList } from '../../store/store';

class Header {
  private header;
  private page;

  constructor(page: string) {
    this.page = page;
    this.header = render({
      tag: 'header',
      className: 'header',
      child: [this.create()],
    });
  }

  private create() {
    let container = render({
      tag: 'div',
      className: 'container',
    });

    const homeContain = `
      <div class="header-wrapper">
        <div class="header-up">
          <div class="header-logo">
            <a class="header-logo__link" href="./index.html"></a>
          </div>
          <nav class="header-nav">
            <div class="header-nav__title">
              <a class="header-nav__link" href="./game.html">
                Start the quiz
              </a>
            </div>
          </nav>
        </div>
      </div>
    `;
    const gameContain = `
      <div class="header-wrapper">
        <div class="header-up">
          <div class="header-logo">
            <a class="header-logo__link" href="./index.html"></a>
          </div>
          <div class="header-score">
            Score: <span id="score">${state.score}</span>
          </div>
        </div>
        <div class="header-nav">
          <ul class="header-nav__list">${renderLiList(
            headerListItems,
            state.level
          )}</ul>
        </div>
      </div>
    `;
    const resultContain = `
      <div class="header-wrapper">
        <div class="header-up">
          <div class="header-logo">
            <a class="header-logo__link" href="./index.html"></a>
          </div>
          <div class="header-score">
            Score: <span id="score">${
              this.getLocal() !== null ? this.getLocal().score : '0'
            }</span>
          </div>
        </div>
        <div class="header-nav">
          <ul class="header-nav__list">${renderLiList(
            headerListItems,
            state.level
          )}</ul>
        </div>
      </div>
    `;

    if (this.page === 'home') {
      container.innerHTML = homeContain;
    } else if (this.page === 'game') {
      container.innerHTML = gameContain;
    } else {
      container.innerHTML = resultContain;
    }

    return container;
  }

  public update() {
    const header = document.querySelector('.header') as HTMLElement;
    header.innerHTML = '';
    header.append(this.create());
  }

  private getLocal() {
    const scoreItem = JSON.parse(localStorage.getItem('winner')!);
    return scoreItem;
  }

  init() {
    return this.header;
  }
}

export default Header;
