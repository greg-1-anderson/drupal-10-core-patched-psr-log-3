/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.negotiationLanguage = {
    attach() {
      const $configForm = $('#language-negotiation-configure-form');
      const inputSelector = 'input[name$="[configurable]"]';

      function toggleTable(checkbox) {
        const $checkbox = $(checkbox);
        $checkbox.closest('.table-language-group').find('table, .tabledrag-toggle-weight').toggle($checkbox.prop('checked'));
      }

      $(once('negotiation-language-admin-bind', $configForm)).on('change', inputSelector, event => {
        toggleTable(event.target);
      });
      $configForm.find(`${inputSelector}:not(:checked)`).each((index, element) => {
        toggleTable(element);
      });
    }

  };
})(jQuery, Drupal);