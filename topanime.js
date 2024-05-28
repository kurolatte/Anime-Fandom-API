(function () {
    const topAnimeContainer = document.getElementById('top-anime');
  
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(response => response.json())
      .then(data => {
        const topAnimeList = data.data.slice(0, 10);
  
        topAnimeList.forEach(anime => {
          const animeCard = document.createElement('div');
          animeCard.className = 'anime-card';
  
          const animeTitle = document.createElement('h3');
          animeTitle.textContent = anime.title;
  
          const animeScore = document.createElement('p');
          animeScore.textContent = `Score: ${anime.score}`;
  
          const animeImage = document.createElement('img');
          animeImage.src = anime.images.webp.image_url;
          animeImage.alt = anime.title;
  
          const animeLink = document.createElement('a');
          animeLink.href = `https://myanimelist.net/anime/${anime.mal_id}`;
  
          animeLink.appendChild(animeTitle);
          animeCard.appendChild(animeScore);
          animeLink.appendChild(animeImage);
          animeCard.appendChild(animeLink);
          topAnimeContainer.appendChild(animeCard);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  })();