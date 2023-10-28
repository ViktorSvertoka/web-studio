(() => {
  const filterButtonsList = document.querySelector('.filter-js');
  const galleryItems = document.querySelectorAll('.item-js');
  let selectedFilter = null;

  filterButtonsList.addEventListener('click', onFilterClick);

  function onFilterClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    const currentActiveButton = document.querySelector('.is-active-js');
    if (currentActiveButton) {
      currentActiveButton.classList.remove('is-active-js');
    }

    const nextActiveButton = event.target;
    nextActiveButton.classList.add('is-active-js');

    selectedFilter = nextActiveButton.dataset.value;

    galleryItems.forEach(item => {
      if (selectedFilter === 'all' || item.dataset.tag === selectedFilter) {
        item.classList.remove('is-hidden-js');
      } else {
        item.classList.add('is-hidden-js');
      }
    });
  }
})();
