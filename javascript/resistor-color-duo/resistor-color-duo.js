//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const colors = ['black', 'brown' , 'red', 'orange' , 'yellow' , 'green' , 'blue' , 'violet' , 'grey' , 'white']

 export const decodedValue = ([a, b]) => { 
  const indexA = colors.indexOf(a).toString();
  const indexB = colors.indexOf(b).toString();
  return parseInt(indexA + indexB);
}