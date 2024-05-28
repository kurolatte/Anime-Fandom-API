// Anime data
function fetchData() {
    const animeTitle = document.getElementById("animeTitle").value;
    fetch(`https://api.jikan.moe/v4/anime?q=${animeTitle}&limit=1`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            alert("Anime not found. Please enter a valid Anime title.");
          } else {
            throw new Error("Could not fetch data.");
          }
          return;
        }
        return response.json();
      })
      .then((result) =>  {
        console.log(result)
        let anime = result.data[0];
        document.getElementById("animeTitle").innerHTML = `<h2>${anime.title}</h2>`;
        document.getElementById("animeTitle_English").innerHTML = `<h4>${anime.title_english || "N/A"}</h4>`;
        document.getElementById("animeEpisodes").innerHTML = `<p>Episodes: ${anime.episodes}</p>`;
        document.getElementById("animeRank").innerHTML = `<p>Rank# ${anime.rank}</p>`;
        document.getElementById("animeGenres").innerHTML = `<p>Genres:</p><ul>${anime.genres.map(genre => `<li>${genre.name}</li>`).join("")}</ul>`;
        document.getElementById("animeYear").innerHTML = `<p>Year: ${anime.year || "N/A"}</p>`;
        document.getElementById("animeStatus").innerHTML = `<p>Status: ${anime.status || "N/A"}</p>`;
        document.getElementById("animeImage").innerHTML = `<h3><img src="${anime.images.webp.large_image_url}" class="left-image" alt="${anime.title}"></h3>`;
        document.getElementById("animeSynopsis").innerHTML = `<p>Synopsis:</p><p>${anime.synopsis || "N/A"}</p>`;
      })
      .catch((error) => console.error(error));
  }
  
  // Manga data
  function fetchMangaData() {
    const mangaTitle = document.getElementById("mangaTitle").value;
    fetch(`https://api.jikan.moe/v4/manga?q=${mangaTitle}&limit=1`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            alert("Manga not found. Please enter a valid Manga title.");
          } else {
            throw new Error("Could not fetch data.");
          }
          return;
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        let manga = result.data[0];
        document.getElementById("mangaTitle").innerHTML =`<h2>${manga.title}</h2>`;
        document.getElementById("mangaTitle_English").innerHTML =`<h4>${manga.title_english || "N/A"}</h4>`;
        document.getElementById("mangaVolumes").innerHTML =`<p>Volumes: ${manga.volumes}</p>`;
        document.getElementById("mangaChapters").innerHTML =`<p>Chapters: ${manga.chapters}</p>`;
        document.getElementById("mangaGenres").innerHTML =`<p>Genres:</p><ul>${manga.genres.map(genre => `<li>${genre.name}</li>`).join("")}</ul>`;
        document.getElementById("mangaImage").innerHTML =`<h3><img src="${manga.images.webp.large_image_url}" class="left-image" alt="${manga.title}"></h3>`;
        document.getElementById("mangaSynopsis").innerHTML =`<p>Synopsis:</p><p>${manga.synopsis || "N/A"}</p>`;
      })
      .catch((error) => console.error(error));
  }