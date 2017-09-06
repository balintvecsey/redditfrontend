'use strict';

let url = document.querySelector('input[name="url"]');
let title = document.querySelector('input[name="title"]');
let submitButton = document.querySelector('button');
let addNewPostReq = new XMLHttpRequest();

let newPost = function() {
  addNewPostReq.onreadystatechange = function functionName() {
    window.location.href = 'index.html';
  };

  addNewPostReq.open('POST', 'http://localhost:8080/posts');
  addNewPostReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  addNewPostReq.send(JSON.stringify({title: title.value, href: url.value}));
}

submitButton.addEventListener('click', newPost);
