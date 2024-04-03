import { AuthService } from './../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH_URL } from 'src/shared/constants';
import { UserInterface } from 'src/shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  authService = inject(AuthService)
  constructor(private router: Router, private httpClient: HttpClient) { }

  submitForm($event: SubmitEvent): void {
    $event.preventDefault()
    this.httpClient
      .post<{user: UserInterface}>(AUTH_URL + '/login', {user: this.loginForm.getRawValue()})
      .subscribe(response => {
        console.log(response)
        localStorage.setItem('token', response.user.token)
        this.authService.currentUserSig.set(response.user)
        this.router.navigateByUrl('/')
      })
  }

  goToRegister($event: Event) {
    $event.preventDefault()
    this.router.navigateByUrl('/register')
  }

  logout() {
    console.log('logout')
    localStorage.setItem('token', '')
    this.authService.currentUserSig.set(null)
  }
}
