import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string;
  email: string;
  address: string;
  password: string;

  constructor(private router: Router) {
    this.name = '';
    this.email = '';
    this.address = '';
    this.password = '';
  }

  register(): void {
    // Here, you can implement the logic to handle the registration form submission.
    // For example, you can send the form data to a backend API for processing.
    // Once the registration is successful, you can navigate to the meeting page.

    // For demo purposes, let's simply log the form data and navigate to the meeting page.
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Address:', this.address);
    console.log('Password:', this.password);

    // Assuming registration is successful, navigate to the meeting page
    this.router.navigate(['/meeting']);
  }
}