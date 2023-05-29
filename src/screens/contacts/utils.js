export const orderListJSON = listJSON => {
  let listOrded = [...listJSON];

  listOrded.sort(({name: name1}, {name: name2}) => {
    if (name1.toUpperCase() > name2.toUpperCase()) {
      return 1;
    } else if (name1.toUpperCase() < name2.toUpperCase()) {
      return -1;
    }
    return 0;
  });

  return listOrded;
};
