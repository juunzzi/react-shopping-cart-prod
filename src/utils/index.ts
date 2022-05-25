type Primitive = boolean | string | number;

export const isExistInList = <T extends Primitive>(list: T[], value: T) => {
  return list.indexOf(value) !== -1;
};

export const sum = (list: number[]) => {
  return list.reduce((acc, cur) => (acc += cur), 0);
};
