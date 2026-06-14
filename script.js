// Array of BIRTHDAY-THEMED captions for the images
const photoCaptions = [
  "🎂 Selamat ulang tahun ke-25, Kakak Butas! Semoga panjang umur dan selalu bahagia!",
  "🎉 HBD Riry! Semakin cantik, semakin sukses, dan makin banyak yang ngefans!",
  "🎈 25 tahun hidup di dunia dan semakin sempurna setiap harinya. Happy Birthday Kak Riry!",
  "🌸 Ulang tahun ke-25! Semoga semua impian dan cita-citamu terwujud tahun ini ya!",
  "🎁 Selamat ulang tahun Kakak Butas! Semoga hidupmu selalu penuh canda tawa dan kebahagiaan!",
  "💫 Happy 25th Birthday! Semoga hari-harimu seindah senyumanmu yang selalu menawan!",
  "🌺 Met milad ke-25 Kak Riry! Semoga selalu dilindungi dan diberi kesehatan ya!",
  "🎊 Selamat ultah Kakak Butas! 25 tahun penuh kenangan indah — here's to many more!",
  "🥳 Happy Birthday! Semoga 25 tahun ini jadi awal dari hal-hal luar biasa dalam hidupmu!",
  "✨ Ulang tahun ke-25 Riry Indhani Kayangan! Terima kasih sudah selalu menjadi dirimu yang terbaik!",
  "🎂 Happy 25th Birthday Kakak Butas! Semoga umur panjang, sehat selalu, dan bahagia selamanya! 🎉"
];

// Default wishes to pre-populate the board if empty
const defaultWishes = [
  { author: "Sahabat Kece", content: "Met milad Kak Butas! Kurang-kurangin marah marah nya, inget umur udah 25 wkwk." },
  { author: "Boba Lovers", content: "Happy birthday Kakak Butas! Semoga stok boba di kulkas melimpah terus sepanjang tahun." },
  { author: "Tetangga Sebelah", content: "HBD Kak Riry Indhani Kayangan! Ditunggu traktiran tumpeng estetiknya ya." }
];

// Document Elements
const coverPage = document.getElementById('cover-page');
const btnOpenInvitation = document.getElementById('btn-open-invitation');
const audioController = document.getElementById('audio-controller');
const audioBtn = document.getElementById('audio-btn');
const audioPrev = document.getElementById('audio-prev');
const audioNext = document.getElementById('audio-next');
const audioLabel = document.getElementById('audio-label');
const audioTrackNum = document.getElementById('audio-track-num');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const balloonContainer = document.getElementById('balloon-container');

/* ==========================================================================
   PLAYLIST CONFIGURATION
   Track 1: Jamrud - Selamat Ulang Tahun
   Track 2: Ed Sheeran - Shape of You
   Track 3: Bertobatlah masih - jemox83 (Local MP3)

   Menggunakan HTML5 Audio dengan sumber MP3 yang dapat diakses.
   Karena keterbatasan CORS dan browser autoplay policy pada YouTube embed,
   lagu 1 & 2 menggunakan sumber audio MP3 instrumental sebagai pengganti
   yang kompatibel untuk deployment GitHub Pages & Laragon.
   ========================================================================== */

const playlist = [
  {
    type: 'html5',
    // Jamrud - Selamat Ulang Tahun (local file)
    src: 'Audio/Jamrud - Selamat Ulang Tahun Official Lyric Video.mp3',
    title: '🎸 Selamat Ulang Tahun - Jamrud'
  },
  {
    type: 'html5',
    // Ed Sheeran - Shape of You (local file)
    src: 'Audio/Ed Sheeran - Shape of You Official Music Video.mp3',
    title: '🎤 Shape of You - Ed Sheeran'
  },
  {
    type: 'html5',
    // Bertobatlah masih - jemox83 (local file)
    src: 'Audio/Bertobatlah%20masih%20%2C%20jemox83%20%23shorts.mp3',
    title: '🎵 Bertobatlah masih - jemox83'
  }
];

let currentTrackIdx = 0;
let isPlaying = false;

// Main audio player element
const player = new Audio();
player.volume = 0.8;

// When a track ends, auto-advance to next
player.addEventListener('ended', () => {
  nextTrack();
});

// Handle loading errors - skip to next track
player.addEventListener('error', (e) => {
  console.warn('Audio load error, skipping to next track:', e);
  setTimeout(() => nextTrack(), 1000);
});

/* --- PLAYLIST CONTROLS --- */

function updateControllerUI() {
  const track = playlist[currentTrackIdx];
  audioLabel.textContent = track.title;
  audioTrackNum.textContent = `${currentTrackIdx + 1}/${playlist.length}`;
  audioBtn.textContent = isPlaying ? '⏸' : '▶';
  if (isPlaying) {
    audioController.classList.add('playing');
  } else {
    audioController.classList.remove('playing');
  }
}

function playCurrentTrack() {
  const track = playlist[currentTrackIdx];
  player.src = track.src;
  player.load();
  player.play()
    .then(() => {
      isPlaying = true;
      updateControllerUI();
    })
    .catch(err => {
      console.warn('Playback error:', err);
      isPlaying = false;
      updateControllerUI();
    });
  updateControllerUI();
}

function pauseCurrentTrack() {
  player.pause();
  isPlaying = false;
  updateControllerUI();
}

function resumeCurrentTrack() {
  player.play()
    .then(() => {
      isPlaying = true;
      updateControllerUI();
    })
    .catch(err => console.warn(err));
}

function nextTrack() {
  currentTrackIdx = (currentTrackIdx + 1) % playlist.length;
  playCurrentTrack();
}

function prevTrack() {
  currentTrackIdx = (currentTrackIdx - 1 + playlist.length) % playlist.length;
  playCurrentTrack();
}

function togglePlayPause() {
  if (isPlaying) {
    pauseCurrentTrack();
  } else {
    resumeCurrentTrack();
  }
}

/* --- START MUSIC (called when invitation is opened) --- */
function startPlaylist() {
  currentTrackIdx = 0;
  playCurrentTrack();
}

// Auto-start music when the page loads (may be blocked by browser autoplay policy, but user can interact later)
document.addEventListener('DOMContentLoaded', () => {
  startPlaylist();
});

/* --- BUTTON LISTENERS --- */
audioBtn.addEventListener('click', togglePlayPause);
audioNext.addEventListener('click', nextTrack);
audioPrev.addEventListener('click', prevTrack);

/* ==========================================================================
   OTHER ELEMENT REFERENCES
   ========================================================================== */

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

// Challenge Elements
const runawayBtn = document.getElementById('runaway-btn');
const gameArea = document.getElementById('game-area');
const progressLabel = document.getElementById('progress-label');
const progressFill = document.getElementById('progress-fill');
const challengeMsg = document.getElementById('challenge-msg');
const rewardCard = document.getElementById('reward-card');

// Celebration Elements
const candles = document.querySelectorAll('.candle-wrapper');
const cakeStatus = document.getElementById('cake-status');
const btnResetCandles = document.getElementById('btn-reset-candles');
const wishForm = document.getElementById('wish-form');
const wishAuthor = document.getElementById('wish-author');
const wishContent = document.getElementById('wish-content');
const wishesContainer = document.getElementById('wishes-container');

// Canvas Confetti variables
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiActive = false;
let particles = [];
const colors = ['#fcd5ce', '#fae1dd', '#ffb5a7', '#d4a373', '#e9d8a6', '#e2efe0', '#f28482'];

// Game state variables
let runawayClicks = 0;
const targetClicks = 10;
const runawayPhrases = [
  "Coba klik tombolnya kalau bisa! 😏",
  "1/10: Eits! Meleset dikit! 😜",
  "2/10: Kurang cepet gerakannya Kak Butas! 🏃‍♀️",
  "3/10: Hahaha! Seru kan? 😈",
  "4/10: Semangat! Hampir separuh jalan! 💪",
  "5/10: Kakak Butas mulai jengkel ya? 🤣",
  "6/10: Dikit lagi dapet kado istimewa! 🎁",
  "7/10: Ayo kejar terus jangan kasih kendor! 🏃‍♀️💨",
  "8/10: Okey okey, kali ini serius... eh tapi boong! 🤪",
  "9/10: Satu kali klik lagi Kak Butas! Tahan emosi! 🌋",
  // 10/10: HORE! Berhasil! Klik tombolnya sekali lagi untuk klaim kado! 🎉 (removed per user request)
];

/* ==========================================================================
   1. COVER & MUSIC HANDLING
   ========================================================================== */

btnOpenInvitation.addEventListener('click', () => {
  // Fade out cover page
  coverPage.classList.add('hidden');

  // Show navigation and floating music widget
  setTimeout(() => {
    mainNav.classList.add('visible');
    audioController.classList.add('visible');
    // Start page animation trigger
    triggerSectionAnimations();
  }, 600);

  // Start the 3-song playlist
  startPlaylist();

  // Start generating balloons
  setInterval(createBalloon, 1500);
  for (let i = 0; i < 5; i++) {
    setTimeout(createBalloon, i * 400);
  }
});

/* ==========================================================================
   2. FLOATING BALLOONS GENERATOR
   ========================================================================== */

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('floating-balloon');

  // Random configurations
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 25 + 30; // 30px to 55px
  const left = Math.random() * 95; // 0% to 95% width
  const duration = Math.random() * 8 + 8; // 8s to 16s

  balloon.style.backgroundColor = color;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size * 1.3}px`;
  balloon.style.left = `${left}%`;
  balloon.style.animationDuration = `${duration}s`;

  // Custom triangle background matching balloon color
  balloon.style.setProperty('--balloon-color', color);

  // Add dynamic triangle style
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .floating-balloon::after {
      border-bottom: 7px solid var(--balloon-color) !important;
    }
  `;
  document.head.appendChild(styleEl);

  balloonContainer.appendChild(balloon);

  // Remove balloon after animation completes
  setTimeout(() => {
    balloon.remove();
    styleEl.remove();
  }, duration * 1000);
}

/* ==========================================================================
   3. SCROLL SPY & PAGE ANIMATIONS
   ========================================================================== */

function triggerSectionAnimations() {
  const scrollPos = window.scrollY + window.innerHeight * 0.75;

  sections.forEach(sec => {
    if (scrollPos > sec.offsetTop) {
      sec.classList.add('visible');

      // Skill bar animation inside profile
      if (sec.id === 'profile') {
        const skillBars = sec.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(bar => {
          bar.style.width = bar.getAttribute('data-width');
        });
      }
    }
  });

  // Update Active Link in Nav
  let currentSec = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    const secHeight = sec.clientHeight;
    if (window.scrollY >= secTop - 200) {
      currentSec = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSec}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', triggerSectionAnimations);

/* ==========================================================================
   4. POLAROID LIGHTBOX MODAL
   ========================================================================== */

function openLightbox(index) {
  const polaroids = document.querySelectorAll('.polaroid-img');
  if (polaroids[index]) {
    lightboxImg.src = polaroids[index].src;
    lightboxCaption.textContent = photoCaptions[index] || "Memori indah Kakak Butas";
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  lightbox.classList.remove('active');
}

// Close lightbox on pressing 'Escape'
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* ==========================================================================
   5. RUNAWAY BUTTON CHALLENGE GAME
   ========================================================================== */

// Move button randomly inside game area bounds
function relocateRunawayButton() {
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;
  const btnWidth = runawayBtn.clientWidth;
  const btnHeight = runawayBtn.clientHeight;

  // Compute safe random positions inside parent area bounds
  const newLeft = Math.random() * (areaWidth - btnWidth - 30) + 15;
  const newTop = Math.random() * (areaHeight - btnHeight - 30) + 15;

  runawayBtn.style.left = `${newLeft}px`;
  runawayBtn.style.top = `${newTop}px`;
}

// Track runaway click/hover interaction
function handleRunawayInteraction(e) {
  if (runawayClicks >= targetClicks) {
    // Game completed, show the letter!
    rewardCard.classList.add('visible');
    runawayBtn.style.display = 'none';
    challengeMsg.textContent = "Kado berhasil diklaim! Horeee! 🎉";
    triggerConfetti(5); // burst confetti!
    return;
  }

  // Increment clicks
  runawayClicks++;

  // Update progress
  const progressPercent = (runawayClicks / targetClicks) * 100;
  progressFill.style.width = `${progressPercent}%`;
  progressLabel.textContent = `Kesabaran Kakak Butas: ${runawayClicks}/${targetClicks}`;
  challengeMsg.textContent = runawayPhrases[runawayClicks];

  if (runawayClicks < targetClicks) {
    relocateRunawayButton();
    // Tiny scale animation on relocation
    runawayBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      runawayBtn.style.transform = 'scale(1)';
    }, 100);
  } else {
    // 10th click: bring it back to center, stop fleeing, invite final click
    runawayBtn.style.left = '50%';
    runawayBtn.style.top = '50%';
    runawayBtn.style.transform = 'translate(-50%, -50%) scale(1.1)';
    runawayBtn.style.background = 'linear-gradient(45deg, #d4a373 0%, #e9d8a6 100%)';
    runawayBtn.style.boxShadow = '0 0 20px rgba(212, 163, 115, 0.6)';
    runawayBtn.textContent = "Buka Kado Sekarang! 🎁";
  }
}

// Relocate on mouse hover to make it extra elusive for mouse users
runawayBtn.addEventListener('mouseenter', () => {
  if (runawayClicks < targetClicks) {
    handleRunawayInteraction();
  }
});

// Click fallback (especially for touchscreen/mobile users)
runawayBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleRunawayInteraction();
});

/* ==========================================================================
   6. VIRTUAL BIRTHDAY CAKE & CANDLES
   ========================================================================== */

candles.forEach(candle => {
  candle.addEventListener('click', () => {
    if (!candle.classList.contains('blown')) {
      candle.classList.add('blown');

      // Check if all candles blown
      const allBlown = Array.from(candles).every(c => c.classList.contains('blown'));
      if (allBlown) {
        cakeStatus.textContent = "Horeee! Tiupan Kakak Butas luar biasa! 🎂🎉";
        triggerConfetti(8); // heavy confetti!
      }
    }
  });
});

btnResetCandles.addEventListener('click', () => {
  candles.forEach(c => c.classList.remove('blown'));
  cakeStatus.textContent = "Klik lilin-lilin di bawah untuk meniupnya! 🎂";
});

/* ==========================================================================
   7. WISH BOARD (LOCALSTORAGE GUESTBOOK)
   ========================================================================== */

function getWishes() {
  const stored = localStorage.getItem('kakak_butas_wishes');
  if (stored) {
    return JSON.parse(stored);
  }
  // Store default wishes if none exist
  localStorage.setItem('kakak_butas_wishes', JSON.stringify(defaultWishes));
  return defaultWishes;
}

function renderWishes() {
  const wishes = getWishes();
  wishesContainer.innerHTML = '';

  wishes.forEach(w => {
    const card = document.createElement('div');
    card.classList.add('sticky-note');

    card.innerHTML = `
      <p class="sticky-text">"${w.content}"</p>
      <p class="sticky-author">- ${w.author}</p>
    `;
    wishesContainer.appendChild(card);
  });
}

wishForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const authorVal = wishAuthor.value.trim();
  const contentVal = wishContent.value.trim();

  if (authorVal && contentVal) {
    const wishes = getWishes();
    wishes.unshift({ author: authorVal, content: contentVal }); // Add to top

    localStorage.setItem('kakak_butas_wishes', JSON.stringify(wishes));
    renderWishes();

    // Reset inputs
    wishAuthor.value = '';
    wishContent.value = '';

    // Sparkle effect
    triggerConfetti(3);
  }
});

// Initial Render
renderWishes();

/* ==========================================================================
   8. CUSTOM CANVAS CONFETTI PARTICLE SYSTEM
   ========================================================================== */

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class ConfettiParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 6;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * -8 - 4; // upward burst
    this.gravity = 0.25;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 4 - 2;
    this.life = 120; // frames
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += this.gravity;
    this.rotation += this.rotationSpeed;
    this.life--;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

function triggerConfetti(intensity = 5) {
  // intensity determines particles count
  const count = intensity * 15;
  const startX = window.innerWidth / 2;
  const startY = window.innerHeight * 0.8; // burst from lower center

  for (let i = 0; i < count; i++) {
    particles.push(new ConfettiParticle(
      startX + (Math.random() * 100 - 50),
      startY
    ));
  }

  if (!confettiActive) {
    confettiActive = true;
    animateConfetti();
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].life <= 0 || particles[i].y > canvas.height) {
      particles.splice(i, 1);
    }
  }

  if (particles.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiActive = false;
  }
}
