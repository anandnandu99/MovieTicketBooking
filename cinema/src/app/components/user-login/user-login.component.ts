// user-login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    // Call the authenticateUser method from the UserService
    this.userService.authenticateUser(this.username, this.password).subscribe(
      (user) => {
        // Handle successful login (e.g., navigate to another page)
        console.log('Login successful!', user);
        // Navigate to UserHome with user object as query parameter
        alert("Login Successful");
        this.router.navigate(['/user-home', user.id]);
      },
      (error) => {
        // Handle login error (e.g., display an error message)
        console.error('Login failed!', error);
      }
    );
  }
}
