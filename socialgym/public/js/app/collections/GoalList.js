// Collection.js
// -------------
define(["jquery","backbone","models/GoalModel"],

  function($, Backbone, Model) {

    // Creates a new Backbone Collection class object
    var Collection = Backbone.Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Model,
      url: "http://127.0.0.1:5984/socialgym/goals"

    });

    // Returns the Model class
    return Collection;

  }

);