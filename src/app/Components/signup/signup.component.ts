import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  constructor(private router : Router, private authService : AuthService){}

  register(form:NgForm){
    console.log('registerForm',form)
    this.authService.registerUser(form.value.email,form.value.password)
     this.router.navigate(['/login'])
  }
  reset(form:NgForm){
   form.reset();
  }
}
