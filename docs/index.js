/**
 * WordPress dependencies
 */
import { addStory } from 'docutron';

addStory( {
	name: 'intro',
	title: 'Introduction',
	path: '/',
	markdown: require( '../README.md' ),
} );

addStory( {
	name: 'url',
	title: '@wordpress/url',
	markdown: require( '../packages/url/README.md' ),
} );

addStory( {
	name: 'a11y',
	title: '@wordpress/a11y',
	markdown: require( '../packages/a11y/README.md' ),
} );

addStory( {
	name: 'dom-ready',
	title: '@wordpress/dom-ready',
	markdown: require( '../packages/dom-ready/README.md' ),
} );
