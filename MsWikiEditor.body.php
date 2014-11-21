<?php

class MsWikiEditor {

	static function start() {
		global $wgOut, $wgScriptPath, $wgMSWE_add, $wgMSWE_remove, $wgMSWE_buttons;

		$mswe_add = json_encode( $wgMSWE_add );
		$mswe_remove = json_encode( $wgMSWE_remove );
		$mswe_buttons = json_encode( $wgMSWE_buttons );
		$wgOut->addScript( "<script>
			var mswe_add = JSON.parse('$mswe_add');
			var mswe_remove = JSON.parse('$mswe_remove');
			var mswe_buttons = JSON.parse('$mswe_buttons'); 
			</script>"
		);
		$wgOut->addModules( 'ext.MsWikiEditor' );
		return true;
	}
}