import './css/style.css';
import video_view from './assets/video/video_view.mp4';
console.log(video_view);

function add(): void {
  const VIDEO = document.createElement('video');
  VIDEO.classList.add('video');
  VIDEO.setAttribute('autoplay', 'autoplay');
  VIDEO.setAttribute('muted', 'true');
  VIDEO.setAttribute('loop', 'true');

  const SOURCE = document.createElement('source');
  SOURCE.setAttribute('src', `${video_view}`);
  SOURCE.setAttribute('type', 'video/mp4');

  const MAIN = document.querySelector('.main');

  VIDEO?.append(SOURCE);
  MAIN?.append(VIDEO);
}
add();
