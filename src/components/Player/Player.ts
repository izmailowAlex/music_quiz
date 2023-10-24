import { render } from '../../UI/render';

export class Player {
  private player;

  constructor() {
    const playerButton = render({
      tag: 'button',
      className: 'player__btn',
      id: 'play',
    });

    const playerProgressBar = render({
      tag: 'input',
      className: 'player-progress-bar',
      attributes: [
        { attr: 'type', sign: 'range' },
        { attr: 'min', sign: '0' },
        { attr: 'max', sign: '100' },
        { attr: 'name', sign: 'input' },
        { attr: 'value', sign: '0' },
      ],
    });

    const playerProgress = render({
      tag: 'div',
      className: 'player-progress',
      child: [playerProgressBar],
    });

    const playerTimeCurrent = render({
      tag: 'div',
      className: 'player-time-current',
      innerHTML: '00:00',
    });

    const playerTimeFull = render({
      tag: 'div',
      className: 'player-time-full',
      innerHTML: '00:00',
    });

    const playerTime = render({
      tag: 'div',
      className: 'player-time',
      child: [playerTimeCurrent, playerTimeFull],
    });

    const playerWrapper = render({
      tag: 'div',
      className: 'player-wrapper',
      child: [playerProgress, playerTime],
    });

    this.player = render({
      tag: 'div',
      className: 'player',
      child: [playerButton, playerWrapper],
    });
  }

  init() {
    return this.player;
  }
}
