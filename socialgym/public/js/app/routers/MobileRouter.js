// MobileRouter.js
// ---------------
define(["jquery", "backbone", "views/BaseView","views/CreateEventView","views/ProgressView","views/ModalsView", "views/FriendsView", "views/MyGoalView", "views/AddGoalView", "views/AddProgressView", "views/DetailView", "views/CommunityView", "views/EventsView", "views/SettingsView", "views/ActivityView", "views/DetailEventView"],
        
    function($, Backbone, BaseView, CreateEventView, ProgressView, ModalsView, FriendsView, MyGoalView, AddGoalView, AddProgressView, DetailView, CommunityView, EventsView, SettingsView, ActivityView, DetailEventView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function() {
                this.globalEvents();
                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {
                
                // When there is no hash bang on the url, the home method is called
                "": "myGoal",
                "index": "myGoal",
                "modals":"modals",
                "createEvent":"createEvent",
                "progress":"progress",
                "friends":"friends",
                "myGoal":"myGoal",
                "addGoal":"addGoal",
                "addProgress":"addProgress",
                "detail":"detail",
                "community":"community",
                "events":"events",
                "event:eid": "event",
                "settings":"settings",
                "activity":"activity"
            },
            globalEvents: function() {
            },
            index: function() {

                // Instantiates a new view which will render the header text to the page
                this.changePage(new BaseView());

            },
            modals: function() {
                this.changePage(new ModalsView());
            },
            createEvent: function() {
                this.changePage(new CreateEventView());
            },
            progress: function() {
                this.changePage(new ProgressView());
            },
            friends: function() {
                this.changePage(new FriendsView());
            },
            myGoal: function() {
                this.changePage(new MyGoalView());
            },
            addGoal: function() {
                this.changePage(new AddGoalView());
            },
            addProgress: function() {
                this.changePage(new AddProgressView());
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
            event: function(eid) {
                this.changePage(new DetailEventView());
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