document.addEventListener('DOMContentLoaded',()=>{
  const sizeGuideTriggers=document.querySelectorAll('[data-size-guide]');
  sizeGuideTriggers.forEach(btn=>btn.addEventListener('click',()=>{
    alert('Ring Size Guide: Measure inner diameter or request a free sizer.');
  }));

  document.body.addEventListener('click',e=>{
    if(e.target.matches('[data-swatch]')){
      const grp=e.target.closest('[data-swatch-group]');
      grp?.querySelectorAll('[data-swatch]').forEach(el=>el.classList.remove('is-selected'))
      e.target.classList.add('is-selected')
    }
  })
});