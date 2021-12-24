import { createDOMElement, getDOMElement } from '../helpers/DOMUtils.js';

export const createSectionContact = () => {
  const userInterface = getDOMElement('user-interface');
  const sectionContact = createDOMElement('section');
  sectionContact.classList.add('section-contact-us');
  sectionContact.innerHTML = `<div class="contact-container">
                                <p class="contact-first-p">Knowing more?</p>
                                <p class="contact-second-p">
                                  Not convinced yet or have some questions?
                                </p>
                                <p class="contact-third-p">
                                  Would you like to speak to someone from our team before you sign up?
                                  You can call, email or app us!
                                </p>
                                <div class="contact-button-container">
                                  <button class="contact-button">Contact us</button>
                                </div>
                              </div>`;
  userInterface.appendChild(sectionContact);
};
