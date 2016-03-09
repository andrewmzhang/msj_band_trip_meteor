/**
 * Created by caesar on 3/9/16.
 */

Meteor.onConnection(function (conn) {
    console.log(conn);
    conn.onClose(function () {
        console.log('connection to ', conn.id, ' closed');
    });
});