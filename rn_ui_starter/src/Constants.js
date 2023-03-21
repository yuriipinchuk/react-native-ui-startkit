// Regular Expressions
const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;
// eslint-disable-next-line no-useless-escape
const regexForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const REGEX = {
  name: regexForNames,
  phone: regexForPhoneNumber,
  email: regexForEmail,
};

const Constants = {
  regEx: REGEX,
  // add more constants here
};

export default Constants;