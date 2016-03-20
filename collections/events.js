/**
 * Created by caesar on 3/9/16.
 */
Events = new Meteor.Collection('events');
/*
 var EventsSchema = new SimpleSchema({
 email: {
 type: String,
 label: "Email to send invite to."
 },
 token: {
 type: String,
 label: "Invitation token."
 },
 role: {
 type: String,
 label: "Role to apply to the user."
 },
 date: {
 type: String,
 label: "Invitation date"
 }
 });

 Invitations.attachSchema(InvitationSchema);

 */

updateValue = new Meteor.Collection('update_value');
Meteor.methods({
    eventAddMaster: function (title, desc, author, date, timezone, gr) {


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

        author = Meteor.users.findOne({_id: Meteor.userId()}).emails[0].address;

        if ((date === null) || date === "" || date == null || date == "") {
            throw new Meteor.Error("Date invalid", "The date you submitted is erroneous" );
        }
        if ((timezone === null) || timezone === "" || timezone == null || timezone == "") {
            throw new Meteor.Error("Timezone invalid", "The timezone you submitted is erroneous" );
        }
        if (gr < 0) {
            throw new Meteor.Error("Group Relevancy invalid", "The title you submitted is negative" );
        }

        console.log("Inserting New Event by " + author);

        Events.insert({
            title: title,
            desc: desc,
            author: author,
            date: date,
            timezone: timezone,
            groupRelevancy: gr
        });

        updateValue.remove({});

        var random_id = Random.id();

        updateValue.insert({
            val: random_id
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

