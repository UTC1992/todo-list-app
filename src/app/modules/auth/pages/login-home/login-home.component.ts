import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login-home',
  imports: [LoginFormComponent],
  templateUrl: './login-home.component.html',
  styleUrl: './login-home.component.scss',
})
export class LoginHomeComponent {}
