import { IData } from './../../@types/types';
import { render } from './../../UI/render';
import { data } from './../../data/data';
import { state } from './../../state/state';
import { Description } from './../Description/Description';

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
        const selectedObject = data[this.dataGameArray].find((comp: IData) => {
          const array = Object.values(comp);
          if (array.includes(item.innerText)) {
            return true;
          }
        }) as IData;
        state.selectedItemObj.splice(0, 1, selectedObject);

        state.selectedComposer = item.innerText;
        new Description(state.selectedComposer).update();
        if (!state.selectedLiElems.includes(item)) {
          state.selectedLiElems.push(item);
        } else return;
      });
    });

    return optionsList;
  }

  prepairState() {}

  init() {
    return this.options;
  }
}
