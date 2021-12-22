'use strict';

import { getDOMElement } from '../helpers/DOMUtils.js';
import { main } from '../app.js';

const initializeApp = () => {
  setupHTML();
  main();
};

const setupHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  userInterfaceContainer.classList.add('user-interface');
};

window.addEventListener('load', initializeApp);
