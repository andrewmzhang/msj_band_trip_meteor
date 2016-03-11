/**
 * Created by caesar on 3/9/16.
 */
if (Events.find().count() === 0) {
    Events.insert({
        title: 'Test Event One',
        desc: 'this is a test event',
        author: 'Andy Zhang',
        timezone: "Europe/Paris",
        date:  moment.tz("2016-03-10T21:00:00", "Europe/Paris").tz('Zulu').format(),
        groupRelevancy: 0
    });

    Events.insert({
        title: 'Test Event Two',
        desc: 'this is two',
        author: 'Sacha Grief',
        timezone: "America/Los_Angeles",
        date: moment.tz("2016-03-10T21:30:00", "America/Los_Angeles").tz("Zulu").format(),
        groupRelevancy: 1
    });

    Events.insert({
        title: 'Airport SFO',
        desc: 'Nice airport bro!!',
        author: 'Andy Zhang',
        timezone: "America/Los_Angeles",
        date: moment.tz("2016-03-05T06:30:00", "America/Los_Angeles").tz("Zulu").format(),
        groupRelevancy: 1
    });

    Events.insert({
        title: 'Airport SFO',
        desc: 'Not so cool airport bro!!',
        author: 'Andy Zhang',
        timezone: "America/Los_Angeles",
        date: moment.tz("2016-03-05T07:30:00", "America/Los_Angeles").tz("Zulu").format(),
        groupRelevancy: 0
    });

}

