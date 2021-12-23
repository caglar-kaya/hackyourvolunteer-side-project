'use strict';

import { createNavbar } from './views/createNavbar.js';
import { createSectionElder } from './views/createSectionElder.js';

export const main = () => {
  try {
    createNavbar();
    createSectionElder();
  } catch (error) {
    console.log(error);
  }
};
