import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  isLoginView = true;
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
    _token: '',
  };
  loginObj: any = {
    userName: '',
    password: '',
    _token: '',
  };

  constructor(protected router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }

    this.initializeLoginSignupLogic();
  }

  generateToken(length: number): string {
    let token = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  onSignUp() {
    this.signupObj._token = this.generateToken(16);
    const existingUser = this.signupUsers.find(
      (user) =>
        user.userName === this.signupObj.userName &&
        user.email === this.signupObj.email &&
        user.password === this.signupObj.password
    );
    if (existingUser != undefined) {
      alert('Account already exists!');
    } else {
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
      this.signupObj = {
        userName: '',
        email: '',
        password: '',
        _token: '',
      };
      alert(
        'Account created successfully! Kindly login using the same credentials'
      );
      this.showLogin();
      this.router.navigate(['/login-signup']);
    }
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(
      (m) =>
        m.userName == this.loginObj.userName &&
        m.password == this.loginObj.password
    );
    if (isUserExist != undefined) {
      alert('User Logged in successfully');
      localStorage.setItem('token', isUserExist._token);
      this.router.navigate(['/home']);
    } else {
      alert('Wrong credentials');
    }
  }

  onLogout() {
    this.authService.Logout();
    this.router.navigate(['/login-signup']);
  }
  showLogin() {
    this.isLoginView = true;
    // (document.getElementById('login') as HTMLInputElement).checked = true;
    // (document.getElementById('signup') as HTMLInputElement).checked = false;
  }

  showSignup(event: Event) {
    event.preventDefault();
    this.isLoginView = false;
    // (document.getElementById('signup') as HTMLInputElement).checked = true;
    // (document.getElementById('login') as HTMLInputElement).checked = false;
  }

  initializeLoginSignupLogic(): void {
    const loginBtn = document.querySelector('label.login') as HTMLElement;
    const signupBtn = document.querySelector('label.signup') as HTMLElement;
    const signupLink = document.querySelector('form .signup-link a') as HTMLElement;

    signupBtn.onclick = () => {
      this.showSignup(new Event('click'));
    };

    loginBtn.onclick = () => {
      this.showLogin();
    };

    signupLink.onclick = (event) => {
      event.preventDefault();
      signupBtn.click();
    };
  }
}
