import {inject, Injectable} from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = inject(AngularFireAuth)
  constructor(
  ) {}

  login(email : string, password : string) {
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  logout() {
    this.auth.signOut();
  }
}
