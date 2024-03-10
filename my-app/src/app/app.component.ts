
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('imageAnimation', [
      state('home3', style({
        opacity: 1
      })),
      state('home4', style({
        opacity: 0
      })),
      transition('home3 <=> home4', animate('3s'))
    ])
  ]
})

export class AppComponent implements OnInit {
  title = 'my-app';
  currentImageSource: string | undefined;
  images: string[] = ['assets/ultracode home3.PNG', 'assets/ultracode home4.PNG'];
  currentIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentImageSource = this.images[this.currentIndex];

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImageSource = this.images[this.currentIndex];
    }, 3000);
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
}

