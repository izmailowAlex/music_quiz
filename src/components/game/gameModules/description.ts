import { render } from '../../../UI/render';
import { data } from './../../data/data';

export class Description {
  private description;

  constructor() {
    this.description = render({
      tag: 'div',
      className: 'description',
      innerHTML: 'Listen to the player<br/>Select answer from the list',
    });
  }

  init() {
    return this.description;
  }
}
