package ShouldReadMe::Controller::Api;
use Dancer2 appname => 'ShouldReadMe';

use Dancer2::Plugin::DBIC qw(schema resultset rset);

prefix '/faq' => sub {
    get '/:faq_id' => sub {
        my $faq = resultset('FaqQuestion')->find({'faq_id' => params->{faq_id}});

        #  while( my $faq = $faqs->next){
        #     push @faqs, {
        #                     faq_id        => $faq->faq_id(),
        #                     question_id   => $faq->question_id(),
        #                     question      => $faq->question(),
        #                     answer        => $faq->answer(),
        #                     icon          => $faq->icon(),
        #                     created_at    => $faq->created_at(),
        #                     updated_at    => $faq->updated_at(),
        #                  }
        #  }
        
        template 'faq', {
            parameter => to_dumper session
        };
    };
    
    get '/' => sub {
    };
    
    post '/' => sub {
    };
    
    put '/' => sub {
    };
    
    del '/' => sub {
    };
    
};

1;
