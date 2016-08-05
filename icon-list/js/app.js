const App = (function(){

  function App(settings){
    this.images = settings.images;
    this.list = new MonsterList();
    this.container = settings.container ||
      document.querySelector("body");
    this.templates = settings.template;
    this.views = {
      control: new Control(this, this.templates.control),
      counter: new Counter(this.list, this.templates.counter),
      table: new Table({model: this.list,
                        template: this.templates.monsterList,
                        rowTemplate: this.templates.monster})
    };
    this.factory = new MonsterFactory({imageList: this.images});
    this.render();
  }

  App.prototype = {
    add: function(n){
      n = n || 1;
      while(n-- > 0){
        this.list.add(this.factory.create());
      }
      this.update();
      return this;
    },
    render: function(){
      this.container.appendChild(this.views.control.render());
      this.container.appendChild(this.views.counter.render());
      this.container.appendChild(this.views.table.render());
    },
    clear: function(){
      this.list.clear();
      this.update();
    },
    update: function(){
      this.views.counter.update();
      this.views.table.update();
    }
  };

  function images(url){
    url = url || "images/all.json";
    return fetch(url)
      .then(response => response.json());
  }

  return {
    start: function(settings){
      return images(settings.images).then(list => {
        settings.images = list.map(url => "images/" + url);
        return new App(settings);
      });
    }
  };
})();
