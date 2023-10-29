import { render } from '../../UI/render';
import { state } from './../../state/state';
import play from './../../assets/img/play.png';
import pause from './../../assets/img/pause.png';

export class Player {
  private player;
  private playerAudio;
  // private timeCurrent: string;
  private playerButton;
  public playerProgress;
  public playerProgressBar;

  constructor(part: string) {
    this.playerAudio = render({
      tag: 'audio',
      attributes: [{ attr: 'src', sign: state.currentObj.mp3 }],
      id: part,
    }) as HTMLAudioElement;

    this.playerButton = render({
      tag: 'button',
      className: 'player__btn',
      id: 'play',
    });

    this.playerProgressBar = render({
      tag: 'input',
      className: 'player-progress-bar',
      attributes: [
        { attr: 'type', sign: 'range' },
        { attr: 'min', sign: '0' },
        { attr: 'name', sign: 'input' },
        { attr: 'value', sign: '0' },
      ],
    });

    this.playerProgress = render({
      tag: 'div',
      className: 'player-progress',
      child: [this.playerProgressBar],
    });
    const playerTimeCurrent = render({
      tag: 'div',
      className: 'player-time-current',
    });
    setInterval(() => {
      playerTimeCurrent.innerHTML = this.timePrepair(
        this.playerAudio.currentTime
      );
    }, 100);

    const playerTimeFull = render({
      tag: 'div',
      className: 'player-time-full',
    });
    setTimeout(() => {
      playerTimeFull.innerHTML = this.timePrepair(this.playerAudio.duration);
    }, 100);

    const playerTimeField = render({
      tag: 'div',
      className: 'player-time',
      child: [playerTimeCurrent, playerTimeFull],
    });

    const playerWrapper = render({
      tag: 'div',
      className: 'player-wrapper',
      child: [this.playerProgress, playerTimeField],
    });

    this.player = render({
      tag: 'div',
      className: 'player',
      child: [this.playerButton, playerWrapper],
    });
    this.player.append(this.playerAudio);

    this.playerButton.addEventListener('click', () => {
      if (this.checkStatusAudio() !== true) {
        this.playAudio();
      } else {
        this.stopAudio();
      }
    });
    this.playerProgress.addEventListener('click', (event) => {
      this.setProgress(event);
    });
    this.playerAudio.addEventListener('timeupdate', (event) => {
      this.updateProgress(event);
    });
    this.playerAudio.addEventListener('ended', () => {
      this.stopAudio();
    });
  }

  playAudio() {
    this.player.classList.toggle('play');
    this.playerAudio.play();
  }

  stopAudio() {
    this.player.classList.toggle('play');
    this.playerAudio.pause();
  }

  checkStatusAudio() {
    return Boolean(this.player.classList.contains('play'));
  }

  updateProgress(e: Event) {
    const target = e.target as HTMLAudioElement;
    const progressBar = this.playerProgressBar as HTMLInputElement;
    const { duration, currentTime } = target;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.max = String(Math.ceil(duration));
    progressBar.style.width = `${progressPercent}%`;
  }

  setProgress(e: MouseEvent) {
    const target = e.currentTarget as HTMLDivElement;
    const width = target.clientWidth;
    const clickX = e.offsetX;
    const duration = this.playerAudio.duration;

    this.playerAudio.currentTime = (clickX / width) * duration;
  }

  timePrepair(time: number) {
    let min = String(Math.floor(time / 60));
    if (Number(min) < 10) {
      min = `0${min}`;
    }
    let sec = String(Math.floor(time % 60));
    if (Number(sec) < 10) {
      sec = `0${sec}`;
    }
    return `${min}:${sec}`;
  }

  init() {
    return this.player;
  }
}
