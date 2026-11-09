"use strict";

// 1. Строка передается в аргументы функции. Функция не должна зависить от регистра букв и должна возвращать true или false
function isPalindrome(str) {
  console.log(str.length);
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) return false;
  }
  return true;
}

console.log(isPalindrome("use strictjtcirts esu"));

