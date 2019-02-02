function classToggle() {
    const navs = document.querySelectorAll('.navbaritems')
    console.log(navs);
    navs.forEach(nav => nav.classList.toggle('toggle-show'));
  }
  document.querySelector('.link-toggle')
    .addEventListener('click', classToggle);


