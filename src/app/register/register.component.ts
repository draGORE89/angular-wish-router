import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH_URL } from 'src/shared/constants';
import { UserInterface } from 'src/shared/interfaces';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) { }

  // We need to notify the application, that we are logged in / create service - add signal /
  submitForm($event: SubmitEvent) {
    $event.preventDefault()
    this.httpClient
      .post<{user: UserInterface}>(AUTH_URL, {user: this.registerForm.getRawValue()})
      .subscribe(response => {
        console.log(response)
        localStorage.setItem('token', response.user.token)
        this.authService.currentUserSig.set(response.user)
        this.router.navigateByUrl('/')
      })
  }
}
