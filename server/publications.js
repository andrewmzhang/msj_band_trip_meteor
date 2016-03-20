/**
 * Created by caesar on 3/9/16.
 *
 * Put your publications here.
 */
Meteor.publish('events', function (id) {
    console.log('subscribing to events', id);
    return Events.find();
});

Meteor.publish('update_value', function () {
    console.log('subscring to updateValue');
    return updateValue.find();
});

Meteor.publish( 'users', function() {
    console.log("Subscribin to uesrs");
    var isAdmin = Roles.userIsInRole( this.userId, 'admin' );

    if ( isAdmin ) {
        return [
            Meteor.users.find( {}, { fields: { "emails.address": 1, "roles": 1 } } ),
            Invitations.find( {}, { fields: { "email": 1, "role": 1, "date": 1 } } )
        ];
    } else {
        return null;
    }
});