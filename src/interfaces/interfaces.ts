interface IObject {
  attr: string;
  sign: string;
}

export interface IRender {
  tag: string;
  attributes?: IObject[];
  className?: string;
  innerHTML?: string;
  child?: HTMLElement | null;
}
