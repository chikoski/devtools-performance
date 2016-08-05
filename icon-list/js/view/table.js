const Table = Klass.define(function(){
  const doRender = function(root, list, template, maxItems){
    const toRender = Math.min(maxItems, list.length);
    for(let rendered = 0; rendered < toRender; rendered++){
      let tr = new Row(list.getMonsterAt(rendered), template);
      let el = tr.render();
      root.appendChild(el);
    }
    return root;
  };

  const fib = function(n){
    return n < 2? 1: fib(n - 1) + fib(n - 2);
  };

  return {
    initialize: function(settings){
      this.template = settings.template;
      this.rowTemplate =settings.rowTemplate;
      this.maxItems = settings.maxItems || 100;
      this.el = document.importNode(this.template.content, true);
      this.table = this.el.querySelector("table");
      this.model = settings.model;
      this.body = this.el.querySelector("tbody");
    },
    render: function(){
      this.update();
      return this.el;
    },
    update: function(){
      if(this.body){
        this.table.removeChild(this.body);
      }
      this.body = document.createElement("tbody");
      const n = fib(30);
      console.log(`fib(30) = ${n}`);
      this.table.appendChild(this.body);
      doRender(this.body, this.model, this.rowTemplate, this.maxItems);
      return this.el;
    }
  };
});
