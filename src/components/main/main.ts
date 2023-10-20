import { render } from '../../UI/render';
import { video } from '../video/video';

const ROOT = document.querySelector('#root');

export const main = render({
  tag: 'main',
  className: 'main',
});

if (ROOT && ROOT instanceof HTMLElement) {
  if (ROOT.dataset.id === 'home') {
    main.append(video);
  } else if (ROOT.dataset.id === 'game') {
    console.log('game');
  } else {
    console.log('result');
  }
}
