/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(Drupal => {
  Drupal.theme.passwordConfirmMessage = _ref => {
    let {
      confirmTitle
    } = _ref;
    const confirmTextWrapper = '<span data-drupal-selector="password-match-status-text"></span>';
    return `<div aria-live="polite" aria-atomic="true" class="password-confirm-message js-password-confirm-message" data-drupal-selector="password-confirm-message">${confirmTitle} ${confirmTextWrapper}</div>`;
  };

  Drupal.theme.passwordStrength = _ref2 => {
    let {
      strengthTitle
    } = _ref2;
    const strengthIndicator = '<div class="password-strength__indicator js-password-strength__indicator" data-drupal-selector="password-strength-indicator"></div>';
    const strengthText = '<span class="password-strength__text js-password-strength__text" data-drupal-selector="password-strength-text"></span>';
    return `
      <div class="password-strength">
        <div class="password-strength__meter" data-drupal-selector="password-strength-meter">${strengthIndicator}</div>
        <div aria-live="polite" aria-atomic="true" class="password-strength__title">${strengthTitle} ${strengthText}</div>
      </div>
    `;
  };
})(Drupal);