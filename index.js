netlifyIdentity.on('init', user => {
  console.log(user)
})

if (netlifyIdentity.currentUser() === null) {
  window.location.replace('https://admiring-poitras-f07eb5.netlify.app/')
}

console.log(netlifyIdentity.currentUser());