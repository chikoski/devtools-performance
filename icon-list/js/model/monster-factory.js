const MonsterFactory = (function(){

  const MAX_LIFE = 1024;
  const MAX_ATTACK = 256;
  const MAX_DEFENCE = 256;
  const MAX_RARELITY = 5;
  const MAX_NAME_LENGTH = 32;
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return Klass.define({
    initialize: function(conf){
      this.maxLife = conf.maxLife || MAX_LIFE;
      this.maxAttack = conf.maxAttack || MAX_ATTACK;
      this.maxDefence = conf.maxDefence || MAX_DEFENCE;
      this.maxRarelity = conf.maxRarelity || MAX_RARELITY;
      this.maxNameLength = conf.maxNameLength || MAX_NAME_LENGTH;
      this.availableNames = conf.availableNames || CHARS;
      this.imageList = conf.imageList || [];
    },
    create: function(){
      const name = Util.randomString(this.availableNames, this.maxNameLength);
      const rarelity = Util.randomInt(1, this.maxRarelity);
      const life = Util.randomInt(1, this.maxLife);
      const attack = Util.randomInt(1, this.maxAttack);
      const defence = Util.randomInt(1, this.maxDefence);
      const image = Util.chooseRandomly(this.imageList);

      return new Monster(name, rarelity,
                         life, attack, defence,
                         image);
    }
  });
})();
