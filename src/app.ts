import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

export class App {
  private root;
  private header;
  private main;
  private footer;

  constructor() {
    this.root = document.querySelector('#root');
    this.header = new Header().init();
    this.main = new Main().init();
    this.footer = new Footer().init();
  }

  init() {
    if (this.root && this.root instanceof HTMLElement) {
      this.root.append(this.header);
      this.root.append(this.main);
      this.root.append(this.footer);
    }
    return this.root;
  }
}
