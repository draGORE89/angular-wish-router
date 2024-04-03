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
    const token = localStorage.getItem('token') ?? ''
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Token ${token}` : ''
      })
    }
    if (token) {
      this.http.get<{user: UserInterface}>('https://api.realworld.io/api/user', options)
      .subscribe(response => {
        this.authService.currentUserSig.set(response.user)
      })
    }
  }

  goToContact($event: Event) {
    $event.preventDefault()
    this.router.navigate(['contact', 'us']); // compose the url by adding the paths
  }
}
