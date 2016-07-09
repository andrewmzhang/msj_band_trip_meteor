/**
 * Created by caesar on 3/12/16.
 */
Template.login.events({
    'click [data-social-login]': function( event, template ) {
        var service = event.target.getAttribute( 'data-social-login' ),
            options = {
                requestPermissions: [ 'email' ]
            };

        console.log(service);
        
        Meteor[service](options, function(error) {
            if (error)
                console.log(error.message);
        });


    }
});