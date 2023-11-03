import { render } from './../../UI/render';

export class Description {
  private description;
  private selectedComposer;

  constructor(selectedComposer: string) {
    this.selectedComposer = selectedComposer;
    this.description = render({
      tag: 'div',
      className: 'description',
      innerHTML: this.create(),
    });
  }

  private create() {
    if (this.selectedComposer !== '') {
      return this.selectedComposer;
    } else {
      return 'Listen to the player<br/>Select answer from the list';
    }
  }

  init() {
    return this.description;
  }
}
