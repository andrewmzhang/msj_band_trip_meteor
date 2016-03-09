
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


/*
    Template.newTab.events({
        'submit': function (e, tmpl) {
            var tab = extractData(e.currentTarget);
            tab.total = Number(tab.total);
            Events.insert(tab);
            return false;
        }
    });

    Template.tab.events({
        'click li': function (e, tmpl) {
            Session.set('selectedTab', tmpl.data);
        }
    });

    Template.editTab.tab = function () {
        return Session.get('selectedTab');
    };

    Template.editTab.events({
        'submit': function (e, tmpl) {
            var tab = extractData(e.currentTarget);
            tab.total = Number(tab.total);
            Events.update({_id: tab._id}, {
                $set: {name: tab.name, total: tab.total}
            });
            return false;
        }
    });
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
