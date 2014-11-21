<?php

$wgExtensionCredits['interface'][] = array(
	'name' => 'MsWikiEditor',
	'url' => 'https://www.mediawiki.org/wiki/Extension:MsWikiEditor',
	'version' => '2.0',
	'descriptionmsg' => 'mswe-desc',
	'license-name' => 'GPLv2+',
	'author' => array( '[mailto:wiki@ratin.de Martin Schwindl]', '[mailto:wiki@keyler-consult.de Martin Keyler]', '[https://www.mediawiki.org/wiki/User:Luis_Felipe_Schenone Luis Felipe Schenone]' ),
);

$wgResourceModules['ext.MsWikiEditor'] = array(
	'scripts' => 'MsWikiEditor.js',
	'localBasePath' => __DIR__,
	'remoteExtPath' => 'MsWikiEditor',
);

$wgAutoloadClasses['MsWikiEditor'] = __DIR__ . '/MsWikiEditor.body.php';

$wgExtensionMessagesFiles['MsWikiEditor'] = __DIR__ . '/MsWikiEditor.i18n.php';
$wgMessagesDirs['MsWikiEditor'] = __DIR__ . '/i18n';

$wgHooks['EditPage::showEditForm:initial'][] = 'MsWikiEditor::start';

// Default configuration
$wgMSWE_buttons = array();
$wgMSWE_add = array();
$wgMSWE_remove = array();