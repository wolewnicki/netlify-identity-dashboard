import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  netlifyIdentity = (window as any).netlifyIdentity;

  redirect = () => {
    if(window.location.href === 'https://admiring-poitras-f07eb5.netlify.app/' && this.netlifyIdentity.currentUser() !== null) {
      window.location.replace('https://admiring-poitras-f07eb5.netlify.app/dashboard')
    }
  }

  logout = () => {
      if (window.location.href !== 'https://admiring-poitras-f07eb5.netlify.app/' && this.netlifyIdentity.currentUser() === null) {
      window.location.replace('https://admiring-poitras-f07eb5.netlify.app/');
    }
  }

  ngOnInit(): void {
    this.netlifyIdentity.init();

    this.netlifyIdentity.on('logout', this.logout)

    this.netlifyIdentity.on('login', () => {
      this.redirect()
    });

    if (window.location.href !== 'https://admiring-poitras-f07eb5.netlify.app/' && this.netlifyIdentity.currentUser() === null) {
      window.location.replace('https://admiring-poitras-f07eb5.netlify.app/');
    } 
  }
 
}
