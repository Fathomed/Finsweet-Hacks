// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // set the fs-hacks selector
  const YEAR_SELECTOR = '[fs-hacks-element="year"]';

  // get the the span element
  const yearSpan = document.querySelector<HTMLSpanElement>(YEAR_SELECTOR);
  if (!yearSpan) return;
  // get the current year
  const currentYear = new Date().getFullYear();
  // set the year span element's text to the current year
  yearSpan.innerText = currentYear.toString();
});
