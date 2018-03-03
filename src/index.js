module.exports = function longestConsecutiveLength(array) {
  let tmpSet = new Set();
  let resLength = 0;
  let checkValue;
  
  //add all unique values 
  for (let i = 0; i < array.length; i++) {
    tmpSet.add(array[i]);
  }
   
  for (let i = 0; i < array.length; i++ ) {
    //if first element in sequence
    if (!tmpSet.has(array[i] - 1)) {
      
      checkValue = array[i];
      
      while (tmpSet.has(checkValue)) {
        checkValue++;
      }
      if (resLength < checkValue - array[i]) {
        resLength = checkValue - array[i];
      }
    }
  }
  return resLength;
}
