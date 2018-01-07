#!/usr/bin/env node
const fs = require( 'fs' );
const semver = require( 'semver' );

const updateVersion = ( file, regex ) => {
	const path = `${ __dirname }/../${ file }`;
	const content = fs.readFileSync( path, 'utf8' );
	const newContent = content.split( '\n' ).map( line => {
		const match = line.match( regex );
		if ( match ) {
			const version = match[ 1 ];
			const nextVersion = semver( version ).inc( 'patch' );
			line = line.replace( version, nextVersion );
		}
		return line;
	} ).join( '\n' );
	fs.writeFileSync( file, newContent );
};

updateVersion( 'index.php', /version: ?([0-9]+\.[0-9]+\.[0-9]+)/i );
updateVersion( 'package.json', /"version": ?"([0-9]+\.[0-9]+\.[0-9]+)"/i );
