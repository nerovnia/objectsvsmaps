'use strict';

const randomNumber = (number) => Math.floor(Math.random() * number);

const fillKeys = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Symbol());
  }
  return arr;
}
module.exports = {
  randomNumber,
  fillKeys,
};