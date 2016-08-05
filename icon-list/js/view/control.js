const Control = Klass.define(function(){

  const createHandler = function(role, n){
    switch(role){
    case "clear":
      return e => this.app.clear();
      break;
    case "render":
      return e => this.app.update();
      break;
    default:
      return e => this.app.add(n);
    }
  };

  const attachHandlers = function(){
    const defineHandler = createHandler.bind(this);
    Util.forEach(this.el.querySelectorAll("button"), button => {
      const role = button.dataset.role || "add";
      const n = Number(button.dataset.n || 1);
      const handler = defineHandler(role, n);
      button.addEventListener("click", handler);
    });
  };

  return {
    initialize: function(app, template){
      this.app = app;
      this.el = document.importNode(template.content, true);
      attachHandlers.bind(this)();
    },
    render: function(){
      return this.el;
    }
  };

});
