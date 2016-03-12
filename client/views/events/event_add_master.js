/**
 * Created by Belisarius on 3/11/2016.
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


Template.eventAddMaster.events({
    'submit form': function (event) {
        event.preventDefault();

        var title = event.target.title.value;
        var desc = event.target.desc.value;
        var author = "Server Admin";
        var timezone = event.target.timezone.value;

        var day = event.target.date.value;

        var date = moment.tz(day, 'YYYY-MM-DDThh:mm:ss', timezone).tz("Zulu").format();
        var groupRelevancy = event.target.groupRelevancy.value;

        console.log(date);
        if (!date.isValid()) {
            return false;
        }

        var confirm = window.confirm("Is this the correct data:\n" +
            "Title: " + title + "\n" +
            "Desc: " + desc + "\n" +
            "Author: " + author + "\n" +
            "Date: " + moment(date).tz(timezone).format() + "\n" +
            "TimeZone: " + timezone + "\n" +
            "Group Rel:" + groupRelevancy + "\n"
        );

        if (confirm == true) {
            console.log("Success");

        } else {
            console.log("failed");
        }

    }


});