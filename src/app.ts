import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default class App {
  private static root: HTMLElement | null = document.querySelector('#root');

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

  render() {
    App.renderNewPage(App.root);
  }
}
