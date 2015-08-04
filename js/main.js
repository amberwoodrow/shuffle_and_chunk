function shuffle(array){
  var result = [];
  var arrayCopy = array.slice(0);
  arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++) {
    var num = Math.floor(Math.random() * arrayCopy.length);
    result.push(arrayCopy.splice(num, 1)[0]);
  }
  return result;
}

// function chunk (numChunks, array) {
//   var shuffled = shuffle(array);
//   var shuffledLength = shuffled.length;
  // var elementsPerArray = shuffled.length/numChunks;
//   var chunkedArray = [];
//   for (i=0; i<=shuffledLength; i++) {
//     chunkedArray.push(shuffled.splice(i, i + numChunks));
//   }
//   return chunkedArray;
// }

// function chunk (numChunks, array) {
//   var shuffled = shuffle(array);
//   var chunkedArray = [];
//   var elementsPerArray = shuffled.length/numChunks;
//   for (i=0; i<=(elementsPerArray+1); i++) {
//     chunkedArray.push(shuffled.slice(i, i + elementsPerArray));
//   }
//   return chunkedArray;
// }

function chunk (numChunks, array) {
  newArr = [];
  for (var i=0; i<array.length; i+=numChunks) {
    newArr.push(shuffle(array).slice(i,i+numChunks));
  }
  return newArr;
}

console.log(JSON.stringify(chunk(4, [1,2,3,4,5,6,7,8])));
console.log(JSON.stringify(chunk(5, [1,2,3,4,5,6,7,8])));
