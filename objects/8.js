const copyObj = (objectToCopy, keysToCopy) => {
  if (keysToCopy) {
    return Object.keys(objectToCopy).reduce((previous, next) => {
      if (keysToCopy.includes(next)) {
        return { ...previous, [next]: objectToCopy[next] };
      }
      return previous;
    }, {});
  }
  return { ...objectToCopy };
};

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3);
