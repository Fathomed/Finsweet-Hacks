document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'previousTabId';
  const tabLinks = document.querySelectorAll('[fs-anchor-element="tab"]');
  if (tabLinks.length === 0) return;
  // add listeners and click chosen tab
  const chosenTabId = localStorage.getItem(STORAGE_KEY);
  tabLinks.forEach(function (tabLink) {
    const currentTabId = tabLink.id;
    if (chosenTabId === currentTabId) tabLink.click();
    tabLink.addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, currentTabId);
    });
  });
});