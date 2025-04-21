
window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
    }, 2000);
  });
  
  
  const cards = document.querySelectorAll('.product-card');
  
  cards.forEach(card => {
    const slides = card.querySelectorAll('.media-slide');
    let current = 0;
  
    if (slides.length > 1) {
      setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
      }, 3000);
    }
  });
  
  
  document.getElementById('searchInput').addEventListener('input', function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
      const match = card.innerText.toLowerCase().includes(value);
      card.style.display = match ? 'block' : 'none';
    });
  });
  