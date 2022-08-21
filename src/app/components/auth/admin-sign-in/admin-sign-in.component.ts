import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css'],
})
export class AdminSignInComponent implements OnInit {
  data: any = {
    email: '',
    password: '',
  };
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  checkLogin = () => {
    this.authService
      .adminLogin({
        email: this.data.email,
        password: this.data.password,
      })
      .subscribe({
        next: (res) => {
          console.log(res);

          alert(res.message);
          localStorage.setItem('admin', JSON.stringify(res));
          this.router.navigateByUrl('/dashboard');
          setTimeout(() => {
            window.location.reload();
          }, 50);
        },
      });
  };
}
