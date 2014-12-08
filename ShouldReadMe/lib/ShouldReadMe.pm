package ShouldReadMe;
use Dancer2;

use Controller::Api::User;
use Controller::Api::Icon;
use Controller::Api::Faq;
use Controller::Api::Fineprint;

use Digest::SHA1 qw(sha1_hex);
use Dancer2::Plugin::DBIC qw(schema resultset rset);

our $VERSION = '0.1';

# Global hook that hooks any request
hook before => sub {
    if (! session('user') && 
        request->path_info ne '/#' && 
        request->path_info ne '/' && 
        request->path_info !~ m/\/faq\/\d+/ && 
        request->path_info ne '/#signin' && 
        request->path_info ne '/signin' && 
        request->path_info ne '/#register' &&
        request->path_info ne '/register') {
        warn request->path_info;
        session requested_path => request->path_info;
        redirect '/#signin';
    }
};

get '/' => sub {
    if (session('requested_path')){
        warn session('requested_path');
    }
    template 'launch';
};

get '/signout' => sub {
    session->delete('user');
    forward '/';
};

get '/getstarted' => sub {
    if ( session('getstarted')) {
        warn session('getstarted');
    }
    template 'get_started';
};

# Validate the username and password they supplied
post '/signin' => sub {
    if (!params->{email} || !params->{password}){
        redirect '/#signin';   
    }
    my $current_user = resultset('User')->search({-and => [password =>  sha1_hex(params->{password}), email => params->{email}] })->first();
    if ($current_user) {
        session user => $current_user->user_id;
        warn session('requested_path');
        my $requested = session('requested_path') ? session('requested_path') : '/getstarted';
        session requested_path => undef;
        redirect $requested;
    } else {
        warn 'signin failed! \n';
        redirect '/#signin';
    }
};

# Register a new user and redirect him to getstarted. If already registered, redirect him to signin.
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
    my $d =resultset('User')->search({-and => [website => params->{website}, email => params->{email}] });
    if ($d->count()) {
        warn "User already registered";
        redirect '/#signin';
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
    redirect '/getstarted';
};

# Last resort...
any qr{.*} => sub {
    template 'launch';
};

true;
