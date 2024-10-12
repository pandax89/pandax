// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "It comes to mind", time: 29 },
  { text: "How you're making me smile from a far", time: 34 },
  { text: "Do you feel like me too?", time: 40 },
  { text: "Enough has been said", time: 44 },
  { text: "Cause there's a million people out there", time: 49 },
  { text: "But all i need is you", time: 52 },
  { text: "And i just want to know, about your day", time: 53 },
  { text: "If all is okay with you", time: 59 },
  { text: "We can talk all night and day", time: 66 },
  { text: "You're all thats on my mind", time: 76 },
  { text: "I'm waiting to hear back from you", time: 79 },
  { text: "(Cause i know no one makes me laugh like you do)", time: 85 },
  { text: "The time flies on by", time: 91 },
  { text: "When my days are with you", time: 97 },
  { text: "You won't understand", time: 101 },
  { text: "My seasons are better with you", time: 104 },
  { text: "It's better with you", time: 111 },
  { text: "I'm always here for you", time: 144 },
  { text: "The whisper of birds", time: 148 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);