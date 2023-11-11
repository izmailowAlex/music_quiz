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
          <div class="header-logo"></div>
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
          <div class="header-logo"></div>
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

    if (this.page === 'home') {
      container.innerHTML = homeContain;
    } else {
      container.innerHTML = gameContain;
    }

    return container;
  }

  public update() {
    const header = document.querySelector('.header') as HTMLElement;
    header.innerHTML = '';
    header.append(this.create());
  }

  init() {
    return this.header;
  }
}

export default Header;
