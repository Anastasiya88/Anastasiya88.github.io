define (
  'model',
  ['jquery'],
  function(data){
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


    var firstToDoList = ["learn Gulp", "learn Grunt", "learn BEM", "learn Jasmine", "learn Bootstrap"];
    return new Model(firstToDoList);
});
