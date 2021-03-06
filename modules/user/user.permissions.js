/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.permissions = {
    attach(context) {
      once('permissions', 'table#permissions').forEach(table => {
        const $table = $(table);
        let $ancestor;
        let method;

        if ($table.prev().length) {
          $ancestor = $table.prev();
          method = 'after';
        } else {
          $ancestor = $table.parent();
          method = 'append';
        }

        $table.detach();
        const $dummy = $(Drupal.theme('checkbox')).removeClass('form-checkbox').addClass('dummy-checkbox js-dummy-checkbox').attr('disabled', 'disabled').attr('checked', 'checked').attr('title', Drupal.t('This permission is inherited from the authenticated user role.')).hide();
        $table.find('input[type="checkbox"]').not('.js-rid-anonymous, .js-rid-authenticated').addClass('real-checkbox js-real-checkbox').after($dummy);
        $table.find('input[type=checkbox].js-rid-authenticated').on('click.permissions', this.toggle).each(this.toggle);
        $ancestor[method]($table);
      });
    },

    toggle() {
      const authCheckbox = this;
      const $row = $(this).closest('tr');
      $row.find('.js-real-checkbox').each(function () {
        this.style.display = authCheckbox.checked ? 'none' : '';
      });
      $row.find('.js-dummy-checkbox').each(function () {
        this.style.display = authCheckbox.checked ? '' : 'none';
      });
    }

  };
})(jQuery, Drupal);