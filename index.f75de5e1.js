"use strict";
const tree = document.querySelector(".tree");
const headers = tree.querySelectorAll("li");
headers.forEach((header)=>{
    const span = document.createElement("span");
    if (header.firstElementChild !== null) {
        span.textContent = header.firstChild.textContent;
        header.firstChild.replaceWith(span);
    }
});
const newSpan = document.querySelectorAll("span");
newSpan.forEach((span)=>{
    if (!span) return;
    span.addEventListener("click", ()=>{
        if (span.nextElementSibling.hidden === true) span.nextElementSibling.hidden = false;
        else span.nextElementSibling.hidden = true;
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
