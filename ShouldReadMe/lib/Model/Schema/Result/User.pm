use utf8;
package Model::Schema::Result::User;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::User

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<user>

=cut

__PACKAGE__->table("user");

=head1 ACCESSORS

=head2 user_id

  data_type: 'integer'
  is_auto_increment: 1
  is_nullable: 0

=head2 first_name

  data_type: 'varchar'
  is_nullable: 0
  size: 32

=head2 last_name

  data_type: 'varchar'
  is_nullable: 0
  size: 32

=head2 website

  data_type: 'varchar'
  is_nullable: 0
  size: 32

=head2 email

  data_type: 'varchar'
  is_nullable: 0
  size: 32

=head2 password

  data_type: 'varchar'
  is_nullable: 0
  size: 128

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
  "user_id",
  { data_type => "integer", is_auto_increment => 1, is_nullable => 0 },
  "first_name",
  { data_type => "varchar", is_nullable => 0, size => 32 },
  "last_name",
  { data_type => "varchar", is_nullable => 0, size => 32 },
  "website",
  { data_type => "varchar", is_nullable => 0, size => 32 },
  "email",
  { data_type => "varchar", is_nullable => 0, size => 32 },
  "password",
  { data_type => "varchar", is_nullable => 0, size => 128 },
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

=item * L</user_id>

=back

=cut

__PACKAGE__->set_primary_key("user_id");

=head1 RELATIONS

=head2 user_fineprints

Type: has_many

Related object: L<Model::Schema::Result::UserFineprint>

=cut

__PACKAGE__->has_many(
  "user_fineprints",
  "Model::Schema::Result::UserFineprint",
  { "foreign.user_id" => "self.user_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);

=head2 prints

Type: many_to_many

Composing rels: L</user_fineprints> -> print

=cut

__PACKAGE__->many_to_many("prints", "user_fineprints", "print");


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 01:41:17
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:qdi5tGZUM9zlZl1X4ZtMGw


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
