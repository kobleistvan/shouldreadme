package ShouldReadMe;
use Dancer2;

use Controller::Api::User;
use Controller::Api::Icon;

use Digest::SHA1 qw(sha1_hex);
use Dancer2::Plugin::DBIC qw(schema resultset rset);

our $VERSION = '0.1';

# Global hook that hooks any request
hook before => sub {
    if (! session('user') && 
        request->path_info ne '/' && 
        request->path_info ne '/#login' && 
        request->path_info ne '/login' && 
        request->path_info ne '/#register' &&
        request->path_info ne '/register') {
        warn request->path_info;
        session requested_path => request->path_info;
        redirect '/#login';
    }
};

get '/' => sub {
    if (session('requested_path')){
        warn session('requested_path');
    }
    template 'launch';
};

get '/get_started' => sub {
    if ( session('get_started')) {
        warn session('get_started');
    }
    template 'get_started';
};

# Validate the username and password they supplied
post '/login' => sub {
    if (!params->{email} || !params->{password}){
        redirect '/#login';   
    }
    my $current_user = resultset('User')->search({-and => [password =>  sha1_hex(params->{password}), email => params->{email}] })->first();
    if ($current_user) {
        session user => $current_user->user_id;
        warn session('requested_path');
        my $requested = session('requested_path') ? session('requested_path') : '/#dashboard';
        session requested_path => undef;
        redirect $requested;
    } else {
        warn 'login failed! \n';
        redirect '/#login';
    }
};

# Register a new user and redirect him to dashboard. If already registered, redirect him to login.
post '/register' => sub {
    if (params->{first_name} eq '' ||
        params->{last_name} eq ''  ||
        params->{email} eq ''      ||
        params->{website} eq ''    ||
        params->{password} eq ''   ||
        params->{password_confirmation} eq ''){
            warn "No empty fields allowed!\n";
            redirect '/#register';
        }

    if (params->{password} ne params->{password_confirmation}){
        warn "Password mismatch!\n";
        redirect '/#register';
    }
    
    if ( length(params->{password}) < 6 ) {
        warn "Not enough characters in pw!\n";
        redirect '/#register';
    }
    
    if (resultset('User')->search({-and => [website => params->{website}, email => params->{email}] })) {
        warn "User already registered";
        redirect '/#login';
    }
    
    my $newuser = resultset('User')->create({
            first_name => params->{first_name}, 
            last_name  => params->{last_name}, 
            website    => params->{website}, 
            email      => params->{email}, 
            password   => sha1_hex(params->{password}),
            created_at => undef
         }
    );
    
    redirect '/#get_started';

};

# Last resort...
any qr{.*} => sub {
    warn "dassadd\n\n\n\n";
    template 'launch';
};

true;
