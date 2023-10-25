type IObject = {
  attr: string;
  sign: string;
};

export type IRender = {
  tag: string;
  className?: string;
  attributes?: IObject[];
  id?: string;
  src?: string;
  alt?: string;
  innerHTML?: string;
  child?: HTMLElement[] | null;
};

export type IData = {
  id: string;
  game: string;
  name: string;
  mp3: string;
  attachment: string;
  composition: string;
  src: string;
  alt: string;
  description: string;
};
