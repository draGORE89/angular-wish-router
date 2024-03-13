import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'router-app';

  goToContact($event: Event) {
    $event.preventDefault()
    this.router.navigate(['contact', 'us']); // compose the url by adding the paths
  }
}
