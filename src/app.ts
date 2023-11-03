import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { data } from './data/data';
import { state } from './state/state';

export default class App {
  private static root: HTMLElement | null = document.querySelector('#root');
  public level;
  public hiddenComposer;
  public selectedComposer;

  constructor() {
    this.level = state.level;
    this.hiddenComposer = data[this.level][this.random() - 1];
    this.selectedComposer = state.selectedComposer;
    state.currentObj.id = this.hiddenComposer.id;
    state.currentObj.game = this.hiddenComposer.game;
    state.currentObj.name = this.hiddenComposer.name;
    state.currentObj.mp3 = this.hiddenComposer.mp3;
    state.currentObj.attachment = this.hiddenComposer.attachment;
    state.currentObj.composition = this.hiddenComposer.composition;
    state.currentObj.src = this.hiddenComposer.src;
    state.currentObj.alt = this.hiddenComposer.alt;
    state.currentObj.description = this.hiddenComposer.description;
  }

  static renderNewPage(root: Element | null) {
    let page;
    if (root && root instanceof HTMLElement) {
      page = root.dataset.id;
    }
    const header = new Header(page!).init();
    const footer = new Footer().init();
    const main = new Main(page!).init();

    if (root) {
      root.append(header);
      if (main) {
        const mainBlock = main;
        root.append(mainBlock);
      }
      root.append(footer);
    }
  }

  random() {
    const numId = Math.ceil(Math.random() * 6);
    return numId;
  }

  render() {
    App.renderNewPage(App.root);
  }
}
