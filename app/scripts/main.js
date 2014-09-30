(function() {
  "use strict";
})();




// set variables
var movies = [{
  title: "The Wizard of Oz"
}, {
  title: "Citizen Kane"
}, {
  title: "The Godfather"
}];

var BaseView = Backbone.View.extend({
  render: function() {
    $('body').append(this.el);
  }
});

var ListView = BaseView.extend({
  tagName: 'ul class="list"',
});

var ItemView = BaseView.extend({
  tagName: 'li',

  initialize: function(options) {
    this.title = options.title;

  },

  render: function() {
    this.$el.text(this.title);
    $('ul').append(this.el);
  }
});

// var listView = new ListView();
// listView.render();
//
// _.each(people, function(person) {
//   var itemView = new ItemView(person);
//   itemView.render();
// });


var filterView = new ListView();
filterView.render();

_.each(movies, function(movie) {
  var itemView = new ItemView(movie);
  if($('.input').val() === '')
  itemView.render();
});

$('.input').keyup(function() {
  filterView.render();
  alert( "Handler called." );



  function filter(element) {
        var value = $(element).val();

        $("#theList > li").each(function() {
            if ($(this).text().search(value) > -1) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    }


  // _.filter(itemView.name,$('.input').val())
});

//
//   var filter = function() {
//     _.filter(itemView, 'Sam');
//     filter.render();
//   };
// });


// var FilterView = ItemView.extend({
//    events: {
//     'keyup .filter': 'filterOnType'
//   },
//
//   filterOnType: _.debounce(function(person) {
//     var filter = ItemView(this.$('.filter').val(), 'i');
//
//     this.collection.filterBy('filter-on-type', function(model) {
//       return  regex.test(model.get('name'));
//     });
//   }, 100),
// });
