import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private login: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(e: InputEvent, name: string, password: string): void {
    e.preventDefault();
    console.log(name, password);
    if (name.length < 5) {
      this._snackBar.open(
        'Your user name should have at least 4 characters',
        'Continuar',
        {
          duration: 2000,
        }
      );
      return;
    }
    if (password.length < 5) {
      this._snackBar.open(
        'Your passowrd should have at least 4 characters',
        'Continue',
        {
          duration: 2000,
        }
      );
      return;
    }

    this.login.logIn({ name, password }).subscribe({
      next: () => {
        this.router.navigate(['/sensors']);
      },
      error: (err) => {
        this._snackBar.open(err, 'Continue', {
          duration: 2000,
        });
      },
    });
  }
  redirectToSign(e: InputEvent): void {
    this.router.navigate(['/signin']);
  }
}
