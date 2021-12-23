import { createDOMElement, getDOMElement } from '../helpers/DOMUtils.js';

export const createSectionCards = () => {
  const userInterface = getDOMElement('user-interface');
  const sectionCards = createDOMElement('section');
  sectionCards.classList.add('section-cards');
  sectionCards.innerHTML = `<div class="section-cards-card">
                              <img
                                class="card-img"
                                src="../public/images/elder-young.jpeg"
                                alt="Volunteering or side job like a senior's buddy"
                              />
                              <h3 class="card-title-black">Volunteering or side job</h3>
                              <h3 class="card-title-white">like a senior's buddy</h3>
                              <button class="card-button">read more</button>
                            </div>
                            <div class="section-cards-card">
                              <img
                                class="card-img"
                                src="../public/images/baby-sitter.jpeg"
                                alt="Volunteering or side job like a senior's buddy"
                              />
                              <h3 class="card-title-black">side job</h3>
                              <h3 class="card-title-white">as a babysitter</h3>
                              <button class="card-button">read more</button>
                            </div>
                            <div class="section-cards-card">
                              <img
                                class="card-img"
                                src="../public/images/cleaning-help.jpeg"
                                alt="Volunteering or side job like a senior's buddy"
                              />
                              <h3 class="card-title-black">side job</h3>
                              <h3 class="card-title-white">as a cleaning assistant</h3>
                              <button class="card-button">read more</button>
                            </div>`;
  userInterface.appendChild(sectionCards);
};
