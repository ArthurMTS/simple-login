const numbers = /(?=.*\d)/g;
const name = /[^\w âÂãÃôÔõÕáÁóÓíÍìÌéÉèÈ]/g;
const special = /(?=.*\W)/g;
const upperCase = /(?=.*[A-Z])/g;
const lowerCase = /(?=.*[a-z])/g;
const sequenceLetters = /[A-Za-z]{2}/g;
const sequenceNumbers = /\d{2}/g;

export const validateLowerCase = (value: string) =>
  lowerCase.test(value);

export const validateUpperCase = (value: string) =>
  upperCase.test(value);

export const validateSpecial = (value: string) =>
  special.test(value);

export const validateNumbers = (value: string) =>
  numbers.test(value);

export const validateLowerUpperNumber = (value: string) =>
  numbers.test(value) && lowerCase.test(value) && upperCase.test(value);

export const validateLength = (value: string) =>
  value.length > 7 && value.length < 17;

export const validateSequenceLength = (value: string) => {
  if (value === "") return false;
  return !value.match(sequenceLetters) && !value.match(sequenceNumbers);
}

export const validateEmail = (email: string) => {
  if (email === "") return true;
  const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
  return re.test(email);
}

export const validatePassword = (password: string) => {
  if (password === "") return true;
  return (
    validateLength(password) &&
    validateSequenceLength(password) &&
    validateLowerUpperNumber(password) &&
    validateSpecial(password)
  );
};

export const validateName = (value: string) =>
  !value.match(name) && !numbers.test(value);