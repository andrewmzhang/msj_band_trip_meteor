/**
 * Created by caesar on 3/9/16.
 */

Template.eventsList.helpers({
    events: function() {
        return Events.find();
    }

});
