(function(){
  const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
  const avatarPlaceholder = document.querySelector('.avatar-placeholder');
  const fileInput = document.getElementById('avatar-file-input');
  const avatarUrlInput = document.getElementById('avatar-url');
  const avatarUrlSet = document.getElementById('avatar-url-set');

  const nowEl = document.getElementById('now-ms');
  const bioParagraph = document.getElementById('bio-paragraph');
  const bioToggle = document.getElementById('bio-toggle');

  function tick(){
    const ms = Date.now();
    nowEl.textContent = String(ms);
    nowEl.setAttribute('datetime', new Date(ms).toISOString());
  }
  tick();
  setInterval(tick, 1000);

  bioToggle.addEventListener('click', () => {
    const expanded = bioToggle.getAttribute('aria-expanded') === 'true';
    if(expanded){
      bioParagraph.classList.add('bio-collapsed');
      bioToggle.textContent = 'Show more';
      bioToggle.setAttribute('aria-expanded','false');
    } else {
      bioParagraph.classList.remove('bio-collapsed');
      bioToggle.textContent = 'Show less';
      bioToggle.setAttribute('aria-expanded','true');
      bioParagraph.focus();
    }
  });

  window.profileCard = {
    setAvatarUrl: setAvatar,
    getTimeMs: () => Date.now()
  };
})();
