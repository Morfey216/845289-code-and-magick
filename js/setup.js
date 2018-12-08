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

var FIREBALL_COLOR_SAMPLES = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var WIZARDS_NUMBER = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Добавление обработчиков

var setupOpen = document.querySelector('.setup-open');
var userDialog = document.querySelector('.setup');


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

function openPopup() {
  var setupClose = userDialog.querySelector('.setup-close');
  var userNameInput = userDialog.querySelector('.setup-user-name');
  var setupFireballWrap = userDialog.querySelector('.setup-fireball-wrap');
  var setupWizardAppearance = userDialog.querySelector('.setup-wizard-appearance');
  var wizardCoat = setupWizardAppearance.querySelector('.wizard-coat');
  var wizardEyes = setupWizardAppearance.querySelector('.wizard-eyes');

  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  userNameInput.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();
    }
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  setupFireballWrap.addEventListener('click', function () {
    var fireballColor = createWizardFireballColor();
    setupFireballWrap.style.backgroundColor = fireballColor;
    setupFireballWrap.querySelector('input').value = fireballColor;
  });

  wizardCoat.addEventListener('click', function () {
    var wizardCoatColor = createWizardCoatColor();
    wizardCoat.style.fill = wizardCoatColor;
    setupWizardAppearance.querySelector('input[name="coat-color"]').value = wizardCoatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var wizardEyesColor = createWizardEyesColor();
    wizardEyes.style.fill = wizardEyesColor;
    setupWizardAppearance.querySelector('input[name="eyes-color"]').value = wizardEyesColor;
  });

  function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE && document.activeElement !== userNameInput) {
      closePopup();
    }
  }

  function closePopup() {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
}

function getIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function createWizardFireballColor() {
  return FIREBALL_COLOR_SAMPLES[getIndex(FIREBALL_COLOR_SAMPLES.length)];
}

function createWizardCoatColor() {
  return COAT_COLOR_SAMPLES[getIndex(COAT_COLOR_SAMPLES.length)];
}

function createWizardEyesColor() {
  return EYES_COLOR_SAMPLES[getIndex(EYES_COLOR_SAMPLES.length)];
}

// Отрисовка похожих персонажей

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

  function createWizardName() {
    return NAME_SAMPLES[getIndex(NAME_SAMPLES.length)] + ' ' + SURNAME_SAMPLES[getIndex(SURNAME_SAMPLES.length)];
  }

  return wizards;
}

function drawWizards(wizards) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
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
}
