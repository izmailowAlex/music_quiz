import { IData } from './../../@types/types';
import { render } from './../../UI/render';
import { data } from './../../data/data';
import { state } from './../../state/state';
import { Description } from './../Description/Description';
import { stopAudio } from './../../store/store';
import audioCorrect from './../../assets/audio/winner.mp3';
import audioUnCorrect from './../../assets/audio/mistake.mp3';
import { sign } from 'crypto';

export class Options {
  private options;
  private audioCorrect;
  private audioUnCorrect;
  public dataGameArray;
  public score;
  private isCorrect;

  constructor(level: number, score: number) {
    this.dataGameArray = level;
    this.score = score;
    this.isCorrect = false;

    this.audioCorrect = render({
      tag: 'audio',
      src: audioCorrect,
      id: 'correct',
    }) as HTMLAudioElement;

    this.audioUnCorrect = render({
      tag: 'audio',
      src: audioUnCorrect,
      id: 'uncorrect',
    }) as HTMLAudioElement;

    this.options = this.create();
  }

  create() {
    const options = render({
      tag: 'div',
      className: 'options',
    });

    const optionsList = render({
      tag: 'ul',
      className: 'options-list',
      child: this.containOptionsList(),
    });

    options.append(optionsList, this.audioCorrect, this.audioUnCorrect)
    
    const listItems = Array.from(options.querySelectorAll('.options-list-item')) as HTMLElement[]

    listItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.setStateSelectedDataObject(item);

        new Description(state.selectedComposer).update();

        this.setStateSelectedComposer(item);

        if (this.isCorrect === true) return;

        this.voiceOver(item);

        this.changeIndicatorStatus(item);

        if (item.innerText === state.currentObj.name) {
          this.showAnswer();
          return;
        }
      });
    });

    return options;
  }

  private containOptionsList() {
    const listItemsArray: HTMLElement[] = []

    data[this.dataGameArray].forEach((item) => {
      const indicator = render({
        tag: 'span',
        className: 'options-list__indicator',
      });

      const text = render({
        tag: 'span',
        className: 'options-list__text',
        innerHTML: item.name,
      });

      const listItem = render({
        tag: 'li',
        className: 'options-list-item',
        child: [indicator, text],
      });
      listItemsArray.push(listItem);
    });

    return listItemsArray;
  }

  private searchSelectedObjectFromData(liItem: HTMLElement) {
    const selectedObject = data[this.dataGameArray].find((comp: IData) => {
      const array = Object.values(comp);
      if (array.includes(liItem.innerText)) {
        return true;
      }
    }) as IData;
    return selectedObject;
  }

  private setStateSelectedDataObject(item: HTMLElement) {
    return state.selectedDataObj.splice(
      0,
      1,
      this.searchSelectedObjectFromData(item)
    );
  }

  private setStateSelectedComposer(item: HTMLElement) {
    return (state.selectedComposer = item.innerText);
  }

  private voiceOver(item: HTMLElement) {
    if (!item.firstElementChild!.classList.contains('uncorrect')) {
      if (item.innerText === state.currentObj.name) {
        this.audioCorrect.play();
      } else {
        this.setScore();
        this.audioUnCorrect.play();
      }
    }
  }

  private setScore() {
    return (this.score = this.score - 1);
  }

  private setIsCorrect() {
    return (this.isCorrect = true);
  }

  private changeIndicatorStatus(item: HTMLElement) {
    const indicator = item.firstElementChild as HTMLElement;
    if (item.innerText === state.currentObj.name) {
      this.setIsCorrect();
      indicator.classList.add('correct');
    } else {
      indicator.classList.add('uncorrect');
    }
  }

  private showAnswer() {
    const mainPlayer = document.querySelector('.player') as HTMLDivElement;
    const mainPlayerAudio = document.querySelector(
      '.audio'
    ) as HTMLAudioElement;
    const description = document.querySelector('.description');
    const descriptionPlayer = description!.querySelector(
      '.player'
    ) as HTMLDivElement;
    const descriptionPlayerAudio = description!.querySelector(
      '.audio'
    ) as HTMLAudioElement;
    const scoreElem = document.querySelector('#score') as HTMLSpanElement;
    const mainImage = document.querySelector(
      '.preview-image__img'
    ) as HTMLImageElement;
    const mainTitle = document.querySelector(
      '.preview__title'
    ) as HTMLImageElement;
    const buttonNextLevel = document.querySelector(
      '.game-button'
    ) as HTMLButtonElement;
    const result = state.score + this.score;
    state.score = result;
    scoreElem.innerHTML = String(result);
    mainImage.src = state.currentObj.src;
    mainTitle.innerHTML = state.currentObj.name;
    buttonNextLevel.disabled = false;
    stopAudio(mainPlayer, mainPlayerAudio);
    stopAudio(descriptionPlayer, descriptionPlayerAudio);
  }

  init() {
    return this.options;
  }
}
