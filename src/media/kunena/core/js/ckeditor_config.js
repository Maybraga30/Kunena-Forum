/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'social', groups: [ 'social' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Anchor,Paste';

	config.extraPlugins = 'ebay,twitter,instagram,map,soundcloud,video,confidential,hidetext,spoiler,code,polls';
	var emoticons = Joomla.getOptions('com_kunena.ckeditor_emoticons');
	var obj = jQuery.parseJSON( emoticons );
	var list_emoticons = [];

	jQuery.each(obj, function( index, value ) {
		list_emoticons.push(value);
	});

	config.smiley_path = '/media/kunena/emoticons/';
	config.smiley_images = list_emoticons;
	/*config.smiley_descriptions = [
	 'B)', '8)', '8-)', ':-(', ':(', ':sad:', ':cry:', ':)', ':-)', ':cheer:', ';)', ';-)', 
       ':wink:', ';-)', ':P', ':p', ':-p', ':-P', ':razz:', ':angry:', ':mad:', ':unsure:', ':o', 
       ':-o', ':O', ':-O', ':eek:', ':ohmy:', ':huh:', ':?', ':-?', ':???', ':dry:', ':ermm:', ':lol:', 
       ':X', ':x', ':sick:', ':silly:', ':y32b4:', ':blink:', ':blush:', ':oops:', ':kiss:', ':rolleyes:', 
       ':roll:', ':woohoo:', ':side:', ':S', ':s', ':evil:', ':twisted:', ':whistle:', ':pinch:', 
       ':D', ':-D', ':grin:', ':laugh:', ':|', ':-|', ':neutral:', ':mrgreen:', ':?:',
       ':!:', ':arrow:', ':idea:'
	];*/
};
