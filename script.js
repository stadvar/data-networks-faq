const list = document.querySelector('.faq-list');

list.addEventListener('click', e => {
  //--
  console.log(e.target.closest('.collapsible-header'));
  if (e.target.closest('.collapsible-header')) {
    const active = document.querySelector('[data-hidden="false"]');
    console.log(e.target);

    if (active && e.target.closest('.faq-item') == active.closest('.faq-item')) {
      active.classList.toggle('visually-hidden');
      e.target.closest('.faq-item').classList.toggle('active');
      active.dataset.hidden = !Number(active.dataset.hidden);
    } else if (active) {
      active.classList.add('visually-hidden');
      active.closest('.faq-item').classList.toggle('active');
      active.dataset.hidden = true;
      //--
      const act = e.target.closest('.faq-item').children[1];
      act.classList.remove('visually-hidden');
      e.target.closest('.faq-item').classList.toggle('active');
      act.dataset.hidden = false;
    } else if (true) {
      const act = e.target.closest('.faq-item').children[1];
      e.target.closest('.faq-item').classList.add('active');
      act.classList.remove('visually-hidden');
      act.dataset.hidden = false;
    }
  }
  //--
});
