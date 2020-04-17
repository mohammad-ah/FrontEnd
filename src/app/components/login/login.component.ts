import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  };

  adminUser = 'lionos';
  adminPass = 'happyPanda';
  error: string;
  asAdmin: boolean;
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    asAdmin: new FormControl()
  });

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }

  submit() {
    console.log(this.form.value.username)
    if (this.form.value.username === null || this.form.value.password === null) {
      this.error = 'Please fill username and password';
      return;
    }
    this.error = '';
    if (this.form.value.asAdmin !== undefined && this.form.value.asAdmin) {
      if (
        this.form.value.username === this.adminUser &&
        this.form.value.password === this.adminPass
      ) {
        this.router.navigateByUrl('/admin');
      }
    } else {
      this.login(this);
    }
  }

  login(formGroup) {
    console.log(formGroup.form.value.username);
    this.auth.login(formGroup.form.value).subscribe(() => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      this.error = 'Invalid credentials';

      console.error(err);
    });  }
}
