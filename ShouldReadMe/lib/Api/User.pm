package ShouldReadMe::Api::User;
use Dancer2 appname => 'ShouldReadMe';

prefix '/user' => sub {
    get '/' => sub {
        template 'index';
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
