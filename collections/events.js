/**
 * Created by caesar on 3/9/16.
 */
Events = new Meteor.Collection('events');


Meteor.methods({
    'addTab': function (tab1, tab2, tab3) {
        console.log('attempting to add a tab');
        console.log(arguments);
        if (_.isObject(tab1)) {
            Events.insert(tab1);
        }
        if (_.isObject(tab2)) {
            Events.insert(tab2);
        }
        if (_.isObject(tab3)) {
            Events.insert(tab3);
        }
        return true;
    }
});


// Please replace this eventually!!

Events.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

