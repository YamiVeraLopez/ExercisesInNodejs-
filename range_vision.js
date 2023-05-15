function convertToArray(x) {
  let array = Array.from(x.toString(), Number);
  return array;
}

function range_vision(number) {
  const numberToArray = convertToArray(number);

  for (let i = 0; i <= numberToArray.length; i++) {
    let range = numberToArray[i];
    let valueOfVision = 0;

    for (let v = i - range; v <= range; v++) {
      if (v >= 0 && v < numberToArray.length) {
        valueOfVision += numberToArray[v];
      }
    }

    if (numberToArray[i] == "1" && valueOfVision < range) {
      return true;
    }
  }

  return false;
}
