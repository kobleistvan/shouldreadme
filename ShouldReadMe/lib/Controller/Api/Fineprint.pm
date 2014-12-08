package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';
use Dancer2::Plugin::Ajax;

use Dancer2::Plugin::DBIC qw(schema resultset rset);

prefix '/fineprint' => sub {
    get '/' => sub {
    };
    
    ajax '/' => sub {
         my %allparams = params;
        warn  %allparams ;
    };
    
    put '/' => sub {
    };
    
    del '/' => sub {
    };
    
};

1;
