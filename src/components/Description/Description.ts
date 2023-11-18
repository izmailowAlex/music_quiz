import { render } from './../../UI/render';
import { Player } from '../Player/Player';
import { state } from './../../state/state';
import { stopAudio } from './../../store/store';

export class Description {
  private description;
  private descriptionElem;
  private selectedDataObj;
  private player;

  constructor() {
    this.selectedDataObj = state.selectedDataObj[0];
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
      innerHTML: 'Listen to the player<br/>Select answer from the list',
    });

    return description;
  }

  public update() {
    const descriptionContain = `
      <div class="description-preview">
        <div class="description-image">
          <img class="description-image__img" src="${this.selectedDataObj.src}" alt="${this.selectedDataObj.alt}"/>
        </div>
        <div class="description-wrapper">
          <h2 class="description__title">${this.selectedDataObj.name}</h2>
          <div class="description-attachment">${this.selectedDataObj.attachment}</div>
          <div class="description-music">${this.selectedDataObj.composition}</div>
        </div>
      </div>
      <div class="description-text">${this.selectedDataObj.description}</div>
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
