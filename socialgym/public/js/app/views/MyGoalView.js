// MyGoalView.js
// -------
define(["jquery", "backbone", "models/Model", "text!templates/goals.html", "views/AddGoalView","views/AddProgressView","backbone.modal","bootstrap"],

    function($, Backbone, Model, template, AddGoalView,AddProgressView){

        var View = Backbone.View.extend({
            // View constructor
            initialize: function() {
                // Calls the view's render method
                this.render();
            },

            // View Event Handlers
            events: {
				"click #new-goal":"newGoal",
				"click #add-progress":"newProgress"
            },



            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.setElement(this.template);

                // Maintains chainability
                return this;

            },
		
			
			
			newGoal: function(){
		        // console.log("Click for detail");
		       var modalView = new AddGoalView();
		       $("#addgoal").html(modalView.render().el);
				 $('#myModal').modal('show');
		    },
			
			newProgress: function(){
		       
		       var modalView = new AddProgressView();
		       $("#addprogress").html(modalView.render().el);
				 $('#myModal2').modal('show');
		    }
		

        });

        // Returns the View class
        return View;
 
    }

);