import React, { useState } from 'react';
import './Calculator.css';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [currentOperation, setCurrentOperation] = useState('');
  const [previousOperand, setPreviousOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(true);
  const [lastButtonWasOperator, setLastButtonWasOperator] = useState(false);

  const calculateResult = () => {
    const current = parseFloat(display);
    if (previousOperand === null) {
      return current;
    }
    switch (operator) {
      case '+':
        return previousOperand + current;
      case '-':
        return previousOperand - current;
      case '×':
        return previousOperand * current;
      case '÷':
        return previousOperand / current;
      default:
        return current;
    }
  };

  const onDigitButtonClick = (digit) => {
    if (waitingForOperand || display === '0') {
      setDisplay(digit);
      setCurrentOperation(lastButtonWasOperator ? currentOperation + digit : digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display + digit);
      setCurrentOperation(currentOperation + digit);
    }
    setLastButtonWasOperator(false);
  };

  const onDecimalPointButtonClick = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setCurrentOperation(lastButtonWasOperator ? currentOperation + '0.' : '0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setCurrentOperation(currentOperation + '.');
    }
    setLastButtonWasOperator(false);
  };

  const onOperatorButtonClick = (nextOperator) => {
    const inputValue = parseFloat(display);
    
    if (previousOperand === null) {
      setPreviousOperand(inputValue);
    } else if (operator) {
      const result = calculateResult();
      setPreviousOperand(result);
      setDisplay(String(result));
      setCurrentOperation(String(result));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
    setCurrentOperation(currentOperation + ' ' + nextOperator + ' ');
    setLastButtonWasOperator(true);
  };

  const onEqualsButtonClick = () => {
    if (!operator) return;

    const result = calculateResult();
    setDisplay(String(result));
    setCurrentOperation(currentOperation + ' = ' + result);
    setPreviousOperand(null);
    setOperator(null);
    setWaitingForOperand(true);
    setLastButtonWasOperator(false);
  };

  const onAllClearButtonClick = () => {
    setDisplay('0');
    setCurrentOperation('');
    setPreviousOperand(null);
    setOperator(null);
    setWaitingForOperand(true);
    setLastButtonWasOperator(false);
  };

  return (
    <div className="page-container">
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        <Display display={display} currentOperation={currentOperation} />
        <Keypad 
          onDigitClick={onDigitButtonClick} 
          onOperatorClick={onOperatorButtonClick} 
          onDecimalClick={onDecimalPointButtonClick} 
          onEqualsClick={onEqualsButtonClick} 
          onClearClick={onAllClearButtonClick} 
        />
      </div>
    </div>
  );
}