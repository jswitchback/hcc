/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

// Place your code here.

// Minify the menu at mobile resolutions
// Drupal.behaviors.m = {
// 	attach: function (context, settings) {
// 		$('#main-menu:not(.m-processed)', context).addClass('m-processed').each(function() {
// 			function miniMenu() {
// 				$('#main-menu').hide();
// 				$('#main-menu').before('<a href="#" id="m-toggle"><span>Show menu</span></a>');
// 				$('#m-toggle').click(function(){
// 					$('#main-menu').slideToggle('slow');
// 					$('span', this).text($('span', this).text() == 'Show menu' ? 'Hide menu' : 'Show menu');
// 					return false;
// 				});
// 			}
// 		  if ($('li', this).css('float') == 'left') {
// 				miniMenu();
// 			}
// 			$(window).resize(function() {
// 				if ($('#main-menu li').css('float') == 'left' && $("#m-toggle").length == 0) {
// 					miniMenu();
// 				}
// 				else if ($('#main-menu li').css('display') == 'inline-block' && $("#m-toggle").length > 0) {
// 					$('#m-toggle').remove();
// 					$('#main-menu').show();
// 				}
// 			});
// 		});
// 	}
// };
})(jQuery, Drupal, this, this.document);
