/**
 * Created by caesar on 3/20/16.
 */


Template.exportEvents.events({
    'click .export-data': function(event, template) {
        $(event.target).button('loading');

        var user = Meteor.user();
        var fileName = 'Events';
        var profileHtml = Modules.client.getProfileHTML();

    }
})