interface IObject {
  attr: string;
  sign: string;
}

export interface IRender {
  tag: string;
  className?: string;
  attributes?: IObject[];
  id?: string;
  src?: string;
  alt?: string;
  innerHTML?: string;
  child?: HTMLElement[] | null;
}
