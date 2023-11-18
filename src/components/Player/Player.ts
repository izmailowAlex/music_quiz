import { render } from './../../UI/render';
import { state } from './../../state/state';

export class Player {
  private part;
  private player;
  private playerAudio;
  private currentAudioTrack;
  private playerButton;
  public playerProgress;
  public playerProgressBar;
  public playerTimeCurrent;
  public playerTimeFull;

  constructor(part: string) {
    this.part = part;
    if (part !== 'main' && state.selectedDataObj.length > 0) {
      this.currentAudioTrack = state.selectedDataObj[0].mp3;
    } else {
      this.currentAudioTrack = state.currentObj.mp3;
    }
    this.player = this.create();
    this.playerAudio = this.player.querySelector('.audio') as HTMLAudioElement;
    this.playerButton = this.player.querySelector(
      '.player__btn'
    ) as HTMLButtonElement;
    this.playerTimeCurrent = this.player.querySelector('.player-time-current');
    this.playerTimeFull = this.player.querySelector('.player-time-full');
    this.playerTimeFull = this.player.querySelector('.player-time-full');
    this.playerProgress = this.player.querySelector(
      '.player-progress'
    ) as HTMLElement;
    this.playerProgressBar = this.player.querySelector('.player-progress-bar');

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

  create() {
    const playerContain = `
      <button class="player__btn" id="play"></button>
      <div class="player-wrapper">
        <div class="player-progress">
          <input class="player-progress-bar" type="range" min="0" name="input" value="0"/>
        </div>
        <div class="player-time">
          <div class="player-time-current">${this.updateCurrentTime()}</div>
          <div class="player-time-full">${this.updateFullTime()}</div>
        </div>
      </div>
      <audio class="audio" src="${this.currentAudioTrack}" id="${
        this.part
      }"></audio>
    `;

    const player = render({
      tag: 'div',
      className: 'player',
      innerHTML: playerContain,
    });

    return player;
  }

  updateCurrentTime() {
    return setInterval(() => {
      const currentTime = this.playerAudio.currentTime;
      this.playerTimeCurrent!.innerHTML = this.timePrepair(currentTime);
    }, 100);
  }

  updateFullTime() {
    return setTimeout(() => {
      const duration = this.playerAudio.duration;
      if (Number.isFinite(duration)) {
        this.playerTimeFull!.innerHTML = this.timePrepair(duration);
      } else this.updateFullTime();
    }, 100);
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
