
/*

Events contains:
title:
desc:
author:
UTC Date/Time (can we use POSIX??):
Default Locale (eg. France, Luxembourg, Pacific Standard Time, etc.):
group relevancy (eg. 1, 2, 3, 4... etc.):

group relevancy: 0 means for all, all positive ints define group specs.


*/

Events = new Meteor.Collection('events');

if (Meteor.isClient) {
    Meteor.subscribe('events');

    function extractData(form) {
        return _.reduce($(form).serializeArray(), function (memo, item) {
            memo[item.name] = item.value;
            return memo;
        }, {});
    }

    Template.eventsDisplay.events = function () {
        return Events.find();
    }
}
/*
    Template.newTab.events({
        'submit': function (e, tmpl) {
            var tab = extractData(e.currentTarget);
            tab.total = Number(tab.total);
            Events.insert(tab);
            return false;
        }
    });

    Template.tab.events({
        'click li': function (e, tmpl) {
            Session.set('selectedTab', tmpl.data);
        }
    });

    Template.editTab.tab = function () {
        return Session.get('selectedTab');
    };

    Template.editTab.events({
        'submit': function (e, tmpl) {
            var tab = extractData(e.currentTarget);
            tab.total = Number(tab.total);
            Events.update({_id: tab._id}, {
                $set: {name: tab.name, total: tab.total}
            });
            return false;
        }
    });
    */



/*

 Events contains:
 title:
 desc:
 author:
 UTC Date/Time (can we use POSIX??):
 Default Locale (eg. France, Luxembourg, Pacific Standard Time, etc.):
 group relevancy (eg. 1, 2, 3, 4... etc.):

 group relevancy: 0 means for all, all positive ints define group specs.


 */

if (Meteor.isServer) {
    console.log('started server');

    if (Events.find().count() === 0) {
        Events.insert({
            title: 'Test Event One',
            desc: 'this is a test event',
            author: 'Andy Zhang',
            date: (new Date(Date.UTC(2017, 5, 25, 18, 30))).toString(),
            groupRelevancy: 0
        });

        Events.insert({
            title: 'Test Event Two',
            desc: 'this is two',
            author: 'Sacha Grief',
            date: (new Date(Date.UTC(2017, 5, 25, 18, 30))).toString(),
            groupRelevancy: 0
        });

    }



    Meteor.publish('events', function (id) {
        console.log('subscribing to events', id);
        return Events.find();
    });

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

    Meteor.startup(function () {
        // code to run on server at startup
    });

    Meteor.onConnection(function (conn) {
        console.log(conn);
        conn.onClose(function () {
            console.log('connection to ', conn.id, ' closed');
        });
    });

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
    })

}
