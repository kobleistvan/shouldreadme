package ShouldReadMe::Api;
use Dancer2 appname => 'ShouldReadMe';


# use a lexical prefix so we don't override it globally
prefix '/api' => sub {
    post '/generate_embedded' => sub {
        template 'index';
    };
};

1;
