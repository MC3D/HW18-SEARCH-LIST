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
  tagName: 'li class="titles"',

  initialize: function(options) {
    this.title = options.title;

  },

  render: function() {
    this.$el.text(this.title);
    $('ul').append(this.el);
  }
});

var listView = new ListView();
listView.render();

_.each(movies, function(title) {
  var itemView = new ItemView(title);
  itemView.render();
});


// Type window to communicate intent (this example sets a global variable).
// window.App = {};
//
// // This is for view constructors, not instances.
// App.Views = {};
//
// App.Models = {};
//
// App.Routers = {};
//
// // Routers handle app state; handle necessary instances on the router.
// App.router = new App.Routers.AppRouter();
// // Generally signifies code that is too highly dependent on global state; shouldn't really need to do this.
// App.router.appView = new App.Views.AppView();

(function(){
    'use strict';

    window.App = {};
    App.Views = {};

    App.Views.ListView = Backbone.View.extend({
      initialize: function() {
        $('body').append(this.el);
        this.filteredList = this.collection;
      },
//need to filter through instead and remove the ones that need to be removed
      render: function(){
        this.$el.empty();
        var self = this;
        _.each(this.filteredList, function(item){
          self.$el.append('<li>'+item+'</li>')
        });
      },
        filterBy: function(val){
          this.filteredList = this.collection.filter(function(item){
            return item.match(val);
          });
          this.render();
        }

    });
})();

$(document).ready(function(){
  var collection = ['cool', 'rad', 'excellent'];
  App.listView = new App.Views.ListView({collection: collection});
  App.listView.render();
});

$('input[type=search]').on('input', function(){
  var val = $(this).val();
  App.listView.filterBy(val);
})










// var filterView = new ListView();
// filterView.render();
//
// _.each(movies, function(movie) {
//   var itemView = new ItemView(movie);
//
//
//
//   filterView.render();
//
//   $('.input').on('keyup', function() {
//     // filterView.render();
//     // alert( "Handler called." );
//     var input = $(this).val();
//     if $('.titles').not(':contains(' + input +')').hide();
//   });
//
// });



// $('.input').keyup(function() {
//   filterView.render();
//   alert( "Handler called." );
//
//
//
//   function filter(element) {
//         var value = $(element).val();
//
//         $(".list > li").each(function() {
//             if ($(this).text().search(value) > -1) {
//                 $(this).show();
//             }
//             else {
//                 $(this).hide();
//             }
//         });
//     }
//
//
//   // _.filter(itemView.name,$('.input').val())
// });

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
