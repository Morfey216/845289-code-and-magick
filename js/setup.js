'use strict';

var NAME_SAMPLES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAME_SAMPLES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR_SAMPLES = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR_SAMPLES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var WIZARDS_NUMBER = 4;

drawWizards(getAllWizards());

function getAllWizards() {
  var wizards = [];

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    wizards[i] = createWizard();
  }

  function createWizard() {
    return {
      name: createWizardName(),
      coatColor: createWizardCoatColor(),
      eyesColor: createWizardEyesColor()
    };
  }

  function getIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }

  function createWizardName() {
    return NAME_SAMPLES[getIndex(NAME_SAMPLES.length)] + ' ' + SURNAME_SAMPLES[getIndex(SURNAME_SAMPLES.length)];
  }

  function createWizardCoatColor() {
    return COAT_COLOR_SAMPLES[getIndex(COAT_COLOR_SAMPLES.length)];
  }

  function createWizardEyesColor() {
    return EYES_COLOR_SAMPLES[getIndex(EYES_COLOR_SAMPLES.length)];
  }

  return wizards;
}

function drawWizards(wizards) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  for (var index = 0; index < wizards.length; index++) {
    fragment.appendChild(renderWizard(wizards[index]));
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  userDialog.classList.remove('hidden');
}
