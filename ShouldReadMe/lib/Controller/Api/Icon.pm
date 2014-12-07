package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';
use Dancer2::Plugin::Ajax;

use Digest::SHA1 qw(sha1_hex);
use Dancer2::Plugin::DBIC qw(schema resultset rset);

prefix '/icon' => sub {
    get '/' => sub {
         my $icons = resultset('Icon')->search();
        #  warn to_dumper \@icons;
         
         while( my $icon = $icons->next){
            warn to_dumper $icon->file_name();
         }
        template 'index';
    };
    
    post '/' => sub {
    };
    
    put '/' => sub {
        return to_json({mata => "user doesn't exist"} );
    };
    
    del '/' => sub {
    };
    
    # I want to test if backbone calls this or get. This may be used for simple jquery-ajax calls.
    ajax '/:user' => sub {
         to_json({'status'=>'ajax call successfull call'});
    };
    
};

1;
