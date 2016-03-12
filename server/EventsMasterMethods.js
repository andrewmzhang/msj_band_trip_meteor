/**
 * Created by Belisarius on 3/11/2016.
 */


Meteor.methods({
    addEventMaster: function (title, desc, author, date, timezone, gr) {

        var d = moment(date, 'D/M/YYYY');
        if (d == null || !d.isValid()) return false;

        var isDate = str.indexOf(d.format('D/M/YYYY')) >= 0
            || str.indexOf(d.format('DD/MM/YYYY')) >= 0
            || str.indexOf(d.format('D/M/YY')) >= 0
            || str.indexOf(d.format('DD/MM/YY')) >= 0;

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