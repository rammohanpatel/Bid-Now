import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, IconsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      signInData = {
        email : '',
        password : ''
      };

      constructor(private router : Router){}

      isLoading = false;

      onSubmit(form : NgForm){
        if(form.invalid) return ;

        this.isLoading = true;
        setTimeout(()=>{
            this.isLoading = false;
            alert('Sign-in successful!');
            form.reset();

            this.router.navigate(['/auction-page'])
        },2000);
      }
}
