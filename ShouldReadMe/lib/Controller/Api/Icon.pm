package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';
use Dancer2::Plugin::Ajax;

use Digest::SHA1 qw(sha1_hex);
use Dancer2::Plugin::DBIC qw(schema resultset rset);

prefix '/icon' => sub {
    get '/' => sub {
         my $icons = resultset('Icon')->search();
        #  warn to_dumper \@icons;
         my @icons;
         while( my $icon = $icons->next){
            push @icons, {
                            icon_id => $icon->id(),
                            title   => $icon->title(),
                            tip_description => $icon->tip_description(),
                            tooltip => $icon->tooltip(),
                            file_name=>$icon->file_name(),
                            type    => $icon->type(),
                            status  => $icon->status(),
                         }
         }
         return to_json( \@icons);
        
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
