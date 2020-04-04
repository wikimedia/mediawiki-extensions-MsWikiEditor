<?php

class MsWikiEditor {

	public static function init() {
		global $wgOut, $wgMSWE_add, $wgMSWE_remove;

		$mswe_add = json_encode( $wgMSWE_add );
		$mswe_remove = json_encode( $wgMSWE_remove );
		$wgOut->addScript( "<script>
			var mswe_add = JSON.parse('$mswe_add');
			var mswe_remove = JSON.parse('$mswe_remove');
			</script>"
		);
		$wgOut->addModules( 'ext.MsWikiEditor' );
	}
}
