// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById('horn-select').addEventListener('change', function(e) {
    if (e.target.value == 'air-horn') {
      document.querySelector('img').src = 'assets/images/air-horn.svg';
      document.querySelector('audio').src = 'assets/audio/air-horn.mp3';
    } else if (e.target.value == 'car-horn') {
      document.querySelector('img').src = 'assets/images/car-horn.svg';
      document.querySelector('audio').src = 'assets/audio/car-horn.mp3';
    } else if (e.target.value == 'party-horn') {
      document.querySelector('img').src = 'assets/images/party-horn.svg';
      document.querySelector('audio').src = 'assets/audio/party-horn.mp3';
    }
  })

  document.querySelector('input').addEventListener('input', function(e) {
    document.querySelector('audio').volume = e.target.value / 100;
    if (e.target.value == 0) {
      document.querySelectorAll('img')[1].src = 'assets/icons/volume-level-0.svg';
    } else if (e.target.value >= 1 && e.target.value < 33) {
      document.querySelectorAll('img')[1].src = 'assets/icons/volume-level-1.svg';
    } else if (e.target.value >= 33 && e.target.value < 67) {
      document.querySelectorAll('img')[1].src = 'assets/icons/volume-level-2.svg';
    } else if (e.target.value >= 67) {
      document.querySelectorAll('img')[1].src = 'assets/icons/volume-level-3.svg';
    }

  })
  
  const jsConfetti = new JSConfetti();
  document.querySelector("button").addEventListener("click", function() {
    let audio = document.getElementsByClassName('hidden');
    let arr = Array.from(audio);
    arr[0].play();

    let choice = document.getElementById('horn-select');
    if (choice.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}