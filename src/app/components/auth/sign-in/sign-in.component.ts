import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  data: any = {
    email: '',
    password: '',
  };
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }
  checkLogin = () => {
    //console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        if (res.message) {
          alert(res.message);
          localStorage.setItem('student', JSON.stringify(res));
          this.router.navigateByUrl('/dashboard');
          setTimeout(() => {
            window.location.reload();
          }, 50);
        } else {
          alert(res.error);
        }
      },
    });
  };
}
