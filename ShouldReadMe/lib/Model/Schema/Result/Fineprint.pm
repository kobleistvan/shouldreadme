use utf8;
package Model::Schema::Result::Fineprint;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::Fineprint

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<fineprint>

=cut

__PACKAGE__->table("fineprint");

=head1 ACCESSORS

=head2 print_id

  data_type: 'integer'
  is_auto_increment: 1
  is_nullable: 0

=head2 title

  data_type: 'varchar'
  is_nullable: 0
  size: 32

=head2 description

  data_type: 'varchar'
  is_nullable: 1
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
  "print_id",
  { data_type => "integer", is_auto_increment => 1, is_nullable => 0 },
  "title",
  { data_type => "varchar", is_nullable => 0, size => 32 },
  "description",
  { data_type => "varchar", is_nullable => 1, size => 100 },
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

=item * L</print_id>

=back

=cut

__PACKAGE__->set_primary_key("print_id");

=head1 RELATIONS

=head2 fineprint_faqs

Type: has_many

Related object: L<Model::Schema::Result::FineprintFaq>

=cut

__PACKAGE__->has_many(
  "fineprint_faqs",
  "Model::Schema::Result::FineprintFaq",
  { "foreign.print_id" => "self.print_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 fineprint_icons

Type: has_many

Related object: L<Model::Schema::Result::FineprintIcon>

=cut

__PACKAGE__->has_many(
  "fineprint_icons",
  "Model::Schema::Result::FineprintIcon",
  { "foreign.print_id" => "self.print_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 fineprint_quizzes

Type: has_many

Related object: L<Model::Schema::Result::FineprintQuiz>

=cut

__PACKAGE__->has_many(
  "fineprint_quizzes",
  "Model::Schema::Result::FineprintQuiz",
  { "foreign.print_id" => "self.print_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 user_fineprints

Type: has_many

Related object: L<Model::Schema::Result::UserFineprint>

=cut

__PACKAGE__->has_many(
  "user_fineprints",
  "Model::Schema::Result::UserFineprint",
  { "foreign.print_id" => "self.print_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 faqs

Type: many_to_many

Composing rels: L</fineprint_faqs> -> faq

=cut

__PACKAGE__->many_to_many("faqs", "fineprint_faqs", "faq");

=head2 quizzes

Type: many_to_many

Composing rels: L</fineprint_quizzes> -> quiz

=cut

__PACKAGE__->many_to_many("quizzes", "fineprint_quizzes", "quiz");

=head2 users

Type: many_to_many

Composing rels: L</user_fineprints> -> user

=cut

__PACKAGE__->many_to_many("users", "user_fineprints", "user");


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 02:48:20
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:KoiZd0RjNuJ1XohMMBQ2Dg


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
