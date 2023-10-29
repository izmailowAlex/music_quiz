import { render } from '../../UI/render';
import { CreateHeaderWrapper } from './../../store/store';
import { state } from './../../state/state';

export class Header {
  private header;
  private headerWrapper;

  constructor() {
    this.headerWrapper = new CreateHeaderWrapper(state.level).init();

    const container = render({
      tag: 'div',
      className: 'container',
      child: [this.headerWrapper],
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
