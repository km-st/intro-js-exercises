for (let i = 0; i < 5; ) {
  console.log((i += 1));
}

/*
  it does not produce and error, but loops normally because i is getting mutated using += until the break condition of < 5 is reached
*/
