#!/opt/bmi/bmi-perl/bin/perl

# To overwrite existing schema, move this to ../lib and then run

BEGIN {
	$ENV{CAG_ILLEGAL_ACCESSOR_NAME_OK} = 'DO_NOT_WARN';
}

use DBIx::Class::Schema::Loader qw/ make_schema_at rescan /;
make_schema_at(
	'Model::Schema',
	{ 	debug => 1,
		dump_directory => '../lib/',
		overwrite_modifications => 1,
	},
	[ 
		'dbi:mysql:shouldreadme:127.0.0.1', 'root', 'tac',
	],
);
