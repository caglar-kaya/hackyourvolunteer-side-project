import { createDOMElement, getDOMElement } from '../helpers/DOMUtils.js';
import { startCounter } from '../helpers/counter.js';

export const createSectionCounter = () => {
  const userInterface = getDOMElement('user-interface');
  const sectionCounter = createDOMElement('section');
  sectionCounter.classList.add('section-counter');
  sectionCounter.innerHTML = `<div class="total-people">
                                <p class="impact">The impact we make</p>
                                <p class="community">
                                  Our community of students has already helped 10,700 people
                                </p>
                                <p class="active">
                                  We have been active throughout the Netherlands since 2009! And so
                                  our students are called careibu's. Care-i-hows? We need to explain
                                  that
                                </p>
                              </div>
                              <div class="counters">
                                <div class="counter-seniors">
                                  <div class="counter" data-target="3900">0</div>
                                  <p>Seniors from the loneliness</p>
                                </div>
                                <div class="counter-children">
                                  <div class="counter" data-target="5400">0</div>
                                  <p>Children to a babysitter</p>
                                </div>
                                <div class="counter-houses">
                                  <div class="counter" data-target="1400">0</div>
                                  <p>Clean houses</p>
                                </div>
                              </div>`;
  userInterface.appendChild(sectionCounter);
  startCounter();
};
