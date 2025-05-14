 // Configuration
    const confettiCount = 150;
    const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#4d908e', '#577590', '#277da1', '#ff69b4', '#8a2be2'];
    const shapes = ['circle', 'square', 'rectangle', 'triangle'];
    
    // DOM Elements
    const container = document.getElementById('confetti-container');
    
    // Create a confetti piece
    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      // Random properties
      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const positionX = Math.random() * 100;
      const rotation = Math.random() * 360;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 0.5;
      
      // Apply random styles
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = 'transparent';
      confetti.style.left = `${positionX}%`;
      confetti.style.animationDuration = `${duration}s`;
      confetti.style.animationDelay = `${delay}s`;
      confetti.style.zIndex = '-1';
      
      // Create different shapes
      switch(shape) {
        case 'circle':
          confetti.style.backgroundColor = color;
          confetti.style.borderRadius = '50%';
          break;
        case 'square':
          confetti.style.backgroundColor = color;
          break;
        case 'rectangle':
          confetti.style.backgroundColor = color;
          confetti.style.width = `${size * 2}px`;
          confetti.style.height = `${size}px`;
          break;
        case 'triangle':
          confetti.style.width = '0';
          confetti.style.height = '0';
          confetti.style.backgroundColor = 'transparent';
          confetti.style.borderLeft = `${size/2}px solid transparent`;
          confetti.style.borderRight = `${size/2}px solid transparent`;
          confetti.style.borderBottom = `${size}px solid ${color}`;
          break;
      }
      
      // Add some physics variation
      const swingAmount = Math.random() * 40 - 20;
      confetti.style.animationName = 'fall';
      
      // Remove confetti after animation
      confetti.addEventListener('animationend', () => {
        confetti.remove();
      });
      
      return confetti;
    }
    
    // Launch confetti
    function launchConfetti() {
      for (let i = 0; i < confettiCount; i++) {
        const confetti = createConfetti();
        container.appendChild(confetti);
      }
    }
    
    // Auto-launch confetti when page loads
    window.addEventListener('load', launchConfetti);
    
    // Create continuous confetti effect
    setInterval(() => {
      const confetti = createConfetti();
      container.appendChild(confetti);
    }, 100); // More frequent confetti