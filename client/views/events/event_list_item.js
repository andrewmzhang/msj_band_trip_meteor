/**
 * Created by caesar on 3/9/16.
 */
Template.eventListItem.helpers({
   localDate: function(udatestring, timezone) {
       var udate = moment(udatestring);
       var ldate = udate.clone().tz(timezone);
       return ldate.format();

   }
});


Template.eventListItem.events({

    'click tr': function() {
        Router.go('eventPage', {_id: this._id});
    }


});