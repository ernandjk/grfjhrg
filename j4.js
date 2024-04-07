function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.trim();
  
    if (searchTerm === '') {
      alert('Por favor, ingrese un término de búsqueda');
      return;
    }
  
    $.ajax({
      url: `/search?term=${searchTerm}`,
      method: 'GET',
      success: function (response) {
        displaySearchResults(response);
      },
      error: function (error) {
        console.error('Error al buscar juegos:', error);
      }
    });
  }
  
  function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';
  
    if (results.length === 0) {
      searchResultsDiv.innerHTML = '<p>No se encontraron resultados</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result.name; // Asumiendo que cada juego tiene una propiedad 'name'
      ul.appendChild(li);
    });
    searchResultsDiv.appendChild(ul);
  }
  