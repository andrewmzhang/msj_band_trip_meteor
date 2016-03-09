/**
 * Created by caesar on 3/9/16.
 *
 * Put your publications here.
 */
Meteor.publish('events', function (id) {
    console.log('subscribing to events', id);
    return Events.find();
});