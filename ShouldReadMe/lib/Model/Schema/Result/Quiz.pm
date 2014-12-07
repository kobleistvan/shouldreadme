use utf8;
package Model::Schema::Result::Quiz;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::Quiz

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<quiz>

=cut

__PACKAGE__->table("quiz");

=head1 ACCESSORS

=head2 quiz_id

  data_type: 'integer'
  is_auto_increment: 1
  is_nullable: 0

=head2 title

  data_type: 'varchar'
  is_nullable: 1
  size: 100

=head2 offer

  data_type: 'varchar'
  is_nullable: 0
  size: 100

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
  "quiz_id",
  { data_type => "integer", is_auto_increment => 1, is_nullable => 0 },
  "title",
  { data_type => "varchar", is_nullable => 1, size => 100 },
  "offer",
  { data_type => "varchar", is_nullable => 0, size => 100 },
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

=item * L</quiz_id>

=back

=cut

__PACKAGE__->set_primary_key("quiz_id");

=head1 RELATIONS

=head2 fineprint_quizzes

Type: has_many

Related object: L<Model::Schema::Result::FineprintQuiz>

=cut

__PACKAGE__->has_many(
  "fineprint_quizzes",
  "Model::Schema::Result::FineprintQuiz",
  { "foreign.quiz_id" => "self.quiz_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 quiz_questions

Type: has_many

Related object: L<Model::Schema::Result::QuizQuestion>

=cut

__PACKAGE__->has_many(
  "quiz_questions",
  "Model::Schema::Result::QuizQuestion",
  { "foreign.quiz_id" => "self.quiz_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 prints

Type: many_to_many

Composing rels: L</fineprint_quizzes> -> print

=cut

__PACKAGE__->many_to_many("prints", "fineprint_quizzes", "print");


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 02:48:20
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:lvyRa62XkamIh0ziU6SRlQ


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
