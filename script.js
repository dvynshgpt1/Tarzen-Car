var audio = document.createElement('AUDIO');
document.addEventListener('load', () => {
  audio.setAttribute('src','sound.mp3');
  audio.loop = true;
  audio.canPlayType()
  audio.autoplay()
  audio.play();
  document.body.appendChild(audio);
});

 





