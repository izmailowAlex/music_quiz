import { render } from './../../UI/render';
import { Player } from './../Player/Player';
import { state } from './../../state/state';
import { stopAudio } from './../../store/store';

export class Description {
  private selectedComposer;
  private description;
  private descriptionElem;
  private player;

  constructor(selectedComposer: string) {
    this.selectedComposer = selectedComposer;
    this.player = new Player('description').init() as HTMLDivElement;
    this.descriptionElem = document.querySelector(
      '.description'
    ) as HTMLDivElement;
    this.description = this.create();
  }

  private create() {
    const description = render({
      tag: 'div',
      className: 'description',
    });
    if (this.selectedComposer !== '') {
      description.innerHTML = this.selectedComposer;
    } else {
      description.innerHTML =
        'Listen to the player<br/>Select answer from the list';
    }

    return description;
  }

  public update() {
    const descriptionContain = `
      <div class="description-preview">
        <div class="description-image">
          <img class="description-image__img" src="${state.selectedItemObj[0].src}" alt="${state.selectedItemObj[0].alt}"/>
        </div>
        <div class="description-wrapper">
          <h2 class="description__title">${state.selectedItemObj[0].name}</h2>
          <div class="description-attachment">${state.selectedItemObj[0].attachment}</div>
          <div class="description-music">${state.selectedItemObj[0].composition}</div>
        </div>
      </div>
      <div class="description-text"></div>
    `;

    this.descriptionElem.innerHTML = '';
    this.descriptionElem.innerHTML = descriptionContain;

    const descriptionWrapper = this.descriptionElem.querySelector(
      '.description-wrapper'
    ) as HTMLElement;
    descriptionWrapper.append(this.player);

    const mainPlayer = document.querySelector('.player') as HTMLDivElement;
    const mainPlayerAudio = document.querySelector(
      '.audio'
    ) as HTMLAudioElement;
    const mainButtonPlay = document.querySelector(
      '.player__btn'
    ) as HTMLButtonElement;

    const descriptionPlayerAudio = this.player.querySelector(
      '.audio'
    ) as HTMLAudioElement;
    const descriptionButtonPlay = this.descriptionElem.querySelector(
      '.player__btn'
    ) as HTMLButtonElement;

    mainButtonPlay.addEventListener('click', () => {
      stopAudio(this.player, descriptionPlayerAudio);
    });
    descriptionButtonPlay.addEventListener('click', () => {
      stopAudio(mainPlayer, mainPlayerAudio);
    });
  }

  init() {
    return this.description;
  }
}
