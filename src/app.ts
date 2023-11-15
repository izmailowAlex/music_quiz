import Header from './components/header/header';
import Main from './components/main/main';

export default class App {
  private static root: HTMLElement | null = document.querySelector('#root');

  static renderNewPage(root: Element | null) {
    let page;
    if (root && root instanceof HTMLElement) {
      page = root.dataset.id;
    }
    const header = new Header(page!).init();
    const main = new Main(page!).init();

    if (root) {
      root.append(header);
      if (main) {
        const mainBlock = main;
        root.append(mainBlock);
      }
    }
  }

  render() {
    App.renderNewPage(App.root);
  }
}
