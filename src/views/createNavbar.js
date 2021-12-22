import { createDOMElement, getDOMElement } from '../helpers/DOMUtils.js';

export const createNavbar = () => {
  const userInterface = getDOMElement('user-interface');
  const navbar = createDOMElement('div');
  navbar.classList.add('nav-bar');
  navbar.innerHTML = `<div class="nav-bar-logo">
                        <img
                          src="https://careibu.com/wp-content/uploads/2021/08/careibu-logo.svg"
                          alt="Logo"
                          height="98"
                          width="480"
                        />
                      </div>
                      <div class="nav-bar-links">
                        <ul class="links">
                          <a href="#"><li class="link">That is how it works</li></a>
                          <a href="#"><li class="link">About Careibu</li></a>
                          <a href="#"><li class="link">News</li></a>
                          <a href="#"><li class="link">Contact</li></a>
                          <a href="#"><li class="link">non-Dutchies</li></a>
                        </ul>
                      </div>
                      <div class="nav-bar-login">
                        <button class="login">Login</button>
                      </div>`;
  userInterface.appendChild(navbar);
};
