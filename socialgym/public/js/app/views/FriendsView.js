// FriendsView.js
// -------
define(["jquery", "backbone", "models/Model", "text!templates/friends.html"],

    function($, Backbone, Model, template){

        var View = Backbone.View.extend({
            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();
            },

            // View Event Handlers
            events: {
				"click #goal":"goal",
				"click #community":"community",
				"click #event":"event",

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
			goal:function(){
				location.href="#myGoal";
			},

			community:function(){
				location.href="#community";
			},

			event:function(){
				location.href="#events";
			}

        });

        // Returns the View class
        return View;

    }

);