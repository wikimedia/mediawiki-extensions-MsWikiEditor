MsWikiEditor
============

MsWikiEditor is a MediaWiki extension that allows you to easily add or remove buttons from the WikiEditor.

Installation
------------
To install MsWikiEditor, add the following to your LocalSettings.php:

require_once "$IP/extensions/MsWikiEditor/MsWikiEditor.php";

Configuration
-------------
To add a button, first define it in the $wgMSWE_buttons array in your LocalSettings.php. Here are a few examples:

$wgMSWE_buttons['date'] = array( 'Current date', date( 'Y-m-d' ), '', '', $wgScriptPath . '/extensions/MsWikiEditor/images/Wiki-Editor-Buttons_Kalender_22.png' );
$wgMSWE_buttons['gallery'] = array( 'Gallery', '<gallery>\\n', 'File:Example1.jpg|Caption1\\nFile:Example2.png|Caption2\\n', '</gallery>', $wgScriptPath . '/extensions/MsWikiEditor/images/Wiki-Editor-Buttons_Gallery_22.png' );
$wgMSWE_buttons['strike'] = array( 'Strike', '<strike>', 'Text', '</strike>', $wgScriptPath . '/extensions/MsWikiEditor/images/Wiki-Editor-Buttons_Strike_22.png' );
$wgMSWE_buttons['email'] = array( 'Email', '[mailto:', 'address@domain.com', ']', $wgScriptPath . '/extensions/MsWikiEditor/images/Wiki-Editor-Buttons_E-Mail_22.png' );
$wgMSWE_buttons['mslink'] = array( 'MsLink', '{{#l:', 'Filename.ext', '}}', $wgScriptPath . '/extensions/MsWikiEditor/images/Wiki-Editor-Buttons_Li.png' );
$wgMSWE_buttons['template'] = array( 'Your template', '{{Your template|', 'Parameters', '}}', $wgScriptPath . '/extensions/MsWikiEditor/images/Wiki-Editor-Buttons_Achtung_22.png' );
$wgMSWE_buttons['signature'] = array( 'Signature', '--~~~~', '', '', $wgScriptPath . '/extensions/MsWikiEditor/images/Wiki-Editor-Buttons_Signature_22.png' );

Then include its name in the $wgMSWE_add array, like so:

$wgMSWE_add = array( 'date', 'gallery', 'strike', 'email', 'mslink', 'template' );

To remove a button, include its name in the $wgMSWE_remove array, below the require_once line. For example:

$wgMSWE_remove = array( 'advanced', 'characters', 'help' );

By default, all arrays are empty.

Credits
-------
* Developed and coded by Martin Schwindl (wiki@ratin.de)
* Idea, project management and bug fixing by Martin Keyler (wiki@keyler-consult.de)
* Updated, debugged and enhanced by Luis Felipe Schenone (schenonef@gmail.com)