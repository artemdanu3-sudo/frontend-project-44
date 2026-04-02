#!/usr/bin/env node

import runGame from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  const question = `${num1} ${num2}`;
  
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

runGame(description, getRoundData);
