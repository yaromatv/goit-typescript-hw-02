/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, K> {
    key: T;
    value: K;
}

let pairInst1: KeyValuePair<string, number> = {
    key: "key",
    value: 5,
};

let pairInst2: KeyValuePair<number, boolean> = {
    key: 1,
    value: false,
};

export {};
