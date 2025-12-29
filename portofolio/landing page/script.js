document.querySelectorAll('.card,.mockup,.price-card').forEach(el => {
  el.style.transition = '.4s';
  el.addEventListener('mouseover', () => {
    el.style.transform = 'translateY(-10px)';
  });
  el.addEventListener('mouseout', () => {
    el.style.transform = 'translateY(0)';
  });
});
