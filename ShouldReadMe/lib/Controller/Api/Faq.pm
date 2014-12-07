package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';

use Dancer2::Plugin::DBIC qw(schema resultset rset);

prefix '/faq' => sub {
    get '/' => sub {
         my $faqs = resultset('FaqQuestion')->search();
        #  warn to_dumper \@faqs;
         my @faqs;
         while( my $faq = $faqs->next){
            push @faqs, {
                            faq_id        => $faq->id(),
                            question_id   => $faq->title(),
                            question      => $faq->tip_description(),
                            answer        => $faq->tooltip(),
                            icon          => $faq->file_name(),
                            created_at    => $faq->type(),
                            updated_at    => $faq->status(),
                         }
         }
         return to_json( \@faqs);
        
    };
    
    post '/' => sub {
    };
    
    put '/' => sub {
    };
    
    del '/' => sub {
    };
    
};

1;
