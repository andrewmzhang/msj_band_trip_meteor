/**
 * Created by caesar on 7/5/16.
 */
Template.authenticatedNavigation.onCreated( function() {
    var template = Template.instance();
    template.subscribe( 'serviceEmails' );
});