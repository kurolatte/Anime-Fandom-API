(function () {
    const currentSeasonContainer = document.getElementById('current-season');
  
    fetch('https://api.jikan.moe/v4/seasons/now')
      .then(response => response.json())
      .then(data => {
        const currentSeasonList = data.data.slice(0, 10);
  
        currentSeasonList.forEach(anime => {
          const animeCard = document.createElement('div');
          animeCard.className = 'anime-card';
  
          const animeImage = document.createElement('img');
          animeImage.src = anime.images.webp.image_url;
          animeImage.alt = anime.title;
  
          const animeTitle = document.createElement('h3');
          animeTitle.textContent = anime.title;
  
          const animeLink = document.createElement('a');
          animeLink.href = `https://myanimelist.net/anime/${anime.mal_id}`;
  
          animeLink.appendChild(animeImage);
          animeLink.appendChild(animeTitle);
          animeCard.appendChild(animeLink);
          currentSeasonContainer.appendChild(animeCard);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  })();