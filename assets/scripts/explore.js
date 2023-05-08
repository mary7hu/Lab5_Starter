// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = [];
  const synth = window.speechSynthesis;

  function populateVoiceList() {
    synth.onvoiceschanged = function () {
      voices = synth.getVoices();

      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
          option.textContent += " — DEFAULT";
        }

        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        document.querySelector("select").appendChild(option);
      }
    };
  }
  populateVoiceList();

  document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault();

    let words = document.querySelector("textarea").value;

    const utterThis = new SpeechSynthesisUtterance(words);

    utterThis.addEventListener("end", (event) => {
      document.querySelector("img").src = "assets/images/smiling.png";
    });

    let voiceSelect = document.getElementById("voice-select")

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    document.querySelector("img").src = "assets/images/smiling-open.png";
    synth.speak(utterThis);
  });
}