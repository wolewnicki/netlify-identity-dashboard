import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  netlifyIdentity = (window as any).netlifyIdentity;

  ngOnInit(): void {
    console.log(this.netlifyIdentity)
    console.log(this.netlifyIdentity.currentUser())
    // this.netlifyIdentity.init({container: '.netlify-container'})
    console.log(this.netlifyIdentity.init)
  }
}
