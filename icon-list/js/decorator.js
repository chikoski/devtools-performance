var Decorator = (function(){

  function create(name, f){
    return function(target){
      var value = f();
      var original = target;
      if(typeof target == "function"){
        target = target.prototype;
      }
      target[name] = value;
      return original;
    };
  };

  return {
    create: create
  };

})();
