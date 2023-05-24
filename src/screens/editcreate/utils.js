export const putValues = (form, contact) => {
  let newForm = [...form];
  return form.map((item, index) => {
    let newItem = {...item, value: contact[item.name]};
    return newItem;
  });
};
