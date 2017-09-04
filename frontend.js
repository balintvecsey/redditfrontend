'use strict';

let postList = document.querySelector('ol');
let post = document.createElement('li');
let voteContainer = document.createElement('div');
let contentContainer = document.createElement('div');
let voteCounter = document.createElement('p');
let upvoteButton = document.createElement('img');
let downvoteButton = document.createElement('img');
let score = 0;

voteContainer.className = 'vote container';
contentContainer.className = 'content container';
voteCounter.className = 'votecounter';
upvoteButton.src = 'assets/upvote.png';
downvoteButton.src = 'assets/downvote.png';

post.appendChild(voteContainer);
voteContainer.appendChild(upvoteButton);
voteCounter.innerHTML = score;
voteContainer.appendChild(voteCounter);
voteContainer.appendChild(downvoteButton);

post.appendChild(contentContainer);

postList.appendChild(post);

console.log(upvoteButton);
console.log(voteContainer);
console.log(contentContainer);
console.log(post);
