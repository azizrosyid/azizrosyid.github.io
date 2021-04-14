const synth = window.speechSynthesis;

window.speechSynthesis.onvoiceschanged = () => {
  const voices = synth.getVoices();
  const selectMenu = document.querySelector('select[name]');
  for (let index = 0; index < voices.length; index++) {
    const voice = voices[index];
    const optionMenu = document.createElement('option');
    optionMenu.value = index;
    optionMenu.innerText = voice.name;
    selectMenu.appendChild(optionMenu);
  }
};
