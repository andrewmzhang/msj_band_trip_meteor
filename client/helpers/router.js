/**
 * Created by caesar on 3/9/16.
 */
Router.configure({
    //layoutTemplate: 'layout',
    //loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('events');
    },
    progressSpinner: false

});

Router.map(function() {
    this.route('eventsList', {path: '/'});


    this.route('eventPage', {
        path: '/event/:_id',
        data: function() {return Events.findOne(this.params._id);}
    });


 //   this.route('eventPage', {
 //       path: '/posts/:_id',
 //       data: function() {return Events.findOne(this.params._id);}
 //   });

//    this.route('eventSubmit', {
//        path: '/submit'
//    });
});