/**
 * Set a cookie.
 * @param cname The name of the cookie to set.
 * @param cvalue The value to set for the cookie.
 * @param exdays The number of days until the cookie expires.
 */
const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();

  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();

  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};
/**
 * Get a cookie by name.
 * @param name The name of the cookie to get.
 * @returns The value of the cookie.
 * @see https://stackoverflow.com/a/25490531/104380
 */
const getCookie = (name) => {
  return (document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`) || [])[2] || null;
};
/**
 * Remove a cookie by setting it to an empty value and setting its expiration date in the past.
 * @param name The name of the cookie to remove.
 */
const removeCookie = (name) => {
  console.log('removing cookie');

  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('window.onload');
  const WAIT_TIME = 4500;
  const COOKIE_NAME = 'seenGif';
  const LOADING_WRAPPER_SELECTOR = '[fs-hacks-element="loading-wrapper"]';
  const CLEAR_BUTTON_SELECTOR = '[fs-hacks-element="clear-cookie"]';
  const loadingWrapper = document.querySelector(LOADING_WRAPPER_SELECTOR);
  const clearButton = document.querySelector(CLEAR_BUTTON_SELECTOR);

  if (!loadingWrapper || !clearButton) return;
  const hasSeenPreloader = getCookie(COOKIE_NAME);

  console.log(hasSeenPreloader);

  clearButton.addEventListener('click', () => {
    removeCookie(COOKIE_NAME);
  });
  if (hasSeenPreloader) return;

  loadingWrapper.style.display = 'flex';

  setCookie(COOKIE_NAME, 'true', 1);

  setTimeout(() => {
    loadingWrapper.style.display = 'none';
  }, WAIT_TIME);
});
