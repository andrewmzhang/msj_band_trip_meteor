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

        if (userid == Meteor.userId()) {
            return "disabled"
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
    
    getEmail: function(uid) {
        return Modules.both.getUserIndentity(uid);
    }

});

Template.users.events({

    'change [name="userRole"]': function(event, template) {
        var r = $(event.target).find('option:selected').val() + "";



        var name = this._id;

        var arr = {user: this._id, role: r};

        Meteor.call("setRoleOnUser", arr, function(error) {
            if (error) {
                sAlert.error(error.error + "\n" + error.reason);
            } else {
                if (r == '') {
                    r = "user"
                }
                sAlert.success(Meteor.users.findOne(name).emails[0].address + " is now a(n) " + r);
            }
        });


    }


});

