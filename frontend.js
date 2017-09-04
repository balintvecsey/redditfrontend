'use strict';

let postList = document.querySelector('ol');
let post = document.createElement('li');
let voteContainer = document.createElement('div');
let contentContainer = document.createElement('div');

voteContainer.className = 'vote container';
contentContainer.className = 'content container';

post.appendChild(voteContainer);
post.appendChild(contentContainer);
postList.appendChild(post);

console.log(voteContainer);
console.log(contentContainer);
console.log(post);
