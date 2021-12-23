'use strict';

import { createNavbar } from './views/createNavbar.js';
import { createSectionElder } from './views/createSectionElder.js';
import { createSectionCards } from './views/createSectionCards.js';

export const main = () => {
  createNavbar();
  createSectionElder();
  createSectionCards();
};
