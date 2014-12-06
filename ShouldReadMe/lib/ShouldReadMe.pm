package ShouldReadMe;
use Dancer2;
use ShouldReadMe::User;
use ShouldReadMe::Api;

our $VERSION = '0.1';

get '/' => sub {
    template 'index';
};

true;
