import { video } from '../video/video';
import { render } from '../../UI/render';

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
