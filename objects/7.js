let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});

/*
  output:
    qux
*/

for (let key in myObj) {
  console.log(key);
}

/*
  output:
    foo
    bar
    qux
*/

// they'd have different output; the properties inherited from prototype aren't picked up in Object.keys
