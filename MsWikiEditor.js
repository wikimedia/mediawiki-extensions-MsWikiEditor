// Check if we are in edit mode and the required modules are available and then customize the toolbar
if ( $.inArray( mw.config.get( 'wgAction' ), [ 'edit', 'submit' ] ) !== -1 ) {
	mw.loader.using( 'user.options', function () {
		if ( mw.user.options.get( 'usebetatoolbar' ) ) {
			mw.loader.using( 'ext.wikiEditor.toolbar', function () {
				$( document ).ready( mswe_modifyToolbar );
			});
		}
	});
}

var mswe_setGroup = false;

function mswe_modifyToolbar() {
	mswe_addGroup();
	mswe_addAllButtons( mswe_buttons );
	jQuery.each( mswe_remove, function ( i, val ) {
		if ( val === 'reference' ) {
			$( '#wpTextbox1' ).wikiEditor( 'removeFromToolbar', {
				'section': 'main',
				'group': 'insert',
				'tool': 'reference'
			});
		} else {
			mswe_removeSection( val );
		}
	});
}

function mswe_addAllButtons( mswe_buttons ) {
	jQuery.each( mswe_add, function ( i, val ) {
		mswe_addThisButton( val );
	});
}

function mswe_addThisButton( titleButton ) {
	var anam = mswe_buttons[ titleButton ][0];
	var aprex = mswe_buttons[ titleButton ][1];
	var aperix = mswe_buttons[ titleButton ][2];
	var apostx = mswe_buttons[ titleButton ][3];
	var aimg = mswe_buttons[ titleButton ][4];

	// To add a button to an existing toolbar group:
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'section': 'main',
		'group': 'additional',
		'tools': {
			'anam': {
				'label': anam, // Or use labelMsg for a localized label, see above
				'type': 'button',
				'icon': aimg,
				'action': {
					'type': 'encapsulate',
					'options': {
						'pre': aprex, 
						'peri': aperix,
						'post': apostx,
					}
				}
			}
		}
	});
}

function mswe_removeSection( nam ) {
	$( '#wpTextbox1' ).wikiEditor( 'removeFromToolbar', {
		'section': nam
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
	$( '.wikiEditor-ui-toolbar .group-additional' ).css( 'border-left', '1px solid #DDDDDD' );
}