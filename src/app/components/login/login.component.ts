import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';  // Changed from 'username' to 'email'
  password: string = '';

  constructor(private router: Router) {}  // Inject Router into the constructor

  onLogin() {
    if (this.email && this.password) {
      console.log('Logging in with', this.email, this.password);
      // Add logic for authentication here

      // On successful login, navigate to the dashboard
      this.router.navigate(['/dashboard']);  // Adjust the route as needed
    } else {
      alert('Please fill in both fields.');
    }
  }
}
