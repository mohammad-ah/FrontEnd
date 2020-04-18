import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error;
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  });

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }


  submit() {
    console.log(this.form.value);
    this.auth.register(this.form.value).subscribe(() => {
      this.router.navigateByUrl('/login');
    }, (err) => {
      this.error = 'Invalid credentials';

      console.error(err);
    });
  }

  login(formGroup) {
    // console.log(formGroup.form.value.username);
    // this.auth.login(formGroup.form.value).subscribe(() => {
    //   this.router.navigateByUrl('/login');
    // }, (err) => {
    //   this.error = 'Invalid credentials';
    //
    //   console.error(err);
    // });
  }
}
