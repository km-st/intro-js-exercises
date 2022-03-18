let array1 = [1, 2, undefined, 4]; // [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5; // [1, <4 empty items> ] - remaining 4 items from array2.length = 5 get set to empty items

let array3 = [];
array3[-1] = [1]; // ['-1': [ 1 ]] - negative value gets set as key on array3

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // [1, 2, 3] - length set to 3 removes last two indexes

let array5 = [];
array5[100] = 3; // [<100 empty items>, 3 ] - empty items get set until the array5[100], which is set to 3
