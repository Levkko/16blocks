let noteSound;

export function playNote(note) {
  var instrumentSelector = document.getElementById("instrument");
  var selectedInstrument = instrumentSelector.value;

  let noteSoundChosen;
  if (selectedInstrument === "piano") {
    noteSoundChosen = `./notes-piano/${note}.wav`;
  }
  if (selectedInstrument === "celesta") {
    noteSoundChosen = `./notes celesta/${note}.wav`;
  }

  noteSound = new Audio(noteSoundChosen);
  if (selectedInstrument === "piano") {
    noteSound.volume = volumeSlider.value / 100;
  }
  if (selectedInstrument === "celesta") {
    noteSound.volume = volumeSlider.value / 100;
  }

  noteSound.play();
}

var keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("mousedown", () => {
    var note = key.getAttribute("data-note");
    playNote(note);
    key.classList.add("active");
    console.log(`mouse down, key: ${decodeURIComponent(note)}`);
  });

  key.addEventListener("mouseup", () => {
    if (noteSound) {
      key.classList.remove("active");
      fadeOutAudio(noteSound);
      console.log("mouse up");
    }
  });

  key.addEventListener("mouseleave", () => {
    if (noteSound) {
      key.classList.remove("active");
      fadeOutAudio(noteSound);
    }
  });
});
