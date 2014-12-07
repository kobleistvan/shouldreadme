use utf8;
package Model::Schema::Result::FineprintIcon;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::FineprintIcon

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<fineprint_icon>

=cut

__PACKAGE__->table("fineprint_icon");

=head1 ACCESSORS

=head2 print_id

  data_type: 'integer'
  is_foreign_key: 1
  is_nullable: 0

=head2 icon_id

  data_type: 'integer'
  is_foreign_key: 1
  is_nullable: 0

=head2 used_type

  data_type: 'varchar'
  is_nullable: 1
  size: 32

=head2 user_description

  data_type: 'varchar'
  is_nullable: 1
  size: 100

=cut

__PACKAGE__->add_columns(
  "print_id",
  { data_type => "integer", is_foreign_key => 1, is_nullable => 0 },
  "icon_id",
  { data_type => "integer", is_foreign_key => 1, is_nullable => 0 },
  "used_type",
  { data_type => "varchar", is_nullable => 1, size => 32 },
  "user_description",
  { data_type => "varchar", is_nullable => 1, size => 100 },
);

=head1 PRIMARY KEY

=over 4

=item * L</icon_id>

=item * L</print_id>

=back

=cut

__PACKAGE__->set_primary_key("icon_id", "print_id");

=head1 RELATIONS

=head2 icon

Type: belongs_to

Related object: L<Model::Schema::Result::Icon>

=cut

__PACKAGE__->belongs_to(
  "icon",
  "Model::Schema::Result::Icon",
  { icon_id => "icon_id" },
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


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 01:41:17
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:XtvjnVUMpA1xLOrsb4knog


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
