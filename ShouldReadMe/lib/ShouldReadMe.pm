package ShouldReadMe;
use Dancer2;

use Controller::Api::User;

our $VERSION = '0.1';

# Global hook that hooks any request
hook before => sub {
    if (! session('user') && (request->path_info ne '/' && request->path_info ne '/#login' && request->path_info ne '/#register')) {
        warn request->path_info;
        session requested_path => request->path_info;
        redirect '/#login';
    }
};

get '/' => sub {
    warn session('requested_path');
    warn "\n";
    template 'launch';
};

# Last resort...
any qr{.*} => sub {
    template 'launch';
};


post '/login' => sub {
    # Validate the username and password they supplied
    if (params->{user} eq 'bob' && params->{pass} eq 'bob') {
        session user => params->{user};
        redirect session('requested_path');
    } else {
        redirect '/#login?failed=1';
    }
};


true;
