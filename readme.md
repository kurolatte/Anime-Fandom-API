# Anime Fandom API
https://kurolatte.github.io/Anime-Fandom-API/
I am using Jikan Public REST API for my Anime API project. <br>
**If you're an anime fan like me, join me. Dive into Discussions, Uncover Hidden Gems, and Connect with Fellow Fans.** 

## UX
This website is for anime fans or the public to search up on plausible anime they are interested in but unsure whether to pick up on it as some anime has really long-winded episodes.
It also serves as an anime community to bring together people with different interest and mindset. There could even be people with similar taste. If you're thinking of creating a community with this in mind, this is the website for you as it allows variety of input and its user-friendly.

User Stories: <br>
* As an anime fan, I will search up anime to see its rating and ranking before i decide whether to watch it. This includes looking up trailers or a little bit of spoilers to get my interest up. In this website, the search system is very useful to read up on the synopsis, i also include some funny anime videos to spike up interest. However, the rating and ranking might not be dependable as individuals have different views and interest. When this happens, a forum becomes useful as it serves as a sharing, debating and even flaming platform for us to enlighten ourselves in a way. A forum is a vibrant virtual community of fans from around the world. We can shared fan art, analyze plot theories, and engage in spirited debates about character development. Despite being thousands of miles apart, many of us feels a sense of belonging with fellow fans and found solace in our shared passion for anime. This is the use of chat forum in the website, it is a virtual home, where we could express freely and connect with like-minded individuals.


# Public REST API
* [Public API Available](https://jikan.moe/showcase)
* [Documentation](https://docs.api.jikan.moe)

# Features
Existing Features
* Feature 1 - allows users to search for anime and manga in the search bar, there is two search bar to allow simultaneous search for better comparison
  ```javascript
  //JS for anime title search bar
  //Details can be seen on JSON file of Jikan Public API used
  //Do the same for manga title search bar.
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
    .then((result) =>  {
      console.log(result)
      let anime = result.data[0];
      document.getElementById("animeTitle").innerHTML = `<h2>${anime.title}</h2>`;
  >>>>> // To display more details, include elements of each details subsequently
* Feature 2 - features top airing and season anime that links to official website
* Feature 3 - allow users to share in the forum, the topic changes weekly<br>
  This is the [chat forum](https://github.com/kurolatte/Anime-Fandom-API/blob/main/chat.html).
  The data is save in localstorage. 
* Feature 4 - trailer/spoilers of anime funny moments displayed to serve as interest, chat area.
  
## Features Left to Implement
* change localstorage to database or cloud storage
* Initialise use of username to specific user
* hide "top airing" and "spring anime", only display searched anime/manga

# Technologies Used
* The project uses [JQuery](https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js) to simplify DOM manipulation.

# Testing
No issue, other than the features that has not been implemented as mentioned.

# Deployment
* GitHub

# Credits
## Content
* The text and image in the forum is from [AFASG](https://animefestival.asia/csf2024/)

## Media
* The background image used in this site was obtained from [freeartbackgrounds](https://freeartbackgrounds.com/)
* The videos used in this site was obtained from Youtube

## Acknowledgements
* I received inspiration for this project from [MyAnimeList](https://myanimelist.net/)
