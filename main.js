function checkIsomorphic(string1, string2) {
  const hashmap = new Map();

  for (let i = 0; i < string1.length; i++) {
    let value = hashmap.get(string1[i]);
    if (value === undefined) {
      hashmap.set(string1[i], string2[i]);
    } else if (value !== string2[i]) {
      return false;
    }
  }
  return true;
} 

module.exports = {
  checkIsomorphic,
};
