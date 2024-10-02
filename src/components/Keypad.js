import React from 'react';

const Keypad = ({ onDigitClick, onOperatorClick, onDecimalClick, onEqualsClick, onClearClick }) => (
  <div className="keypad">
    <button onClick={onClearClick} className="clear-button">AC</button>
    <button className="empty-button"></button>
    <button className="empty-button"></button>
    <button onClick={() => onOperatorClick('÷')} className="operator-button">÷</button>

    <button onClick={() => onDigitClick('7')} className="digit-button">7</button>
    <button onClick={() => onDigitClick('8')} className="digit-button">8</button>
    <button onClick={() => onDigitClick('9')} className="digit-button">9</button>
    <button onClick={() => onOperatorClick('×')} className="operator-button">×</button>

    <button onClick={() => onDigitClick('4')} className="digit-button">4</button>
    <button onClick={() => onDigitClick('5')} className="digit-button">5</button>
    <button onClick={() => onDigitClick('6')} className="digit-button">6</button>
    <button onClick={() => onOperatorClick('-')} className="operator-button">-</button>

    <button onClick={() => onDigitClick('1')} className="digit-button">1</button>
    <button onClick={() => onDigitClick('2')} className="digit-button">2</button>
    <button onClick={() => onDigitClick('3')} className="digit-button">3</button>
    <button onClick={() => onOperatorClick('+')} className="operator-button">+</button>

    <button onClick={() => onDigitClick('0')} className="digit-button zero">0</button>
    <button onClick={onDecimalClick} className="digit-button">.</button>
    <button onClick={onEqualsClick} className="equals-button">=</button>
  </div>
);

export default Keypad;