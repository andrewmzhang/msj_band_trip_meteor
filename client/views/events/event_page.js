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
