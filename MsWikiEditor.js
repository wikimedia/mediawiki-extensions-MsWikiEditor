/* global $, mw, mswe_add, mswe_remove */

// Check if we are in edit mode and the required modules are available and then customize the toolbar
if ( $.inArray( mw.config.get( 'wgAction' ), [ 'edit', 'submit' ] ) !== -1 ) {
	mw.loader.using( 'user.options', function () {
		if ( mw.user.options.get( 'usebetatoolbar' ) ) {
			$.when(
				mw.loader.using( 'ext.wikiEditor' ), $.ready
			).then( mswe_modifyToolbar );
		}
	});
}

function mswe_modifyToolbar() {
	$.each( mswe_add, function ( key, value ) {
		mswe_addButton( key );
	});
	$.each( mswe_remove, function ( key, value ) {
		$( '#wikiEditor-ui-toolbar *[rel="' + value + '"]' ).remove();
	});
}

function mswe_addButton( key ) {
	var label = mswe_add[ key ][0],
		pre = mswe_add[ key ][1],
		peri = mswe_add[ key ][2],
		post = mswe_add[ key ][3],
		icon = mswe_add[ key ][4],
		section = mswe_add[ key ][5] || 'main',
		group = mswe_add[ key ][6] || 'insert';

	// Add the button to the insert group
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'section': section,
		'group': group,
		'tools': {
			'anam': {
				'label': label, // Or use labelMsg for a localized label
				'type': 'button',
				'icon': icon,
				'action': {
					'type': 'encapsulate',
					'options': {
						'pre': pre, 
						'peri': peri,
						'post': post,
					}
				}
			}
		}
	});
}