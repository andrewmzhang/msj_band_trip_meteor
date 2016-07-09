/**
 * Created by caesar on 7/4/16.
 */


Template.signInWithEmailModal.onCreated( function() {
    var template = Template.instance();
    template.createOrSignIn = new ReactiveVar();
});





Template.signInWithEmailModal.onRendered( function () {
    Modules.client.handleAuthentication({
        form: '#sign-in-with-email',
        template: Template.instance()
    });
});




Template.signInWithEmailModal.events({
    'click [data-auth-type]' : function(event, template) {
        var type = event.target.getAttribute('data-auth-type');
        template.createOrSignIn.set(type);
    },
    'submit form': function(event) {
        event.preventDefault();
    }


});
