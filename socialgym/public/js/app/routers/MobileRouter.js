// MobileRouter.js
// ---------------
define(["jquery", "backbone", "views/BaseView", "views/MyGoalView", "views/CommunityView", "views/EventsView", "views/SettingView"],
        
    function($, Backbone, BaseView, MyGoalView, CommunityView, EventsView, SettingView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {
                
                // When there is no hash bang on the url, the home method is called
                "": "index",
                "myGoal":"myGoal",
                "community":"community",
                "events":"events",
				"setting":"setting"
            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                this.changePage(new BaseView());

            },
            myGoal: function() {
                this.changePage(new MyGoalView());
            },
            community: function() {
                this.changePage(new CommunityView());
            },
            events: function() {
                this.changePage(new EventsView());
            },
			setting: function() {
                this.changePage(new SettingView());
            },
            changeBasePage: function(page) {
                this.changePage(page);
            },

            changePage: function(page) {
                $("body").undelegate().empty().append(page.$el);
            }
        });

        // Returns the MobileRouter class
        return MobileRouter;

    }

);