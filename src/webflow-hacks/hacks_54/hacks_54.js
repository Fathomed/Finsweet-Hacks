document.addEventListener('DOMContentLoaded', function () {
  const CHECKBOX_FIELD_SELECTOR = '[fs-hacks-element="checkbox-field"]';
  const checkBoxDivs = document.querySelectorAll(CHECKBOX_FIELD_SELECTOR);

  for (const checkBoxDiv of checkBoxDivs) {
    const checkBoxLabel = checkBoxDiv.querySelector('.w-form-label');
    const checkBox = checkBoxDiv.querySelector('input[type="checkbox"]');

    if (!checkBoxLabel || !checkBox) continue;
    // use label string as attributes for checkbox
    const name = checkBoxLabel.innerText;
    const id = name.replace(/\W+/g, '-').toLowerCase();

    checkBox.name = name;

    checkBox.id = id;

    checkBoxLabel.setAttribute('data-name', id);
  }
});
