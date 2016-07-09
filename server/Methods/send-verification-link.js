/**
 * Created by caesar on 7/9/16.
 */
Meteor.methods({
    sendVerificationLink : function() {
        var userId = Meteor.userId();
        if ( userId ) {
            return Accounts.sendVerificationEmail( userId );
        }
    }
});