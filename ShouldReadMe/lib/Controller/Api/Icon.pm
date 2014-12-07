package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';
use Dancer2::Plugin::Database;

prefix '/icon' => sub {
    get '/' => sub {
        my $icons = database->quick_select($table_name, {});
        warn to_dumper $icons;
         
    };
    
    post '/' => sub {
    };
    
    put '/' => sub {
        return to_json({mata => "user doesn't exist"} );
    };
    
    del '/' => sub {
    };
    
};

1;
