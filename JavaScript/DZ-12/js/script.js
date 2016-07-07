function Model(data){
  var self = this;

  self.data = data;

  self.addItem = function(item){
    if (item.length === 0) {
      return;
    }

    self.data.push(item);

    return self.data;

  };

  self.editItem = function (item) {
    var index = self.data.indexOf(item);
    if (index === -1) {
        return;
    };
  };

  self.saveItem = function (item, index) {
    if (item.length === 0){
        return;
    };

    self.data.splice(index, 0, item);
};


  self.removeItem = function(item){
    if (index === -1){
      return;
    }

    var index = self.data.indexOf(item);

    self.data.splice(index, 1);

    return self.data;

  };


};


function View(model){
  var self = this;

  function init() {
    var wrapper = tmpl($("#wrapper-template").html());
    $("body").append(wrapper);
    self.elements = {
      input: $('.item-value'),
      addBtn: $('.item-add'),
      listContainer: $('.item-list'),
    };
    self.renderList(model.data);

  };

  self.renderList = function(data){
    var list = tmpl($('#list-template').html(), {data: data});
    self.elements.listContainer.html(list);
  };

  init();

};

function Controller(model, view){
  var self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.item-edit', editItem);
  view.elements.listContainer.on('click', '.item-delete', removeItem);

  function addItem(){
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  };

  function editItem() {
      var item = $(this).attr('data-value');
      var field = $('<input type="text">');
      var save = $('<button class="item-save">Save</button>');
      var element = model.editItem(item);
      field.val(element);
      model.removeItem(item);
      $(this).parent().empty().append(field, save);
      $('.item-save').on('click', function() {
          if($('input:text')[0].value) {
              model.saveItem($('input:text')[0].value, element);
              view.renderList(model.data);
          };
      });
  };

  function removeItem(){
    var item = $(this).attr('data-value');
    model.removeItem(item);
    view.renderList(model.data);

  };

};


$(function() {
  var firstToDoList = ["learn Gulp", "learn Grunt", "learn BEM", "learn Jasmine", "learn Bootstrap"];
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);
});
