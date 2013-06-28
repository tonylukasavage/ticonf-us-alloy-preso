var tester = Alloy.Collections.tester = new Backbone.Collection();
var models = [];
for (var i = 0; i < 20; i++) {
  models.push({ title: 'model #' + (i+1)});
}
tester.reset(models);

var cc = Alloy.createController;
Alloy.createController = function(name, args) {
  Ti.API.info('********** creating "' + name + '" controller **********');
  return cc(name, args);
}