'use strict';

import { createNavbar } from './views/createNavbar.js';

export const main = () => {
  try {
    createNavbar();
  } catch (error) {
    console.log(error);
  }
};
