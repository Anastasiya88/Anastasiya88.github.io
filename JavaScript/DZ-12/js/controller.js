define (
  'controller',
  ['model', 'view'],
  function (model, view){

    function Controller(model, view){
      var self = this;

      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.item-edit', editItem);
      view.elements.listContainer.on('click', '.item-delete', removeItem);

      function addItem() {
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

return new Controller(model, view);

});
