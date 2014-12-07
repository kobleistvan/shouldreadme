package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';
use Dancer2::Plugin::Ajax;

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
    
    # I want to test if backbone calls this or get. This may be used for simple jquery-ajax calls.
    ajax '/:user' => sub {
         to_json({'status'=>'ajax call successfull call'});
    };
    
};

1;
