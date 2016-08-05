const Util = {
  randomInt: (min, max) =>
    Math.floor(Math.random() * (max - min)) + min,
  randomChar: function(string){
    var index = this.randomInt(0, string.length);
    return string[index];
  },
  randomString: function(string, length){
    var result = "";
    while(result.length < length){
      result += this.randomChar(string);
    }
    return result;
  },
  forEach: (list, func) =>
    Array.prototype.forEach.call(list, func),
  positiveNumber: n => typeof n == "number" && n > 0,
  hasOneChar: str => (str || "").length > 0,
  chooseRandomly: function(list){
    return list[this.randomInt(0, list.length)];
  }
};
