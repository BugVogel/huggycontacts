export const putMaskNumber = numberText => {
  const textJustNumber = numberText.replace(/[^0-9]/g, '');
  const maskedText =
    (numberText !== '' ? '+' : '') +
    textJustNumber.slice(0, 2) +
    (numberText.length >= 2 ? ' ' : '') +
    textJustNumber.slice(2, textJustNumber.length);

  return maskedText;
};
