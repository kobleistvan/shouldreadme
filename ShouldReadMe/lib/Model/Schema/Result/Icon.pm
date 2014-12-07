use utf8;
package Model::Schema::Result::Icon;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

Model::Schema::Result::Icon

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 TABLE: C<icon>

=cut

__PACKAGE__->table("icon");

=head1 ACCESSORS

=head2 icon_id

  data_type: 'integer'
  is_auto_increment: 1
  is_nullable: 0

=head2 title

  data_type: 'varchar'
  is_nullable: 0
  size: 32

=head2 tip_description

  data_type: 'varchar'
  is_nullable: 1
  size: 100

=head2 tooltip

  data_type: 'varchar'
  is_nullable: 1
  size: 32

=head2 file_name

  data_type: 'varchar'
  is_nullable: 0
  size: 32

=head2 type

  data_type: 'varchar'
  is_nullable: 1
  size: 32

=head2 status

  data_type: 'enum'
  default_value: 'general'
  extra: {list => ["positive","negative","general"]}
  is_nullable: 1

=cut

__PACKAGE__->add_columns(
  "icon_id",
  { data_type => "integer", is_auto_increment => 1, is_nullable => 0 },
  "title",
  { data_type => "varchar", is_nullable => 0, size => 32 },
  "tip_description",
  { data_type => "varchar", is_nullable => 1, size => 100 },
  "tooltip",
  { data_type => "varchar", is_nullable => 1, size => 32 },
  "file_name",
  { data_type => "varchar", is_nullable => 0, size => 32 },
  "type",
  { data_type => "varchar", is_nullable => 1, size => 32 },
  "status",
  {
    data_type => "enum",
    default_value => "general",
    extra => { list => ["positive", "negative", "general"] },
    is_nullable => 1,
  },
);

=head1 PRIMARY KEY

=over 4

=item * L</icon_id>

=back

=cut

__PACKAGE__->set_primary_key("icon_id");

=head1 RELATIONS

=head2 fineprint_icons

Type: has_many

Related object: L<Model::Schema::Result::FineprintIcon>

=cut

__PACKAGE__->has_many(
  "fineprint_icons",
  "Model::Schema::Result::FineprintIcon",
  { "foreign.icon_id" => "self.icon_id" },
  { cascade_copy => 0, cascade_delete => 0 },
);


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2014-12-07 01:41:17
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:s8jbMdxO3fb1+fANSwqBRg


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
