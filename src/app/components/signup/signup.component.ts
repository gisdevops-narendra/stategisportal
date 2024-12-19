import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  onSignUp() {
    if (this.email && this.password) {
      console.log('Signing up with', this.email, this.password);
      // Add logic for signing up here (e.g., API call to register the user)
    } else {
      alert('Please fill in both fields.');
    }
  }
}
