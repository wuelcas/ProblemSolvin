const getArrayElement = (arr, input) => {
  const index = parseInt(input);

  if (index < 1) {
    return data[0];
  }

  if (index > arr.length) {
    return getArrayElement(arr, index - arr.length);
  }

  return data[index - 1];
}

const data = ["Bhin Bhin", "Atung", "Kaka", "Hodori", "Pan Pan", "Appu", "Lulu", "Orry", "Mei Mei"];

console.log(getArrayElement(data, 5));
console.log(getArrayElement(data, 3));
console.log(getArrayElement(data, 13));
console.log(getArrayElement(data, 20));
console.log(getArrayElement(data, 28));