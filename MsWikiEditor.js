// Check if we are in edit mode and the required modules are available and then customize the toolbar
if ( $.inArray( mw.config.get( 'wgAction' ), [ 'edit', 'submit' ] ) !== -1 ) {
	mw.loader.using( 'user.options', function () {
		if ( mw.user.options.get( 'usebetatoolbar' ) ) {
			$( '#wpTextbox1' ).on( 'wikiEditor-toolbar-doneInitialSections', function () {
				mw.loader.using( 'ext.wikiEditor.toolbar', mswe_modifyToolbar );
			});
		}
	});
}

var mswe_setGroup = false;

function mswe_modifyToolbar() {
	mswe_addGroup();
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
		icon = mswe_add[ key ][4];

	// To add a button to an existing toolbar group:
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'section': 'main',
		'group': 'additional',
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

function mswe_addGroup() {
	if ( mswe_setGroup === false ) {
		// To add a group to an existing toolbar section:
		mswe_setGroup = true;
		$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'section': 'main',
			'groups': {
				'additional': {}
			}
		});
	}
	$( '.wikiEditor-ui-toolbar .group-additional' ).css( 'border-left', '1px solid #ddd' );
}