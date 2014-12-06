package ShouldReadMe;
use Dancer2;

use Api::User;

our $VERSION = '0.1';

get '/' => sub {
    template 'index';
};

true;
