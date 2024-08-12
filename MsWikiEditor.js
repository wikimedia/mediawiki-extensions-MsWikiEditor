const MsWikiEditor = {

	init: function () {
		mw.hook( 'wikiEditor.toolbarReady' ).add( MsWikiEditor.addButtons );
		mw.hook( 'wikiEditor.toolbarReady' ).add( MsWikiEditor.removeButtons );
	},

	addButtons: function ( $textarea ) {
		const buttons = mw.config.get( 'wgMsWikiEditorAdd' );
		for ( const key in buttons ) {
			const button = buttons[ key ];
			const label = button[0];
			const pre = button[1];
			const peri = button[2];
			const post = button[3];
			const icon = button[4];
			const section = button[5] || 'main';
			const group = button[6] || 'insert';
			$textarea.wikiEditor( 'addToToolbar', {
				section: section,
				group: group,
				tools: {
					anam: {
						label: label,
						type: 'button',
						icon: icon,
						action: {
							type: 'encapsulate',
							options: {
								pre: pre, 
								peri: peri,
								post: post,
							}
						}
					}
				}
			} );
		}
	},

	removeButtons: function ( $textarea ) {
		const buttons = mw.config.get( 'wgMsWikiEditorRemove' );
		const $wikiEditor = $textarea.closest( '.wikiEditor-ui' );
		const $toolbar = $wikiEditor.find( '#wikiEditor-ui-toolbar' );
		for ( const key of buttons ) {
			$toolbar.find( '[rel="' + key + '"]' ).remove();
		}
	}
};

$( MsWikiEditor.init );
