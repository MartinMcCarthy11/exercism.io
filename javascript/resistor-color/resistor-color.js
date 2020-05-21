//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const Colors ={
 black: 0,
 brown: 1,
 red: 2,
 orange: 3,
 yellow: 4,
 green: 5,
 blue: 6,
 violet: 7,
 grey: 8,
 white: 9
};

 export const colorCode = (x) => {
  const arr = Object.keys(Colors);
  let result;
  if(arr.indexOf(x) != -1){
    result = arr.indexOf(x);
  } 
  return  result;
};

export const COLORS = Object.keys(Colors);
