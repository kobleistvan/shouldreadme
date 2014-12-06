package ShouldReadMe;
use Dancer2;

use User::User;
use Api::Api;


#use FindBin;
#use Cwd qw( realpath );
#use lib realpath("$FindBin::Bin/../lib");
our $VERSION = '0.1';

get '/' => sub {
    template 'index';
};

true;
