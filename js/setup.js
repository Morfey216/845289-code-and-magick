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

var getIndex = function (maxIndex) {
  return Math.floor(Math.random() * maxIndex);
};

var createWizardName = function () {
  return NAME_SAMPLES[getIndex(NAME_SAMPLES.length)] + ' ' + SURNAME_SAMPLES[getIndex(SURNAME_SAMPLES.length)];
};

var createWizardCoatColor = function () {
  return COAT_COLOR_SAMPLES[getIndex(COAT_COLOR_SAMPLES.length)];
};

var createWizardEyesColor = function () {
  return EYES_COLOR_SAMPLES[getIndex(EYES_COLOR_SAMPLES.length)];
};

var wizards = [];

var createWizards = function (wizard) {
  wizard.name = createWizardName();
  wizard.coatColor = createWizardCoatColor();
  wizard.eyesColor = createWizardEyesColor();
  return wizard;
};

for (var i = 0; i < WIZARDS_NUMBER; i++) {
  wizards[i] = createWizards({});
}
