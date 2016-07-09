/**
 * Created by caesar on 7/5/16.
 */

Template.registerHelper('userIdentity', function() {
    return Modules.both.getUserIndentity(Meteor.user());
});