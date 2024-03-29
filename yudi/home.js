import { loginUser } from './modules/firebase/login/userAuth.js';

const APP = (function() {
  document.addEventListener('DOMContentLoaded',init);
  // INITIALIZE APPLICATION
  function init() {
    addEventListeners();
  }
  // ADD EVENT LISTENERS
  function addEventListeners() {
    const selectBtn = document.querySelectorAll('button');
    for(let i = 0; i < selectBtn.length; i++) {
      selectBtn[i].addEventListener('click', (e) => {
        e.preventDefault();
        loginUser(i);
      })
    }
  }
})()
