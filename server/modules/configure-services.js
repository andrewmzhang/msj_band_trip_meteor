/**
 * Created by caesar on 7/6/16.
 */
var services = Meteor.settings.private.oAuth;
var configure = function() {
    console.log("Upsertng");
    if ( services ) {
        for( var service in services ) {
            ServiceConfiguration.configurations.upsert( { service: service }, {
                $set: services[ service ]
            });
        }
    }
};

Modules.server.configureServices = configure;