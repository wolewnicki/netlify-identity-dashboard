System.register(["netlify-identity-widget"], function (exports_1, context_1) {
    "use strict";
    var netlifyIdentity, redirect, logout;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (netlifyIdentity_1) {
                netlifyIdentity = netlifyIdentity_1;
            }
        ],
        execute: function () {
            netlifyIdentity.init({ container: '.netlify-container' });
            redirect = function () {
                if (window.location.href === 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() !== null) {
                    window.location.replace('https://admiring-poitras-f07eb5.netlify.app/dashboard.html');
                }
            };
            exports_1("logout", logout = function () {
                if (window.location.href !== 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() === null) {
                    window.location.replace('https://admiring-poitras-f07eb5.netlify.app/');
                }
            });
            netlifyIdentity.on('login', function (u) {
                redirect();
            });
            if (window.location.href !== 'https://admiring-poitras-f07eb5.netlify.app/' && netlifyIdentity.currentUser() === null) {
                window.location.replace('https://admiring-poitras-f07eb5.netlify.app/');
            }
            netlifyIdentity.on('logout', logout);
        }
    };
});
