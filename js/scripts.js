// 1 - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numMultiplied = (numbers) => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};
const result1 = [2, 2, 2, 2, 2, 2];
numMultiplied(result1);

// 2 - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1

const dividedByIndex = (numbers) => {
  return numbers.map((number, index) => number / (index + 1));
};
const result2 = [10, 10, 10, 10, 10, 10];
console.log(dividedByIndex(result2));

// 3 - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const toUpper = (words) => {
  return words.map((word) => word.toUpperCase());
};
const result3 = ['hola', 'adios', 'gato', 'perro', 'casa'];
console.log(toUpper(result3));

// 4 - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen
//por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con mayúsculas
//y minúsculas.

const beginsWith = (words, letter) => {
  const result = words.filter(
    (word) => word.charAt(0).toLowerCase() === letter.toLowerCase()
  );
  if (result.length === 0) {
    return `Ninguna palabra emplieza por la letra ${letter}`;
  }
  return result;
};
const result4 = beginsWith(['hola', 'mundo', 'adios', 'hija'], 'h');
console.log(result4);

// 5 - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const result5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
const sumOfAll = result5.reduce((acc, number) => acc + number);
console.log(sumOfAll);

// 6 - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const result6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
const poweredNumbers = result6.forEach((number) => {
  console.log(
    `Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(
      number,
      3
    )}`
  );
});

// 7 - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowelsToUpper = (word) => {
  const vowels = 'aeiouáéíóú ';
  let newWord = word.split('');
  const result = newWord.map((word) => {
    if (vowels.includes(word)) {
      return word.toUpperCase();
    }
    return word;
  });
  const finalResult = result.reduce((acc, word) => acc + word);
  console.log(finalResult);
};

vowelsToUpper('tártaro');

// 8 - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const overFive = (numbers) => {
  const result = numbers.some((number) => {
    return number > 5;
  });
  if (result === true) {
    return `Hay números mayores de 5`;
  }
  return `No hay numeros mayores de 5`;
};
const result8 = [1, 3, 5, 7, 8];
console.log(overFive(result8));

// 9 - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud,
//por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const wordsLength = (words, number) => {
  return words.filter((word) => {
    return word.length === number;
  });
};
const result9 = wordsLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4);
console.log(result9);

// 10 - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean
//divisores de ese número

const areDividers = (numbers, divider) => {
  return numbers.filter((number) => {
    return divider % number === 0;
  });
};
const result10 = areDividers([1, 2, 3, 4, 5, 6], 10);
console.log(result10);

// 11 - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30

const underThirty = (array) => {
  return array.filter((element) => {
    return element.age < 30;
  });
};
const array = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 },
];
const result11 = underThirty(array);
console.log(result11);

// 12 - Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

const allEven = (numbers) => {
  const result = numbers.every((number) => {
    return number % 2 === 0;
  });
  if (result === true) {
    return `Todos los números son pares`;
  }
  return `No todos los números son pares`;
};
const result12 = [2, 4, 6, 8, 10, 11];
console.log(allEven(result12));

// 13 - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

const wordsToOrder = (words) => {
  return (result = words.sort((wordA, wordB) => {
    return wordA.length - wordB.length;
  }));
};

const result13 = wordsToOrder(['holassss', 'mundo', 'adioses', 'hija']);
console.log(result13);

// 14 - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas.
//Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

const toReverse = (word) => {
  let splitWord = word.split('');
  return splitWord.reduce((acc, letter) => letter + acc);
};
const result14 = toReverse('Mariposas');
console.log(result14);

// ## Retos!!

// 15 - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número,
//es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

const newArray = (numbers) => {
  return numbers.map(
    (number) =>
      Number(String(number).charAt(0)) + Number(String(number).charAt(1))
  );
};
const result15 = newArray([21, 34, 87, 10, 28]);
console.log(result15);

// 16 - Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

const deleteUser = (id) => {
  let usersArray = [
    {
      id: 'user001',
      name: 'Juan',
      surname: 'Pérez',
      age: 30,
    },
    {
      id: 'user002',
      name: 'María',
      surname: 'González',
      age: 25,
    },
    {
      id: 'user003',
      name: 'Pedro',
      surname: 'Sánchez',
      age: 35,
    },
    {
      id: 'user004',
      name: 'Ana',
      surname: 'Martínez',
      age: 28,
    },
    {
      id: 'user005',
      name: 'Luis',
      surname: 'López',
      age: 40,
    },
  ];

  return usersArray.filter((user) => {
    return user.id !== id;
  });
};

const result16 = deleteUser('user002');
console.log(result16);
