export const getFirstIndexs = listJSON => {
  let firstLetter = '';
  return listJSON
    .map((contact, index) => {
      const contactFirstLetter = contact.name.trim()[0].toUpperCase();
      if (firstLetter === '' || contactFirstLetter !== firstLetter) {
        firstLetter = contactFirstLetter;
        return index;
      }
    })
    .filter(number => number != undefined);
};
