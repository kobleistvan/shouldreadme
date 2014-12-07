use utf8;
package Model::Schema::Result::FineprintFaq;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::FineprintFaq

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<fineprint_FAQ>

=cut

__PACKAGE__->table("fineprint_FAQ");

=head1 ACCESSORS

=head2 print_id

  data_type: 'integer'
  is_foreign_key: 1
  is_nullable: 0

=head2 faq_id

  data_type: 'integer'
  is_foreign_key: 1
  is_nullable: 0

=cut

__PACKAGE__->add_columns(
  "print_id",
  { data_type => "integer", is_foreign_key => 1, is_nullable => 0 },
  "faq_id",
  { data_type => "integer", is_foreign_key => 1, is_nullable => 0 },
);

=head1 PRIMARY KEY

=over 4

=item * L</faq_id>

=item * L</print_id>

=back

=cut

__PACKAGE__->set_primary_key("faq_id", "print_id");

=head1 RELATIONS

=head2 faq

Type: belongs_to

Related object: L<Model::Schema::Result::FrequentAsked>

=cut

__PACKAGE__->belongs_to(
  "faq",
  "Model::Schema::Result::FrequentAsked",
  { faq_id => "faq_id" },
  { is_deferrable => 1, on_delete => "RESTRICT", on_update => "RESTRICT" },
);

=head2 print

Type: belongs_to

Related object: L<Model::Schema::Result::Fineprint>

=cut

__PACKAGE__->belongs_to(
  "print",
  "Model::Schema::Result::Fineprint",
  { print_id => "print_id" },
  { is_deferrable => 1, on_delete => "RESTRICT", on_update => "RESTRICT" },
);


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 02:48:20
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:Chu03jWJwfmO09yBF5AHIw


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
