const redirect = () => {
  if(window.location.href === 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() !== null) {
    window.location.replace('https://admiring-poitras-f07eb5.netlify.app/dashboard.html')
  }
}

netlifyIdentity.currentUser();
netlifyIdentity.on('login', () => redirect);

if (window.location.href !== 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() === null) {
  window.location.replace('https://admiring-poitras-f07eb5.netlify.app/');
}