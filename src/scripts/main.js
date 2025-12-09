'use strict';

const tree = document.querySelector('.tree');
const headers = tree.querySelectorAll('li');

headers.forEach((header) => {
  const span = document.createElement('span');

  span.textContent = header.firstChild.textContent;
  header.firstChild.replaceWith(span);
});

const newSpan = tree.querySelectorAll('span');

newSpan.forEach((span) => {
  const next = span.nextElementSibling;

  if (next && next.tagName === 'UL') {
    span.addEventListener('click', () => {
      next.hidden = !next.hidden;
    });
  }
});
