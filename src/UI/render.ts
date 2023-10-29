import { IRender } from 'src/@types/types';

export const render = ({
  tag,
  className = '',
  attributes,
  id = '',
  src = '',
  alt = '',
  innerHTML = '',
  child = [],
}: IRender): HTMLElement => {
  const elem: HTMLElement = document.createElement(tag);
  const classN: string[] = className.split(' ');

  if (className !== '') {
    if (classN.length > 0) {
      classN.forEach((item) => {
        elem.classList.add(item);
      });
    }
  }

  if (attributes) {
    attributes.forEach((attribute) => {
      elem.setAttribute(attribute.attr, attribute.sign);
    });
  }

  if (id) {
    elem.id = id;
  }

  if (src) {
    elem.setAttribute('src', src);
  }

  if (alt) {
    elem.setAttribute('alt', alt);
  }

  if (innerHTML) {
    elem.innerHTML = innerHTML;
  }

  if (child) {
    child.forEach((item) => {
      elem.append(item);
    });
  }

  return elem;
};
