#!/usr/bin/env node
import runGame from '../src/index.js';

const description = 'What is the result of the expression?';

const getRoundData = () => {
  const operators = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 20);
  const num2 = Math.floor(Math.random() * 20);
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  let result;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;

  return [question, result];
};

runGame(description, getRoundData);
