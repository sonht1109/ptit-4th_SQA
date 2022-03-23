const helper = {};

export { helper };

export function cleanObj(obj: { [key: string]: any }) {
  const tmp = { ...obj };

  for (var propName in tmp) {
    if (
      tmp[propName] === null ||
      tmp[propName] === undefined ||
      tmp[propName] === ""
    ) {
      delete tmp[propName];
    }
  }
  
  return tmp;
}