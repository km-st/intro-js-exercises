// false - right operand evaluates to false and is the last to be evaluated in ||
false || (true && false);
// true - left operand short circuits after evaluating to true
true || 1 + 2;
// 3 - left operand short circuits and returns after evaluating as truthy
1 + 2 || true;
// 3 - as both evaluate as truthy 3 is returned as last operand evaluated
true && 1 + 2;
// false - short circuit
false && 1 + 2;
// true - both truthy, last operand evaluated and returned is true
1 + 2 && true;
// false - 128 is less than 129
32 * 4 >= 129;
// false - false !== false is false
false !== !true;
// false - true doesn't strictly equal 4
true === 4;
// true - false === false is true. 847, a number, does not strict equal "847", a string
false === (847 === "847");
// false - false === true is false. We're not using strict equalality operator
false === (847 == "847");
// true - only one value has to evaluate as true and that is 328 / 4 === 82
console.log(!true || !(100 / 5) === 20 || 328 / 4 === 82 || false);
