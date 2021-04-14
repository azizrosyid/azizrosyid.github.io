const hurufVokal = ['A', 'I', 'U', 'E', 'O'];
const containerHurufVokal = document.querySelector('.container-vokal');
hurufVokal.forEach((huruf) => {
  const htmlHuruf = document.createElement('span');
  htmlHuruf.className = 'huruf-vokal-menu';
  htmlHuruf.innerText = huruf;
  containerHurufVokal.appendChild(htmlHuruf);
});

const hurufKonsonan = [''].concat('BCDFGHJKLMNPQRSTVWXYZ'.split(''));
const containerHurufKonsonan = document.querySelector('.container-konsonan');
hurufKonsonan.forEach((huruf) => {
  const divHuruf = document.createElement('div');
  divHuruf.className = 'div-huruf';

  const htmlKonsonan = document.createElement('span');
  htmlKonsonan.className = 'huruf-konsonan';
  htmlKonsonan.innerText = huruf.toLocaleLowerCase();

  const htmlVokal = document.createElement('span');
  htmlVokal.className = 'huruf-vokal';
  htmlVokal.innerText = 'a';

  divHuruf.appendChild(htmlKonsonan);
  divHuruf.appendChild(htmlVokal);
  containerHurufKonsonan.appendChild(divHuruf);
});

const spanHurufVokal = document.getElementsByClassName('huruf-vokal');

const hurufVokalMenu = document.getElementsByClassName('huruf-vokal-menu');
[...hurufVokalMenu].forEach((huruf) => {
  huruf.addEventListener('click', function () {
    const hurufVokal = this.innerText;
    [...spanHurufVokal].forEach((spanHuruf) => {
      spanHuruf.innerText = hurufVokal.toLocaleLowerCase();
    });
  });
});

const divHuruf = document.getElementsByClassName('div-huruf');
[...divHuruf].forEach((huruf) => {
  huruf.addEventListener('click', function () {
    let hurufSpeech = this.innerText;
    if (hurufSpeech.startsWith('c') || hurufSpeech.startsWith('w') || hurufSpeech.startsWith('d') || hurufSpeech.startsWith('b')) {
      hurufSpeech = `${hurufSpeech[0]}h${hurufSpeech[1]}`;
    } else if (hurufSpeech === 'hi') {
      hurufSpeech = 'hii';
    } else if (hurufSpeech === 'be' || hurufSpeech === 'de' || hurufSpeech === 'we' || hurufSpeech === 'xe') {
      hurufSpeech = `${hurufSpeech[0]}h${hurufSpeech[1]}`;
    }
    responsiveVoice.speak(hurufSpeech, 'Indonesian Female', { rate: 0.5 });
  });
});

const countdown = document.querySelector('.countdown');
const menit = document.querySelector('.menit');
const detik = document.querySelector('.detik');
setInterval(() => {
  if (detik.innerText === '00') {
    detik.innerText = 60;
    if (menit.innerText <= 10) {
      menit.innerText = `0${menit.innerText - 1}`;
    } else {
      menit.innerText -= 1;
    }
  }
  if (detik.innerText <= 10) {
    detik.innerText = `0${detik.innerText - 1}`;
  } else {
    detik.innerText -= 1;
  }
  if (detik.innerText === '00' && menit.innerText === '00') {
    countdown.innerHTML = 'SELESAI';
  }
}, 1000);
