import { render } from './../../UI/render';
import { data } from './../../data/data';
import { state } from './../../state/state';

export class Options {
  private static root: HTMLElement | null = document.querySelector('#root');
  private options;
  public dataGameArray;
  public listItemsArray: HTMLElement[];

  constructor(level: number) {
    this.dataGameArray = level;
    this.listItemsArray = [];

    this.options = render({
      tag: 'div',
      className: 'options',
      child: [this.create()],
    });
  }

  create() {
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
      this.listItemsArray.push(listItem);
    });

    const optionsList = render({
      tag: 'ul',
      className: 'options-list',
      child: this.listItemsArray,
    });

    this.listItemsArray.forEach((item) => {
      item.addEventListener('click', () => {
        state.selectedComposer = item.innerText;
        if (!state.selectedElems.includes(item)) {
          state.selectedElems.push(item);
        } else return;
      });
    });

    return optionsList;
  }

  init() {
    return this.options;
  }
}
