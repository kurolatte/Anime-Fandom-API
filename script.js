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
      document.getElementById("animeGenres").innerHTML = `<h5>Genres:</h5><ul>${anime.genres.map(genre => `<li>${genre.name}</li>`).join("")}</ul>`;
      document.getElementById("animeYear").innerHTML = `<p>Year: ${anime.year || "N/A"}</p>`;
      document.getElementById("animeImage").innerHTML = `<img src="${anime.images.webp.large_image_url}" alt="${anime.title}">`;
      document.getElementById("animeSynopsis").innerHTML = `<h4>Synopsis:</h4><p>${anime.synopsis || "N/A"}</p>`;
    })
    .catch((error) => console.error(error));
}

$(document).ready(function() {
  // Get the comments from local storage or initialize an empty array
  let comments = JSON.parse(localStorage.getItem("comments")) || [];

  // Display the comments on page load
  comments.forEach((comment) => {
    const newComment = $('<div class="comment"></div>');
    newComment.html(
      `<h3>${comment.username}</h3><p>${comment.text}</p><span class="timestamp">${new Date(comment.timestamp).toLocaleString()}</span>`
    );
    $('#comment-section').append(newComment);
  });

  // Form submission
  $('#comment-form').on('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the user's name and comment
    const username = $('#username').val();
    const comment = $('#comment').val();

    // Create a new comment object
    const newComment = {
      username: username,
      text: comment,
      timestamp: Date.now()
    };

    // Add the new comment to the array
    comments.push(newComment);

    // Update the local storage
    localStorage.setItem("comments", JSON.stringify(comments));

    // Create a new comment element
    const newCommentElement = $('<div class="comment"></div>');
    newCommentElement.html(
      `<h3>${username}</h3><p>${comment}</p><span class="timestamp">${new Date(newComment.timestamp).toLocaleString()}</span>`
    );

    // Add the new comment to the comment section
    $('#comment-section').append(newCommentElement);

    // Clear the form fields
    $('#username').val('');
    $('#comment').val('');
  });
});