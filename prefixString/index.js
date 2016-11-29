function prefix(string, length, prefix) {
  return ((new Array(length + 1).join(prefix)) + string).substr(string.length, length);
}
console.log(prefix('011', 5, '0'));
