let isClicked = false; // To prevent multiple clicks on the cake
let musicPlaying = false; // To track if music is playing from any source (cake or speaker)

// Cake button click event
document.getElementById('cakeButton').addEventListener('click', function() {
  if (!isClicked) {
    isClicked = true; // Prevent further clicks
    playMusic(); // Use common play function for consistency

    var birthdayText = document.getElementById('birthdayText');
    birthdayText.classList.remove('hidden'); // Show the text
    typeWriter(birthdayText);
  }
});

// Typewriter effect function
function typeWriter(element) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100); // Adjust typing speed here
    } else {
      element.style.opacity = 1; // Fade in after typing is done
    }
  }

  type();
}

// Function to toggle audio from the speaker icon
function toggleAudio() {
  const speaker = document.getElementById('speaker');
  
  if (!musicPlaying) {
    playMusic();
    speaker.src = 'speaker_off.png'; // Change icon when music is playing
  } else {
    pauseMusic();
    speaker.src = 'speaker.png'; // Change icon back when paused
  }
}

// Play music function (used by both cake and speaker events)
function playMusic() {
  const audio = document.getElementById('backgroundMusic');
  if (!musicPlaying) {
    audio.loop = true; // Ensure music loops
    audio.play().then(() => {
      musicPlaying = true; // Set the global musicPlaying flag to true
    }).catch(error => {
      console.error("Audio play failed: ", error);
    });
  }
}

// Pause music function
function pauseMusic() {
  const audio = document.getElementById('backgroundMusic');
  audio.pause();
  musicPlaying = false; // Reset the global flag
}
