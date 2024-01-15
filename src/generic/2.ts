/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/
type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
};

function compare<T extends AllType, B extends AllType>(
    top: Pick<T, keyof AllType>,
    bottom: Pick<B, keyof AllType>
): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}

const topObj = {
    name: "Top",
    position: 1,
    color: "red",
    weight: 10,
};
const bottomObj = { name: "Bottom", position: 2, color: "blue", weight: 20 };

const result = compare(topObj, bottomObj);
console.log(result);

export {};
