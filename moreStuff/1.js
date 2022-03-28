let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*
  it logs [1, 4, 3]. 
  The mutation on line 3 takes effect for both array1 and array2
  because they are referencing the same array in memory
*/
