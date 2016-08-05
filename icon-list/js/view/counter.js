const Counter = Klass.define({
  initialize: function(list, template){
    this.list = list;
    this.el = document.importNode(template.content, true);
    this.count =
      this.el.querySelector("[data-role=count]") ||
      document.createElement("span");
    this.container =
      this.count.parentNode ||
      this.el;
  },
  render: function(){
    this.update();
    return this.el;
  },
  update: function(){
    this.count.textContent =
      (this.list || []).length ;
  }
});
