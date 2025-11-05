 const tabs = document.querySelectorAll('.tabs li');
    const tabContent = document.querySelectorAll('.content-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = document.getElementById(tab.dataset.tab);
        tabContent.forEach(content => content.style.display = 'none');
        target.style.display = 'block';
      });
    });