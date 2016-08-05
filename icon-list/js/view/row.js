const Row = Klass.define(function(){

  const ATTRIBUTES = ["name", "rarelity", "life", "attack", "defence"];

  const fill = function(model, view){
    for(let attr of ATTRIBUTES){
      let el = view.querySelector(`[data-role=${attr}]`);
      el.textContent = model[attr];
    }
    const img = view.querySelector("img");
    img.src = model.image;
    return view;
  };

  return {
    initialize: function(model, template){
      this.template = template;
      this.model = model;
      this.el = fill(this.model,
                     document.importNode(this.template.content, true));
    },
    render: function(){
      return this.el;
    },
    update: function(){
      return this.el;
    }
  };
});
