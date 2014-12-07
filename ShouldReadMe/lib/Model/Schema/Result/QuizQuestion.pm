use utf8;
package Model::Schema::Result::QuizQuestion;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::QuizQuestion

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<quiz_question>

=cut

__PACKAGE__->table("quiz_question");

=head1 ACCESSORS

=head2 quiz_id

  data_type: 'integer'
  is_foreign_key: 1
  is_nullable: 0

=head2 question_id

  data_type: 'integer'
  is_auto_increment: 1
  is_nullable: 0

=head2 question

  data_type: 'varchar'
  is_nullable: 0
  size: 100

=head2 answer

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
  "quiz_id",
  { data_type => "integer", is_foreign_key => 1, is_nullable => 0 },
  "question_id",
  { data_type => "integer", is_auto_increment => 1, is_nullable => 0 },
  "question",
  { data_type => "varchar", is_nullable => 0, size => 100 },
  "answer",
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

=item * L</question_id>

=back

=cut

__PACKAGE__->set_primary_key("question_id");

=head1 RELATIONS

=head2 quiz

Type: belongs_to

Related object: L<Model::Schema::Result::Quiz>

=cut

__PACKAGE__->belongs_to(
  "quiz",
  "Model::Schema::Result::Quiz",
  { quiz_id => "quiz_id" },
  { is_deferrable => 1, on_delete => "RESTRICT", on_update => "RESTRICT" },
);


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 02:48:20
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:8/d64bppcXBy4K/faIIjkA


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
