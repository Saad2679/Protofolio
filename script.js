var typed = new Typed('.text', {
  strings: [
    'Web Developer',
    'Gamer',
    'Youtube',
    'Frontent Developer',
    'Backend Developer',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
document.getElementById('hamburger').addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
});
