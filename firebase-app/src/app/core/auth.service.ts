import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database-deprecated';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

export class EmailPasswordCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
  }
}
