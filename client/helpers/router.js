/**
 * Created by caesar on 3/9/16.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        Meteor.subscribe("update_value");
        Meteor.subscribe('users');
        //Meteor.subscribe('serviceEmails');
        return Meteor.subscribe('events');

    },
    progressSpinner: false

});

Router.map(function() {
    this.route('eventsList', {path: '/'});



    this.route('login', {path: '/login'});

    this.route('eventPage', {
        path: '/event/:_id',
        data: function() {return Events.findOne(this.params._id);}
    });

    this.route('users', {
        path: '/users'
    });

    this.route('eventAddMaster', {
        path: '/eventAddMaster'
    });



 //   this.route('eventPage', {
 //       path: '/posts/:_id',
 //       data: function() {return Events.findOne(this.params._id);}
 //   });

//    this.route('eventSubmit', {
//        path: '/submit'
//    });


});

var userOnly = function () {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate)
        } else {
            this.render('accessDenied');
            this.stop();
        }
    } else {
        this.next();
    }
};

var adminonly = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate)
        } else {
            this.render('accessDenied');
            this.stop();
        }
    } else {
        if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
            this.render('accessDenied');
            this.stop();
        } else if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
            this.next();
        }

    }
};
Router.onBeforeAction(adminonly, {only:[ "eventAddMaster", 'users']});
//Router.onBeforeAction(adminonly, {only: 'users'});