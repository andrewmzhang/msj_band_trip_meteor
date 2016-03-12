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



        if ((title === null) || title === "" || desc == null || desc == "") {
            alert("Title invalid");
            return false;
        }
        if ((desc === null) || desc === "" || desc == null || desc == "") {
            alert("Description invalid");
            return false;
        }
        if ((author === null) || author === "" || author == null || author == "") {
            alert("Author invalid");
            return false;
        }
        if ((day === null) || day === "" || day == null || day == "") {
            alert("Date invalid");
            return false;
        }
        if ((timezone === null) || timezone === "" || timezone == null || timezone == "") {
            alert("Timezone invalid");
            return false;
        }
        if (groupRelevancy < 0) {
            alert("Group relevancy invalid");
            return false;
        }

        console.log("Strings passed");

        var date = moment.tz(day, 'YYYY-MM-DDThh:mm:ss', timezone).tz("Zulu").format();
        var groupRelevancy = event.target.groupRelevancy.value;



        var d = moment(day, 'YYYY-MM-DDThh:mm:ss', true);


        if (!d.isValid() || d === null) {
            alert("Date format invalid");
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

        console.log(date);

        if (confirm == true) {
            Meteor.call("eventAddMaster", title, desc, author, date, timezone, groupRelevancy, function(error, id) {
                if (error) {
                    return alert("Server has errored. Please check inputs. Output: " + error.reason);
                }
                alert("Event added to master list!");
            });
        } else {
            alert("Failed to confirm...");
            console.log("failed");
        }

    }


});