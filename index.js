import * as netlifyIdentity from 'netlify-identity-widget';
netlifyIdentity.init({ container: '.netlify-container' });
const redirect = () => {
    if (window.location.href === 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() !== null) {
        window.location.replace('https://admiring-poitras-f07eb5.netlify.app/dashboard.html');
    }
};
const logout = () => {
    if (window.location.href !== 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() === null) {
        window.location.replace('https://admiring-poitras-f07eb5.netlify.app/');
    }
};
netlifyIdentity.on('login', (u) => {
    redirect();
});
if (window.location.href !== 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() === null) {
    window.location.replace('https://admiring-poitras-f07eb5.netlify.app/');
}
netlifyIdentity.on('logout', logout);
