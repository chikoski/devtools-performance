const MonsterList = (function(){

  return Klass.define({
    initialize: function(){
      this.list = [];
    },
    add: function(monster){
      if(this.isMonster(monster)){
        this.list.push(monster);
        return monster;
      }
      return null;
    },
    clear: function(){
      this.list = [];
    },
    isMonster: function(monster){
      return Util.hasOneChar(monster.name) &&
        Util.positiveNumber(monster.life) &&
        Util.positiveNumber(monster.rarelity) &&
        Util.positiveNumber(monster.attack) &&
        Util.positiveNumber(monster.defence);
    },
    getMonsterAt: function(n){
      return this.list[n];
    },
    forEach: function(f){
      return this.list.forEach(f);
    },
    get length(){
      return this.list.length;
    }
  });

})();
