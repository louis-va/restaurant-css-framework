if(document.querySelector('body').getAttribute('id') == 'menu') {
  const pages = [
    {
      'container': document.querySelector('#page-1'),
      'button': document.querySelector('#btn-page-1'),
      'counter': document.querySelector('#counter-1')
    },
    {
      'container': document.querySelector('#page-2'), 
      'button': document.querySelector('#btn-page-2'), 
      'counter': document.querySelector('#counter-2')
    },
    {
      'container': document.querySelector('#page-3'), 
      'button': document.querySelector('#btn-page-3'), 
      'counter': document.querySelector('#counter-3')
    }
  ]
  
  pages.forEach((page) => {
    page.button.addEventListener('click', () => changePage(page.container));
  });
  
  function changePage(pageTarget) {
    pages.forEach((page) => {
      if(page.container == pageTarget) {
        page.counter.classList.remove('hidden');
        page.counter.classList.add('block');
        page.button.classList.remove('text-light-brown','bg-light-grey');
        page.button.classList.add('text-white','bg-pink');
        page.container.classList.remove('hidden');
        page.container.classList.add('grid');
        page.counter.scrollIntoView();
        window.scrollBy(0,-120);
      } else {
        page.counter.classList.add('hidden');
        page.counter.classList.remove('block');
        page.button.classList.add('text-light-brown','bg-light-grey');
        page.button.classList.remove('text-white','bg-pink');
        page.container.classList.add('hidden');
        page.container.classList.remove('grid');
      }
    });
  }
}