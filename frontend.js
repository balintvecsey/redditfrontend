'use strict';

let http = new XMLHttpRequest();

window.onload = function() {
  let postList = document.querySelector('ol');

  http.onreadystatechange = function() {
    if(http.readyState === 4 && http.status === 200) {
      let postListResponse = JSON.parse(http.response);
      postListResponse.posts.forEach(function(postData) {

        let post = document.createElement('li');
        let voteContainer = document.createElement('div');
        let contentContainer = document.createElement('div');
        let voteCounter = document.createElement('p');
        let upvoteButton = document.createElement('img');
        let downvoteButton = document.createElement('img');
        let contentText = document.createElement('a');
        let submittedText = document.createElement('p');
        let modifyButton = document.createElement('p');
        let deleteButton = document.createElement('p');

        voteContainer.className = 'vote container';
        contentContainer.className = 'content container';
        voteCounter.className = 'votecounter';
        upvoteButton.src = 'assets/upvote.png';
        downvoteButton.src = 'assets/downvote.png';

        submittedText.innerHTML = 'submitted 1 month ago by anonymous';
        modifyButton.className = 'modify';
        modifyButton.innerHTML = modifyButton.className;
        deleteButton.className = 'delete';
        deleteButton.innerHTML = deleteButton.className;

        voteCounter.innerText = postData.score;
        contentText.innerText = postData.title;
        contentText.href = postData.href;

        post.appendChild(voteContainer);
        voteContainer.appendChild(upvoteButton);
        voteContainer.appendChild(voteCounter);
        voteContainer.appendChild(downvoteButton);

        post.appendChild(contentContainer);
        contentContainer.appendChild(contentText);
        contentContainer.appendChild(submittedText);
        contentContainer.appendChild(modifyButton);
        contentContainer.appendChild(deleteButton);

        postList.appendChild(post);
        console.log(voteCounter);
      })
    }
  }

  http.open('GET', 'http://localhost:8080/posts');
  http.send();
}
