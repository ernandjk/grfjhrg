function embedGames() {
    const embedCodesTextarea = document.getElementById('embedCodes');
    const embedCodes = embedCodesTextarea.value.split('\n').map(code => code.trim());
  
    if (embedCodes.length === 0 || embedCodes[0] === '') {
      alert('Por favor, ingresa al menos un código de inserción');
      return;
    }
  
    const embeddedGamesDiv = document.getElementById('embeddedGames');
    embeddedGamesDiv.innerHTML = ''; // Limpiamos los juegos incrustados actuales
  
    embedCodes.forEach(code => {
      const embeddedGameDiv = document.createElement('div');
      embeddedGameDiv.classList.add('embeddedGame');
  
      const iframe = document.createElement('iframe');
      iframe.src = code;
  
      embeddedGameDiv.appendChild(iframe);
      embeddedGamesDiv.appendChild(embeddedGameDiv);
    });
  
    alert('Juegos insertados correctamente');
  }
  