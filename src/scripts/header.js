const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[0].classList.add('activ-page');

const mobileLinks = document.querySelectorAll('.mob-menu-link');
mobileLinks.forEach(el => el.classList.remove('activ-page'));
mobileLinks[0].classList.add('activ-page');

const bookCounters = document.querySelectorAll('.counter-js');

function updateBookCounter() {
  const storedData = localStorage.getItem('bookList');

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const dataLength = Array.isArray(parsedData) ? parsedData.length : 0;

    bookCounters.forEach(counter => {
      counter.innerHTML = dataLength;
    });
  }
}
updateBookCounter();

export { updateBookCounter };
