package ShouldReadMe::User;
use Dancer2 appname => 'ShouldReadMe';


# use a lexical prefix so we don't override it globally
prefix '/user' => sub {
    get '/' => sub {
        template 'index';
    };
};

1;
