const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__inner');
const social = document.querySelector('.social__links');

burger.addEventListener('click', (e) => {
  e.preventDefault();
  // manages the class to animate hamburger bars
  burger.classList.toggle('toggle');
  // manages the class to open the sidebar menu
  nav.classList.toggle('is-open');
  // add the class to fade the social links
  social.classList.add('fade-social-links');
});
