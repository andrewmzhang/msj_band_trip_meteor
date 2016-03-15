/**
 * Created by Belisarius on 3/14/2016.
 */


Template.users.helpers({
   users: function() {
       if(Roles.userIsInRole(Meteor.userId(), 'admin')){
           return Meteor.users.find({});
       }
       return false;

   }
});