import { createDOMElement, getDOMElement } from '../helpers/DOMUtils.js';

export const createSectionElder = () => {
  const userInterface = getDOMElement('user-interface');
  const sectionElder = createDOMElement('section');
  sectionElder.classList.add('section-elder');
  sectionElder.innerHTML = `<div class="elder-title">
                              <h1>Your social side job or volunteer position. With impact.</h1>
                            </div>
                            <div class="elder-card">
                              <h3 class="elder-card-title">
                                You are a student and you want to mean something to someone else.
                              </h3>
                              <p class="elder-card-paragraph">
                                Do you have some time left next to your studies?
                              </p>
                              <p class="elder-card-paragraph">
                                Do you want to earn some extra money or work as a volunteer? You can
                                do both at Careibu. Join our community and become a buddy of a
                                senior, nanny or cleaning assistant.
                              </p>
                              <button class="elder-card-button">Register immediately</button>
                            </div>`;
  userInterface.appendChild(sectionElder);
  //       <section class="section-elder"></section>
};
