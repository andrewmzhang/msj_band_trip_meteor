/**
 * Created by caesar on 3/9/16.
 */


Meteor.startup(function() {

    sAlert.config({
        effect: 'slide',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: false,
        stack: true,
        offset: 0,
        beep: false,

        onClose: _.noop


    });

});