const redirect = () => {
  if(window.location.href === 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() !== null) {
    window.location.replace('https://admiring-poitras-f07eb5.netlify.app/dashboard.html')
  }
}

console.log(netlifyIdentity.currentUser());
netlifyIdentity.on('init', () => redirect());

if (window.location.href !== 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() === null) {
  window.location.replace('https://admiring-poitras-f07eb5.netlify.app/');
}