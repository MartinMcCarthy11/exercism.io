//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/* ```text
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
``` */

export const isLeap = (year) => {
  let result = false;
  if( year % 4 === 0 && year % 100 !== 0){
    result = true;
  } else if (year % 400 === 0){
    result = true;
  }
  return result;
};