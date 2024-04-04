import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/shared/interfaces';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'router-app';
  authService = inject(AuthService)
  http = inject(HttpClient)

  constructor(private router: Router) {}
  ngOnInit(): void {
      this.http.get<{user: UserInterface}>('https://api.realworld.io/api/user')
      .subscribe({
        next: response => {
          this.authService.currentUserSig.set(response.user)
        },
        error: () => {
          this.authService.currentUserSig.set(null)
        }
      })
  }

  goToContact($event: Event) {
    $event.preventDefault()
    this.router.navigate(['contact', 'us']); // compose the url by adding the paths
  }
}
