import { createDOMElement, getDOMElement } from '../helpers/DOMUtils.js';

export const createFooter = () => {
  const userInterface = getDOMElement('user-interface');
  const footer = createDOMElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `<p class="footer-title">the social care community</p>
                      <img
                        src="./public/images/footer-image.svg"
                        alt="Footer Image"
                        class="footer-img"
                      />
                      <div class="footer-columns-container">
                        <div class="footer-column">
                          <ul>
                            <li><b>That is how it works</b></li>
                            <li><b>About Careibu</b></li>
                            <li><b>Our mission</b></li>
                            <li><b>News</b></li>
                          </ul>
                        </div>
                        <div class="footer-column">
                          <ul>
                            <li>Register students</li>
                            <li>Students login</li>
                            <li>For customers</li>
                          </ul>
                        </div>
                        <div class="footer-column">
                          <ul>
                            <li>Working at Careibu</li>
                            <li>Corona</li>
                            <li>General conditions for students</li>
                            <li>Privacy declaration</li>
                          </ul>
                        </div>
                        <div class="footer-column">
                          <ul>
                            <li>Contact:</li>
                            <li><b>info@oppasstudent.nl</b></li>
                            <li>020-3080011</li>
                            <br />
                            <li>We can be reached by</li>
                            <li>phone on working days</li>
                            <li>between 10:00 and 17:00</li>
                          </ul>
                        </div>
                      </div>
                      <div class="copy-right">
                        <p>© 2021 Caglar Kaya. All rights reserved. Created with
                        <span style="font-size:150%; color:red;"> &hearts; </span>
                        </p>
                      </div>`;
  userInterface.appendChild(footer);
};
