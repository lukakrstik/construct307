import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";

const firebaseConfig = {
  apiKey: "AIzaSyApwYDVsoqTZgCWtybqBMNw_BtymeD7In4",
  authDomain: "construct307.firebaseapp.com",
  projectId: "construct307",
  storageBucket: "construct307.appspot.com",
  messagingSenderId: "333974960624",
  appId: "1:333974960624:web:25ddf745403cba15d2c535",
  measurementId: "G-3SFWD53X5G"
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig}
  ],
};
