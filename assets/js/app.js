// Obtém referências para os elementos de áudio e controles personalizados
const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

// Adiciona evento de clique para o botão de play
playButton.addEventListener("click", () => {
  audio.play();
});

// Adiciona evento de clique para o botão de pause
pauseButton.addEventListener("click", () => {
  audio.pause();
});

$("#playButton").hide();

$("#playButton").click(function () {
  $("#playButton").hide();
  $("#pauseButton").show();
});

$("#pauseButton").click(function () {
  $("#playButton").show();
  $("#pauseButton").hide();
});
