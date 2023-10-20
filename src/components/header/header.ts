import { render } from '../../UI/render';

const headerContain = `
  <div class="container">
    <div class="header-logo">
    </div>
    <div class="header-nav">
      <div class="header-nav__title">
        <a class="header-nav__link" href="./game.html">
          Start the quiz
        </a>
      </div>
    </div>
  </div>
`;

export const header = render({
  tag: 'header',
  className: 'header',
  innerHTML: headerContain,
});
