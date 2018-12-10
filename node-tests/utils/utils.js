module.exports.add = (a, b) => a + b;

module.exports.square = a => a * a;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
};

module.exports.validatePIN = pin => {
  let result = pin.match(/^\d+$/);
  if ((pin.length === 4 || pin.length === 6) && result) {
    return true;
  }
  return false;
  //  return (pin.length === 4 || pin.length === 6) && result;
};

module.exports.duplicateEncode = word => {
  let arr = word.toLowerCase().split(/(?!$)/u);

  let newArray = "";

  for (let i = 0; i < arr.length; ) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && j != i) {
        newArray = newArray + ")";
        j = arr.length;
      }
    }
    i++;
    if (newArray.length < i) {
      newArray = newArray + "(";
    }
  }
  return newArray;
};

module.exports.RemoveVowels = strText => {
  let newArray = "";
  strText = strText.split(/(?!$)/u);

  for (let i = 0; i < strText.length; i++) {
    if (
      !(strText[i] === "a" || strText[i] === "e" ||
        strText[i] === "i" || strText[i] === "o" ||
        strText[i] === "u" ||
        strText[i] === "A" ||
        strText[i] === "E" ||
        strText[i] === "I" ||
        strText[i] === "O" ||
        strText[i] === "U"
      )
    ) {
      newArray = newArray + strText[i];
    }
  }
  return newArray;
};

module.exports.getMiddle = s => {
  strText = s.split(/(?!$)/u);
  let newArray = "";
  let mid = Math.floor(strText.length / 2);
  if (strText.length === 1) {

    return s;
  } else if (strText.length % 2 === 0) {
    return strText[mid - 1] + strText[mid];
  } else
  {
    return strText[mid];
  }
};



module.exports.inArray = (array1,array2) =>{
  let  results = [];
  
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        results.push(array1[i]);
        j = array2.length;
      }
    }
  }

if (results.length > 0){
  results.sort();
}
  return results;
}
