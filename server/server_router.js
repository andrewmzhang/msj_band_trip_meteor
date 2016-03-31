/**
 * Created by caesar on 3/21/16.
 */
Router.map(function () {
    this.route('exportEvents', {
        path: '/exportEvents.json',
        where: 'server',
        action: function () {
            var json = Events.find().fetch(); // what ever data you want to return
            this.response.end(JSON.stringify(json));
        }
    });

    this.route('exportUpdate', {
        path: '/exportUpdate.json',
        where: 'server',
        action: function() {
            var json = updateValue.findOne();
            this.response.end(JSON.stringify(json));

        }
    })
});