import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// signals allows different places in the app to access a value inside the signal (will be automatically rerendered)
  currentUserSig = signal<UserInterface | null | undefined>(undefined)
}
