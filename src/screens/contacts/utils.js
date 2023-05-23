export const getFirstIndexs = listJSON => {
  let firstLetter = '';
  return listJSON
    .map((contact, index) => {
      const contactFirstLetter = contact.name.trim()[0];
      if (firstLetter === '' || contactFirstLetter !== firstLetter) {
        firstLetter = contactFirstLetter;
        return index;
      }
    })
    .filter(number => number != undefined);
};

export const orderListJSON = listJSON => {
  let listOrded = [...listJSON];

  listOrded.sort(({name: name1}, {name: name2}) => {
    if (name1 > name2) {
      return 1;
    } else if (name1 < name2) {
      return -1;
    }
    return 0;
  });

  return listOrded;
};