/**
 * Created by caesar on 7/4/16.
 */

var getUserIdentity = function(user) {
    var emails = user.emails;
    var services = user.services;

    if (emails) {
        return emails[0].address;
    } else if (services) {
        return _getEmailFromService(services);
    } else {
        return user.profile.name;
    }

};

var _getEmailFromService = function(services) {
    for (var service in services) {
        var current = services[service];
        return current.email;
    }
};

Modules.both.getUserIndentity = getUserIdentity;