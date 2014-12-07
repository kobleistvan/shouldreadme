package ShouldReadMe;
use Dancer2;

use Controller::Api::User;

our $VERSION = '0.1';

# Global hook that hooks any request
hook before => sub {
    if (! session('user') && request->path_info ne '/' && request->path_info ne '/#login' && request->path_info ne '/login' && request->path_info ne '/#register') {
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

get '/get_started' => sub {
    warn session('get_started');
    warn "\n";
    template 'get_started';
};
post '/login' => sub {
    # Validate the username and password they supplied
    if (params->{email} eq 'bob@bob.bob' && params->{password} eq 'bob') {
        session user => params->{email};
        my $requested = session('requested_path');
        session requested_path => undef;
        redirect $requested;
    } else {
        redirect '/#login?failed=1';
    }
};

# Last resort...
any qr{.*} => sub {
    template 'launch';
};

true;
