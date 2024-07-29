import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DividerModule,ButtonModule,InputTextModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService : AuthService,private router : Router){}
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  password =  new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])

  loginForm = new FormGroup({
    email : this.email,
    password : this.password
  })

  submit(form:FormGroup){
    console.log(this.loginForm)
    this.authService.loginUser(form.value.email,form.value.password)
    this.router.navigate(['/createbin'])
  }
  reset(){
    this.loginForm.reset();
  }

}
