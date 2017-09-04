'use strict';

let postList = document.querySelector('ol');
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
contentText.href = 'https://www.google.hu/';
contentText.innerHTML = 'Example - Jump to Google';
submittedText.innerHTML = 'submitted 1 month ago by anonymous';
modifyButton.className = 'modify';
modifyButton.innerHTML = modifyButton.className;
deleteButton.className = 'delete';
deleteButton.innerHTML = deleteButton.className;

post.appendChild(voteContainer);
voteContainer.appendChild(upvoteButton);
voteCounter.innerHTML = 0;
voteContainer.appendChild(voteCounter);
voteContainer.appendChild(downvoteButton);

post.appendChild(contentContainer);
contentContainer.appendChild(contentText);
contentContainer.appendChild(submittedText);
contentContainer.appendChild(modifyButton);
contentContainer.appendChild(deleteButton);

postList.appendChild(post);

console.log(upvoteButton);
console.log(voteContainer);
console.log(contentContainer);
console.log(post);
