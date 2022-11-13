function hasDuplicate(myArray) {
    return myArray.length === new Set(myArray).size;
  }