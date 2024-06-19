document.addEventListener('DOMContentLoaded', () => {
  const starCount = 100; // Adjust the number of stars here
  const body = document.body;

  // Create static stars
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1; // Ensure stars are at least 1px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.opacity = Math.random();
    body.appendChild(star);
  }

  // Create multiple hearts
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    body.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
      heart.remove();
    }, 5000); // Match the animation duration
  }, 1000);
  
  
  const inp = document.getElementById('inp');
  const btn = document.getElementById('btn');
  const magicbox = document.getElementById('magicbox')
  const container = document.getElementById('container')
  btn.addEventListener('click', () => {
    if (inp.value.toLowerCase() === 'yes') {
      alert('I love you too ❤️');
      container.style.display = 'none';
      magicbox.style.display = 'block';
    } else {
      alert('Okay 😔');
    }
  });

  
  // New heart every second
});
