# MsWikiEditor

MsWikiEditor is a MediaWiki extension that allows you to easily add or remove buttons from the WikiEditor toolbar.

## Installation

To install MsWikiEditor, simply add the following to your LocalSettings.php:

wfLoadExtension( 'MsWikiEditor' );

## Usage

To add a button, add its definition to the $wgMSWE_add array in your LocalSettings.php. Here are a few examples:

$wgMSWE_add['date'] = array( 'Current date', date( 'Y-m-d' ), '', '', 'extensions/MsWikiEditor/images/date.png' );
$wgMSWE_add['gallery'] = array( 'Gallery', '<gallery>\\n', 'File:Example1.jpg|Caption1\\nFile:Example2.png|Caption2\\n', '</gallery>', 'extensions/MsWikiEditor/images/gallery.png' );
$wgMSWE_add['strike'] = array( 'Strike', '<strike>', 'Text', '</strike>', 'extensions/MsWikiEditor/images/strike.png' );
$wgMSWE_add['email'] = array( 'Email', '[mailto:', 'address@domain.com', ']', 'extensions/MsWikiEditor/images/email.png' );
$wgMSWE_add['mslink'] = array( 'MsLink', '{{#l:', 'Filename.ext', '}}', 'extensions/MsWikiEditor/images/link.png' );
$wgMSWE_add['template'] = array( 'Your template', '{{Your template|', 'Parameters', '}}', 'extensions/MsWikiEditor/images/template.png' );
$wgMSWE_add['signature'] = array( 'Signature', '--~~~~', '', '', 'extensions/MsWikiEditor/images/signature.png' );
$wgMSWE_add['attention'] = array( 'Attention', '{{Attention|', 'Text', '}}', 'extensions/MsWikiEditor/images/attention.png' );

To remove a button, just include its name (the 'rel' attribute) in the $wgMSWE_remove array. For example:

$wgMSWE_remove = array( 'advanced', 'characters', 'help', 'file', 'reference', 'ilink', 'xlink' );

By default, both arrays are empty.

## Credits

* Developed and coded by Martin Schwindl (wiki@ratin.de)
* Idea, project management and bug fixing by Martin Keyler (wiki@keyler-consult.de)
* Updated, debugged and enhanced by Felipe Schenone (schenonef@gmail.com)