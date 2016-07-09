/**
 * Created by caesar on 7/4/16.
 */
var template;

var handleAuthentication = function (options) {
    template = options.template;
    _validate(options.form);
};

var _validate = function(form) {
    $(form).validate(validation());
};

var validation = function() {

    return {
        rules: {
            emailAddress: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            emailAddress: {
                required: "Email is required...",
                email: "A VALID email is required..."
            },
            password: {
                required: "A Password is required..."
            }
        }, submitHandler: function() {
            _handleAuth();
        }

    };
};


var _handleAuth = function() {
    var type = template.createOrSignIn.get();
    var email = template.find( '[name="emailAddress"]' ).value;
    var password = template.find( '[name="password"]' ).value;

    if (type === 'create') {
        _createUser(email, password, 'Welcome Abord');
    } else {
        _loginUser(email, password, 'Welcome back');
    }
};

var _createUser = function (email, password, message) {
    Accounts.createUser({
        email: email,
        password: password
    }, function(error) {
        if ( error ) {
            alert( error.reason, 'danger' );
        } else {
            /*
            Meteor.call('sendVerificationLink', function (error, response)  {
               if (error) {
                   alert(error.reason);
               } else {
                   alert('Welcome!');
               }
            }) */
            alert(message);
        }
    });
};

var _loginUser = function (email, password, message) {
    Meteor.loginWithPassword(email, password, function(error) {
        if ( error ) {
            alert( error.reason, 'warning' );
        } else {
            alert( message, 'success' );
        }
    });

};




Modules.client.handleAuthentication = handleAuthentication;
