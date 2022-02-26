let selector='a[href*="://"]';
let links=document.querySelectorAll(selector);
links.forEach(link=>link.style.color="green");