<?php

class MsWikiEditor {

	public static function onResourceLoaderGetConfigVars( array &$vars, string $skin, Config $config ) {
		$add = $config->get( 'MSWE_add' );
		$remove = $config->get( 'MSWE_remove' );
		$vars['wgMsWikiEditorAdd'] = $add;
		$vars['wgMsWikiEditorRemove'] = $remove;
	}

	public static function onShowEditFormInitial( EditPage $editPage, OutputPage $output ) {
		$output->addModules( 'ext.MsWikiEditor' );
	}
}
