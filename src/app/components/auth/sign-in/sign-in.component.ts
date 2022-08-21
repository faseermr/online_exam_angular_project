import { Component, OnInit } from '@angular/core';
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

  checkLogin = () => {
    this.authService
      .login({
        email: this.data.email,
        password: this.data.password,
      })
      .subscribe({
        next: (res) => {
          alert(res.message);
          localStorage.setItem('student', JSON.stringify(res));
          this.router.navigateByUrl('/dashboard');
          setTimeout(() => {
            window.location.reload();
          }, 50);
        },
      });
  };
}
