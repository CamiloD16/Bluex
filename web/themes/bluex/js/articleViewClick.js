// Redirect the user to the article when the user clicks on the image.

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.articleClick = {
    attach: function (context, settings) {

      $('.articleTextContainer', context).on('click', function () {
        var nodeId = $(this).closest('[data-nid]').data('nid');

        if (nodeId) {
          var contentUrl = `node/${nodeId}`
          window.location.href = contentUrl;
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
