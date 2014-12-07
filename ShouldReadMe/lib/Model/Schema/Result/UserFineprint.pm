use utf8;
package Model::Schema::Result::UserFineprint;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::UserFineprint

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<user_fineprint>

=cut

__PACKAGE__->table("user_fineprint");

=head1 ACCESSORS

=head2 user_id

  data_type: 'integer'
  is_foreign_key: 1
  is_nullable: 0

=head2 print_id

  data_type: 'integer'
  is_foreign_key: 1
  is_nullable: 0

=cut

__PACKAGE__->add_columns(
  "user_id",
  { data_type => "integer", is_foreign_key => 1, is_nullable => 0 },
  "print_id",
  { data_type => "integer", is_foreign_key => 1, is_nullable => 0 },
);

=head1 PRIMARY KEY

=over 4

=item * L</user_id>

=item * L</print_id>

=back

=cut

__PACKAGE__->set_primary_key("user_id", "print_id");

=head1 RELATIONS

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

=head2 user

Type: belongs_to

Related object: L<Model::Schema::Result::User>

=cut

__PACKAGE__->belongs_to(
  "user",
  "Model::Schema::Result::User",
  { user_id => "user_id" },
  { is_deferrable => 1, on_delete => "RESTRICT", on_update => "RESTRICT" },
);


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 01:41:17
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:YBEmdjpMJTtS14+nfMtScQ


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
