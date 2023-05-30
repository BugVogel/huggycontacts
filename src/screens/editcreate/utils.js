export const putValues = (form, contact) => {
  let newForm = [...form];
  return newForm.map(item => {
    let newItem = {
      ...item,
      value: contact[item.name],
      required:
        item.name === 'phone' || item.name === 'mobile' || item?.required,
    };

    return newItem;
  });
};

export const formIsValidated = (setFormStateValues, formStateValues) => {
  let newFormValues = [...formStateValues];
  newFormValues = newFormValues.map(input => {
    if (
      input?.required &&
      (input?.value === undefined ||
        input?.value?.trim() === '' ||
        input?.value === null)
    ) {
      return {...input, alert: true, alertEmail: false, alertMobile: false};
    } else if (
      //Email validation
      input?.name === 'email' &&
      !input?.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      return {...input, alertEmail: true, alert: false, alertMobile: false};
    } else if (
      (input?.name === 'mobile' || input?.name === 'phone') &&
      (input?.value?.length >= 19 || input?.value?.length <= 9)
    ) {
      //Mobile celphone validation
      return {...input, alertEmail: false, alert: false, alertMobile: true};
    }
    return input;
  });

  setFormStateValues(newFormValues);
  if (
    newFormValues.filter(
      item => item?.alert || item?.alertEmail || item?.alertMobile,
    ).length > 0
  ) {
    return false;
  }

  return true;
};
