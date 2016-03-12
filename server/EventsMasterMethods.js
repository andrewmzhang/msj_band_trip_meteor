/**
 * Created by Belisarius on 3/11/2016.
 */


Meteor.methods({
    addEventMaster: function (title, desc, author, date, timezone, gr) {

        var d = moment(date, 'YYYY-MM-DDThh:mm:ss', true).isValid();
        if (d == null || !d.isValid()) return false;

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

        if (!d.isValid() || date !== null || date != null) {
            console.log("Date is invalid!!");
            throw new Meteor.Error("Date mis-formatted", "The date you submitted is incorrectly formatted" );
        }


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