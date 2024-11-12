import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, IconsModule, RouterLink], // Import CommonModule and FormsModule here
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}
  
  isLoading = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    
    this.isLoading = true;
    // Simulate sign-up process
    setTimeout(() => {
      this.isLoading = false;
      alert('Sign-up successful!');
      form.reset();

      // Redirect to auction page after sign-up
      this.router.navigate(['/auction-page']);
    }, 2000); // replace with actual sign-up API call
}

}
