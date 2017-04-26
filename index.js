//my way almost works but not quite:

// function forEach(iterable, callback) {
//   //for (i = 0; i < cars.length; i++)
//   newArray = []
//   for (i = 0; i < iterable.length; i++) {
//     //text += cars[i] + "<br>";
//     newArray.push(callback(iterable[i]) )
//   }
//   console.log(newArray);
//   return newArray;
// }

///this is from the lab:

function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (let i = 0, l = iterable.length; i < l; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      const value = iterable[key];
      callback(value, key, iterable);
    }
  }
}
