//Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает 
//в консоль обратный отсчет, начиная с этого числа. Например, countDown(3) напечатает: 3 2 1.

export  function countDown(count) {
  let words = '';
  if (isNaN(count) || count < 1) {
    return words += 'Недопустимые символы. Введите положительное число.'
  } else {
  for (let i = count; i > 0; i--) {
      words += i;
  };
  return words;
}};
