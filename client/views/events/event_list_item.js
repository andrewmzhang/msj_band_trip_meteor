/**
 * Created by caesar on 3/9/16.
 */
Template.eventListItem.helpers({
   localDate: function(udatestring, timezone) {
       console.log("UTC String " + udatestring);
       var udate = moment(udatestring);
       console.log("UTC Date " + udate.format());
       var ldate = udate.clone().tz(timezone);
       console.log("Local Date TZ: " + timezone + " " + ldate.format());
       return ldate.format();

   }
});