// script.js
document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const modalOk = document.getElementById('modalOk');

  function openModal() {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    // create simple confetti burst
    shootConfetti();
  }

  function close() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  yesBtn.addEventListener('click', () => {
    openModal();
  });

  closeModal.addEventListener('click', close);
  modalOk.addEventListener('click', close);

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  // Small confetti creation
  function shootConfetti() {
    const colors = ['#ff4d8b', '#ffd166', '#9be7ff', '#ff85b5', '#ffd0f0'];
    const count = 18;
    for (let i = 0; i < count; i++) {
      createPiece(colors[i % colors.length]);
    }
  }

  function createPiece(color) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.background = color;
    // random start position (center-ish)
    const startX = window.innerWidth / 2 + (Math.random() - 0.5) * 120;
    const startY = window.innerHeight / 2 + (Math.random() - 0.5) * 40;
    el.style.left = startX + 'px';
    el.style.top = startY + 'px';
    el.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(el);

    const dx = (Math.random() - 0.5) * 800;
    const dy = - (200 + Math.random() * 600);
    const rotation = (Math.random() - 0.5) * 720;

    el.animate([
      { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
      duration: 1200 + Math.random()*800,
      easing: 'cubic-bezier(.2,.8,.2,1)'
    });

    setTimeout(() => el.remove(), 2200);
  }
});