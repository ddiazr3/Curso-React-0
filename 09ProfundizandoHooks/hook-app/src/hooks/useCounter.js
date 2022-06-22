import {useState} from 'react';

export const useCounter = (initValue = 10) => {

  const [counter, setCounter] = useState(initValue);

  //para que esta constante counter pueda ser editado de otro lado
  //se crea un metodo donde cambia el  estado de esta variable y del otro lado solo se envia
  const increment = (value = 1) => {
    setCounter(counter + value)
  }
  const decrement = (value = 1) => {
    if(counter < 1 )return;
    setCounter(value - 1)
  }
  const reset = () => {
    setCounter(initValue)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  };
}
