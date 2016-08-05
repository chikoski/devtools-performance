const Klass = (function(){

  const define = function(proto){
    const Klass = function(){
      this.initialize.apply(this, arguments);
    };

    Klass.prototype =
      typeof proto == "function"? proto(): proto;

    return Klass;
  };

  return {
    define: define
  };

})();
