/**
 * Created by Belisarius on 3/14/2016.
 */


Template.users.helpers({
   users: function() {
       if(Roles.userIsInRole(Meteor.userId(), 'admin')){
           return Meteor.users.find({});
       }
       return false;

   },

    isCurrentUser: function(a) {
      if (a === Meteor.userId()) {
          return true;
      } else {
          return false;
      }
    },

    select: function(a, b) {
        if (a === b) {
            return 'selected'
        }
        if (a == null && b === 'user') {
            return 'selected'
        }
    },

    disableIfSuperAdmin: function(userid) {
        if (Roles.userIsInRole(userid, 'superAdmin')) {
            return "disabled";
        }

        return "";
    },

    isSuper: function(a) {
        if (Roles.userIsInRole(a, 'superAdmin')) {
            return true;
        } else {
            return false;
        }
    },

});

Template.users.events({
    'change [name="userRole"]': function(event, template) {
        var role = $(event.target).find('option:selected').val();
        console.log("New role: " + role);

        Meteor.call("setRoleOnUser", {
            user: this._id,
            role: role
        }, function(error, response) {
            if (error) {
                sAlert.error(error.reason + "<br>" + response);
            }
        });

    }


});