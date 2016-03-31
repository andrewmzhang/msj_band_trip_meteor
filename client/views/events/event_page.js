/**
 * Created by caesar on 3/10/16.
 */
Template.eventPage.helpers({
    localDate: function(udatestring, timezone) {
        var udate = moment(udatestring);
        var ldate = udate.clone().tz(timezone);
        return ldate.format();

    }
});


Template.eventPage.events({

    'click .delete': function() {
        Meteor.call('eventDeleteMaster', this._id, function(error, id) {
            if (error) {
                return sAlert.error("Delete Error: " + error.reason);
            }
            return sAlert.success("Event Deleted!!");
        });
    }

});
