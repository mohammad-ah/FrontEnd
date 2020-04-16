import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminUser = 'lionos';
  adminPass = 'happyPanda';
  error: string;
  asAdmin: boolean;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    asAdmin: new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.value.asAdmin) {
      if (
        this.form.value.username === this.adminUser &&
        this.form.value.password === this.adminPass
      ) {
        this.router.navigateByUrl('/admin');
      } else {
        this.error = 'wrong username or password';
      }
    }
  }

}
