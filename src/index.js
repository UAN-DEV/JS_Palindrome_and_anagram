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
    if (str.at(i).toLowerCase() !== str.at(-i-1).toLowerCase()) return false;
  }
  return true;
}

console.log(isPalindromeStrict("use stRictcIrts eSu"));

// ** 3. Нужно написать функцию, которая будет определять, являются ли две строки анограммами или нет.

const isAnagramm = (str1, str2) =>
  [...str1.toLowerCase()].sort().join("") ===
  [...str2.toLowerCase()].sort().join("");

console.log(isAnagramm("Топор", "Ропот"));
console.log(isAnagramm("казан", "наказ"));

// *** 4. Функция для определения анаграммы не должна использовать методы строк и массивов.
// Допускается использование таких методов строк как replace(), toLowerCase() или toUpperCase().
// Также допускается использование регулярных выражений.

function isAnagrammStrict(str1, str2) {
  if (str1.length !== str2.length) return false;

  const objWithLetters = {};
  for (const letter of str1.toLowerCase()) {
    Object.hasOwn(objWithLetters, letter) ? objWithLetters[letter]++ : (objWithLetters[letter] = 1);
  }

  for (const letter of str2.toLowerCase()) {
    if (!Object.hasOwn(objWithLetters, letter)) return false;
    objWithLetters[letter]--;
  }

  for (const letter in objWithLetters) if (objWithLetters[letter] !== 0) return false;

  return true;
}

console.log(isAnagrammStrict("Топор не наказ", "Ропот не каЗан"));

// *** 5. Функция для определения анаграммы без учёта знаков препинания (только буквы и цифры)

function isAnagrammLettesAndNumbers(str1, str2) {
  const stringOfLetter1 = str1.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
  const stringOfLetter2 = str2.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");

  if (stringOfLetter1.length !== stringOfLetter2.length) return false;

  const objWithLetters = {};
  for (const letter of stringOfLetter1) {
    Object.hasOwn(objWithLetters, letter) ? objWithLetters[letter]++ : (objWithLetters[letter] = 1);
  }

  for (const letter of stringOfLetter2) {
    if (!Object.hasOwn(objWithLetters, letter)) return false;
    objWithLetters[letter]--;
  }

  for (const letter in objWithLetters) if (objWithLetters[letter] !== 0) return false;

  return true;
}

console.log(isAnagrammLettesAndNumbers("1 Топор, не наказ!", "Ропот - не 1-а Знак?"));
