// MobileRouter.js
// ---------------
define(["jquery", "backbone", "views/BaseView","views/ModalsView", "views/MyGoalView","views/DetailView", "views/CommunityView", "views/EventsView", "views/SettingsView", "views/ActivityView"],
        
    function($, Backbone, BaseView, ModalsView, MyGoalView, DetailView, CommunityView, EventsView, SettingsView, ActivityView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {
                
                // When there is no hash bang on the url, the home method is called
                "": "index",
                "modals":"modals",
                "myGoal":"myGoal",
                "detail":"detail",
                "community":"community",
                "events":"events",
				"settings":"settings",
                "activity":"activity"
            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                this.changePage(new BaseView());

            },
            modals: function() {
                this.changePage(new ModalsView());
            },
            myGoal: function() {
                this.changePage(new MyGoalView());
            },
            detail: function() {
                this.changePage(new DetailView());
            },
            community: function() {
                this.changePage(new CommunityView());
            },
            events: function() {
                this.changePage(new EventsView());
            },
			settings: function() {
                this.changePage(new SettingsView());
            },
            activity: function() {
                this.changePage(new ActivityView());
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