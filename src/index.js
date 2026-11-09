"use strict";

// 1. Нужно написать функцию, которая будет определять, является ли строка (слово или фраза) палиндромом или нет.
// Строка передается в аргументы функции. Функция не должна зависить от
// регистра букв и должна возвращать true или false

const isPalindrome = (str) =>
  str.toLowerCase() === [...str].reverse().join("").toLowerCase();

console.log(isPalindrome("use stRictcIrts eSu"));

// * 2. Функция для определения палиндрома не должна использовать методы строк и массивов.
// Допускается использование таких методов строк как replace(), toLowerCase() или toUpperCase().
// Также допускается использование регулярных выражений.
function isPalindromeStrict(str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase())
      return false;
  }
  return true;
}

console.log(isPalindromeStrict("use stRictcIrts eSu"));

// ** 3. Нужно написать функцию, которая будет определять, являются ли две строки анограммами или нет.

const isAnagramm = (str1, str2) =>
  [...str1.toLowerCase()].sort().join("") ===
  [...str2.toLowerCase()].sort().join("");

console.log(isAnagramm('Топор', "Ропот"));
console.log(isAnagramm('казан', "наказ"));
