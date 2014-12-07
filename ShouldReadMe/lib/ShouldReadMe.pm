package ShouldReadMe;
use Dancer2;

use Controller::Api::User;

our $VERSION = '0.1';

get '/' => sub {
    template 'launch';
};

# Last resort...
any qr{.*} => sub {
    template 'launch';
};
    
true;
