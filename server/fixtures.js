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
        groupRelevancy: 0,
        image: "NONE"
    });

    Events.insert({
        title: 'Test Event Two',
        desc: 'this is two',
        author: 'Sacha Grief',
        timezone: "America/Los_Angeles",
        date: moment.tz("2016-03-10T21:30:00", "America/Los_Angeles").tz("Zulu").format(),
        groupRelevancy: 1,
        image: "NONE"
    });

    Events.insert({
        title: 'Airport SFO',
        desc: 'Aeroport 2',
        author: 'Andy Zhang',
        timezone: "America/Los_Angeles",
        date: moment.tz("2016-03-05T06:30:00", "America/Los_Angeles").tz("Zulu").format(),
        groupRelevancy: 1,
        image: "NONE"
    });

    Events.insert({
        title: 'Airport SFO',
        desc: 'Aeroport 1',
        author: 'Andy Zhang',
        timezone: "America/Los_Angeles",
        date: moment.tz("2016-03-05T07:30:00", "America/Los_Angeles").tz("Zulu").format(),
        groupRelevancy: 0,
        image: "NONE"

    });

}

if (updateValue.find().count() === 0) {
    var random_id = Random.id();

    console.log("New Rand id: " + random_id);

    updateValue.insert({
        val: random_id
    });

}


if (updateValue.find().count() > 1) {
    updateValue.remove({});

    var a = Random.id();

    updateValue.insert({
        val: a
    });
}


if (Meteor.users.find().count() == 0) {
    id = Accounts.createUser({
        email: "me@andrewmzhang.com",
        password: "admin",
        profile: {name: 'Andy'}
    });

    Roles.addUsersToRoles(id, ['superAdmin', 'admin']);
}
