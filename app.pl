use Dancer2;
set port => 80;


get '/' => sub {
    "Hello World"
};
dance;
