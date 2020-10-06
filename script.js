const list = document.querySelector('.faq-list');

list.addEventListener('click', e => {
  //--
  if (e.target == e.target.closest('.collapsible-header')) {
    const active = document.querySelector('.collapsible-body.active');
    if (active && e.target.closest('.faq-item') == active.closest('.faq-item')) {
      //   console.log('ya-ya');
      active.classList.toggle('active');
    } else if (active) {
      active.classList.remove('active');
      //--
      const act = e.target.closest('.faq-item').children[1];
      act.classList.add('active');
    } else if (true) {
      //--
      const act = e.target.closest('.faq-item').children[1];
      act.classList.add('active');
    }
    //--
  }
  //--
});
