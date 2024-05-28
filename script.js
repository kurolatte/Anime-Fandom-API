// forum.html comment function
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

// video.html chat function
$(document).ready(function() {
  // Get the chat input and submit button
  const chatInput = $('#chat-input');
  const chatSubmit = $('#chat-submit');

  // Get the chat list element
  const chatList = $('.chat-list');

  // Array to store chat messages
  const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];

  // Function to display chat history
  function displayChatHistory() {
    chatHistory.forEach(message => {
      const chatElement = $('<div class="chat"></div>');
      chatElement.text(message);
      chatList.append(chatElement);
    });
  }
  // Handle chat submission
  chatSubmit.on('click', function(event) {
    event.preventDefault();
    const chatText = chatInput.val();
    if (chatText !== '') {
      // Add the message to the chat history
      chatHistory.push(chatText);
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));

      // Create a new chat element
      const chatElement = $('<div class="chat"></div>');
      chatElement.text(chatText);
      chatList.append(chatElement);
      chatInput.val(''); // Clear the input field
    }
  });

  // Display chat history on page load
  displayChatHistory();
});