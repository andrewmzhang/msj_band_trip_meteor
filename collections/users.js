Meteor.methods({
    setRoleOnUser: function(options) {
        check( options, {
            user: String,
            role: String
        });

        if (options.role == 'superAdmin') {
            throw new Meteor.Error("Check your privilege!!", "Only Andy Zhang is eligible " +
                "to be a super admin");
        }

        if (options.role == '' || options.role == 'admin'){

        } else {
            throw new Meteor.Error("Role invalid", "Either pass an empty role or admin. Do " +
                "not use anything else!!")
        }

        if (Roles.userIsInRole(options.user, 'superAdmin')) {
            throw new Meteor.Error("Check your privileges!!", "Don't mess with the person " +
                "that designed this system :P");
        }

        try {
            Roles.setUserRoles(options.user, [options.role]);
        } catch (exception) {
            return exception;
        }
    }
});
