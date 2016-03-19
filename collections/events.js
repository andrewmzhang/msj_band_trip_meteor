/**
 * Created by caesar on 3/9/16.
 */
Events = new Meteor.Collection('events');
updateValue = new Meteor.Collection('update_value');
Meteor.methods({
    eventAddMaster: function (title, desc, author, date, timezone, gr) {



        console.log("Triggered add New");


        var d = moment(date, 'YYYY-MM-DDThh:mm:ssZ', true);
        if (!d.isValid() || d == null || d === null) {
            throw new Meteor.Error("Date mis-formatted", "The date you submitted is incorrectly formatted" );
        }

        if ((title === null) || title === "" || desc == null || desc == "") {
            throw new Meteor.Error("Title invalid", "The title you submitted is erroneous" );
        }
        if ((desc === null) || desc === "" || desc == null || desc == "") {
            throw new Meteor.Error("Description invalid", "The description you submitted is erroneous" );
        }
        if ((author === null) || author === "" || author == null || author == "") {
            throw new Meteor.Error("Author invalid", "The author you submitted is erroneous" );
        }
        if ((date === null) || date === "" || date == null || date == "") {
            throw new Meteor.Error("Date invalid", "The date you submitted is erroneous" );
        }
        if ((timezone === null) || timezone === "" || timezone == null || timezone == "") {
            throw new Meteor.Error("Timezone invalid", "The timezone you submitted is erroneous" );
        }
        if (gr < 0) {
            throw new Meteor.Error("Group Relevancy invalid", "The title you submitted is negative" );
        }

        console.log("Inserting New");

        Events.insert({
            title: title,
            desc: desc,
            author: author,
            date: date,
            timezone: timezone,
            groupRelevancy: gr
        });
    }
});

// Please replace this eventually!!

Events.allow({
    insert: function () {
        return false;
    },
    update: function () {
        return false;
    },
    remove: function () {
        return false;
    }
});


updateValue.allow({
    insert: function() {
        return false;
    },
    update: function() {
        return false;
    },
    remove: function() {
        return false;
    }
});

