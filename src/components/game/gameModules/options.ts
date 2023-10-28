import { render } from '../../../UI/render';
import { data } from './../../data/data';

export class Options {
  private options;
  private optionsList;
  public dataGameArray;

  constructor(level: number) {
    this.dataGameArray = level;

    this.optionsList = render({
      tag: 'ul',
      className: 'options-list',
    });

    this.options = render({
      tag: 'div',
      className: 'options',
      child: [this.optionsList],
    });
    this.createListOptions(this.optionsList);
  }

  createListOptions(list: HTMLElement) {
    data[this.dataGameArray].forEach((item) => {
      const indicator = render({
        tag: 'span',
        className: 'options-list__indicator',
      });

      const listItem = render({
        tag: 'li',
        className: 'options-list__item',
        innerHTML: item.name,
        child: [indicator],
      });
      list.append(listItem);
    });
  }

  init() {
    return this.options;
  }
}
