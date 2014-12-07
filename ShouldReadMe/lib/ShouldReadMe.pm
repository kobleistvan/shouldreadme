package ShouldReadMe;
use Dancer2;

use Controller::Api::User;

our $VERSION = '0.1';

# Global hook that hooks any request
hook before => sub {
    if (! session('user') && request->path_info ne '/') {
        session requested_path => request->path_info;
        redirect '/';
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


# get '/login' => sub {
#     # Display a login page; the original URL they requested is available as
#     # vars->{requested_path}, so could be put in a hidden field in the form
#     template 'login', { path => vars->{requested_path} };
# };

# post '/login' => sub {
#     # Validate the username and password they supplied
#     if (params->{user} eq 'bob' && params->{pass} eq 'letmein') {
#         session user => params->{user};
#         redirect params->{path} || '/';
#     } else {
#         redirect '/login?failed=1';
#     }
# };


true;
