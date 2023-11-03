export const renderLIElem = (inner: string, classN: string) => {
  return `<li class="${classN}">${inner}</li>`;
};

export const renderLiList = (headerListItems: string[], level: number) => {
  const liList = headerListItems.reduce(
    (acc: string, item: string, index: number) =>
      acc +
      renderLIElem(
        item,
        index === level ? 'header-list__item' : 'header-list__item active'
      ),
    ''
  );
  return liList;
};
