package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';

use Dancer2::Plugin::DBIC qw(schema resultset rset);

prefix '/icon' => sub {
    get '/' => sub {
         my $icons = resultset('Icon')->search();
        #  warn to_dumper \@icons;
         my @icons;
         while( my $icon = $icons->next){
            push @icons, {
                            id => $icon->id(),
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
        return to_json({mata => "icon doesn't exist"} );
    };
    
    del '/' => sub {
    };
    
};

1;
