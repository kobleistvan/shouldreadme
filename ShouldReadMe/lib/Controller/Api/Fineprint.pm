package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';
use Dancer2::Plugin::Ajax;

use Dancer2::Plugin::DBIC qw(schema resultset rset);

prefix '/fineprint' => sub {
    get '/' => sub {
         my $faqs = resultset('FaqQuestion')->search();
        #  warn to_dumper \@faqs;
         my @faqs;
         while( my $faq = $faqs->next){
            push @faqs, {
                            faq_id        => $faq->faq_id(),
                            question_id   => $faq->question_id(),
                            question      => $faq->question(),
                            answer        => $faq->answer(),
                            icon          => $faq->icon(),
                            created_at    => $faq->created_at(),
                            updated_at    => $faq->updated_at(),
                         }
         }
         return to_json( \@faqs);
        
    };
    
    ajax '/' => sub {
        warn from_json(params->{icons});
    };
    
    put '/' => sub {
    };
    
    del '/' => sub {
    };
    
};

1;
