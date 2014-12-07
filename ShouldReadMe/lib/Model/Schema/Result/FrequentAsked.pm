use utf8;
package Model::Schema::Result::FrequentAsked;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::FrequentAsked

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<frequent_asked>

=cut

__PACKAGE__->table("frequent_asked");

=head1 ACCESSORS

=head2 faq_id

  data_type: 'integer'
  is_auto_increment: 1
  is_nullable: 0

=head2 title

  data_type: 'varchar'
  is_nullable: 0
  size: 100

=head2 description

  data_type: 'varchar'
  is_nullable: 0
  size: 100

=head2 created_at

  data_type: 'timestamp'
  datetime_undef_if_invalid: 1
  default_value: '0000-00-00 00:00:00'
  is_nullable: 0

=head2 updated_at

  data_type: 'timestamp'
  datetime_undef_if_invalid: 1
  default_value: current_timestamp
  is_nullable: 0

=cut

__PACKAGE__->add_columns(
  "faq_id",
  { data_type => "integer", is_auto_increment => 1, is_nullable => 0 },
  "title",
  { data_type => "varchar", is_nullable => 0, size => 100 },
  "description",
  { data_type => "varchar", is_nullable => 0, size => 100 },
  "created_at",
  {
    data_type => "timestamp",
    datetime_undef_if_invalid => 1,
    default_value => "0000-00-00 00:00:00",
    is_nullable => 0,
  },
  "updated_at",
  {
    data_type => "timestamp",
    datetime_undef_if_invalid => 1,
    default_value => \"current_timestamp",
    is_nullable => 0,
  },
);

=head1 PRIMARY KEY

=over 4

=item * L</faq_id>

=back

=cut

__PACKAGE__->set_primary_key("faq_id");

=head1 RELATIONS

=head2 faq_questions

Type: has_many

Related object: L<Model::Schema::Result::FaqQuestion>

=cut

__PACKAGE__->has_many(
  "faq_questions",
  "Model::Schema::Result::FaqQuestion",
  { "foreign.faq_id" => "self.faq_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 fineprint_faqs

Type: has_many

Related object: L<Model::Schema::Result::FineprintFaq>

=cut

__PACKAGE__->has_many(
  "fineprint_faqs",
  "Model::Schema::Result::FineprintFaq",
  { "foreign.faq_id" => "self.faq_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 prints

Type: many_to_many

Composing rels: L</fineprint_faqs> -> print

=cut

__PACKAGE__->many_to_many("prints", "fineprint_faqs", "print");


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 02:48:20
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:VbxESnMVjd0vxPPm993kvw


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
