/* 
TASK №1

Написати код, який пропонує користувачу вгадати таємниче число. Кількість спроб необмежена!
Таємниче число створюєте самі і записуєте в константу (const SECRET_NUMBER = 7);
Користувач вводить число, ви залежно від того, що ввів користувач пишете:
- таємне число більше (userNumber = 3)
- таємне число менше                     (userNumber = 30)
- ви ввели не число                         (userNumber = null)
- вітаю, ви вгадали за .. (кількість) спроб (userNumber = 7)
*/

const SECRET_NUMBER = 7;

/**
 * Функція повертає true якщо параметр має значення NaN або ""
 * @param {any} checkValue
 * @returns {boolean}
 */
const isNanOrEmptyCheck = function (checkValue) {
  return Number.isNaN(Number(checkValue)) || checkValue === "";
};

let counterAttempts = 0;

while (true) {
  const userInput = prompt("Введіть будь ласка таємниче число:");

  counterAttempts++;

  if (userInput === null) {
    break;
  } else if (isNanOrEmptyCheck(userInput)) {
    alert("Ви ввели не число!");
  } else if (SECRET_NUMBER > userInput) {
    alert("Таємне число більше!");
  } else if (SECRET_NUMBER < userInput) {
    alert("Таємне число менше!");
  } else {
    alert(`Вітаю, ви вгадали число! Кількість спроб: ${counterAttempts}.`);
    break;
  }
}

/*
  TASK №2
  
  Написати скрипт, який виводить парні і кратні 9 числа з діапазону від 0 до 100 в зворотньому порядку
   
  РЕМАРКА №1: діапазон - включно
  РЕМАРКА №2: нуль теж є парним та кратним 9
*/

const MIN_RANGE_NUMBER = 0;
const MAX_RANGE_NUMBER = 100;
const EVEN_DIVIDER = 2;
const DIVIDER = 9;

for (let i = MAX_RANGE_NUMBER; i >= MIN_RANGE_NUMBER; i--) {
  if ((i % DIVIDER === 0) && (i % EVEN_DIVIDER === 0)) {
    console.log(i);
  }
}