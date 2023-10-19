import { IRender } from 'src/interfaces/interfaces';

export const render = ({
  tag,
  attributes,
  className = '',
  innerHTML = '',
}: IRender): HTMLElement => {
  const elem: HTMLElement = document.createElement(tag);
  if (attributes) {
    attributes.forEach((attribute) => {
      elem.setAttribute(attribute.attr, attribute.sign);
    });
  }
  elem.classList.add(className);
  if (innerHTML) {
    elem.innerHTML = innerHTML;
  }
  return elem;
};
