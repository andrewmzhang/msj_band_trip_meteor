/**
 * Created by caesar on 3/9/16.
 */
if (Events.find().count() === 0) {
    Events.insert({
        title: 'Test Event One',
        desc: 'this is a test event',
        author: 'Andy Zhang',
        date: (new Date(Date.UTC(2017, 5, 25, 18, 30))).toString(),
        groupRelevancy: 0
    });

    Events.insert({
        title: 'Test Event Two',
        desc: 'this is two',
        author: 'Sacha Grief',
        date: (new Date(Date.UTC(2017, 5, 25, 18, 30))).toString(),
        groupRelevancy: 1
    });

}









