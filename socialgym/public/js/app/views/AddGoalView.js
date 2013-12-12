// AddGoalView.js
// -------
define(["jquery", "backbone", "models/Model", "text!templates/addGoal2.html","backbone.modal"],

    function($, Backbone, Model, template){

        var test = Backbone.Modal.extend({
            // View constructor
            initialize: function() {
                // Calls the view's render method
                this.render();
            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.setElement(this.template);

                // Maintains chainability
                return this;

            }
 
        });
		
		
		
		var InfoModal = Backbone.Modal.extend({
				initialize: function() {
					console.log("haha");
				},
		    	template: _.template(template),
		    	events: {
		   			
		    	},
		   
		  });
		
		
		
        // Returns the Modal class
        return InfoModal;

    }

);