import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/signin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private signIn: SigninService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(
    e: InputEvent,
    name: string,
    password: string,
    repassword: string
  ): void {
    e.preventDefault();

    if (name.length > 5 && password.length > 5 && password === repassword) {
      this.signIn.signIn({ name, password }).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
          this._snackBar.open(err, 'Continuar', {
            duration: 2000,
          });
        },
      });
    }
    if (name.length < 5) {
      this._snackBar.open(
        'Your user name should have at least 4 characters',
        'Continuar',
        {
          duration: 2000,
        }
      );
    }
    if (password.length < 5) {
      this._snackBar.open(
        'Your passowrd should have at least 4 characters',
        'Continuar',
        {
          duration: 2000,
        }
      );
    }

    if (password !== repassword) {
      this._snackBar.open('The passwords does not match', 'Continuar', {
        duration: 2000,
      });
      return;
    }
  }
  redirectToLogin(e: InputEvent) {
    this.router.navigate(['login']);
  }
}
