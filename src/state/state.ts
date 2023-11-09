import { IState } from './../@types/types';

export const state: IState = {
  level: 0,
  score: 0,
  currentObj: {
    id: '',
    game: '',
    name: '',
    mp3: '',
    attachment: '',
    composition: '',
    src: '',
    alt: '',
    description: '',
  },
  selectedLiElems: [],
  selectedDataObj: [],
  selectedComposer: '',
};
