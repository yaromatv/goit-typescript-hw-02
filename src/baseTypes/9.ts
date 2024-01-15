/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type PageType = {
    title: string;
    likes: number;
    accounts: string[];
    status: string;
    details?: object;
};

const page1: PageType = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};

const page2: PageType = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};

export {};
