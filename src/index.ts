import './css/style.css';
import { header } from './components/header/header';
import { main } from './components/main/main';
import { footer } from './components/footer/footer';

const ROOT = document.querySelector('#root');
if (ROOT && ROOT instanceof HTMLElement) {
  ROOT.append(header);
  ROOT.append(main);
  ROOT.append(footer);
}
