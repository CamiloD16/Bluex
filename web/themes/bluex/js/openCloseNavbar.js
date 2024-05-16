/**
 * @file
 * bluex behaviors.
 */
(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.bluex = {
    attach: function (context, settings) {
      // This code open or close the main navbar.
      $('.btn-navbar', context).off('click').on('click', function () {
        var $navbarContent = $('.navbar-block-content', context);

        if ($(window).width() > 768) {
          $navbarContent.css('display', 'none');
        }

        if ($navbarContent.css('display') === 'none') {
          $navbarContent.css('display', 'block');
        } else {
          $navbarContent.css('display', 'none');
        }

      });
    }
  };

}(jQuery, Drupal, drupalSettings));
