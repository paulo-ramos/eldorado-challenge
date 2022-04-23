import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  logar(): void {
    this.loginService.autenticar(this.email, this.password).subscribe(response => {
      const token = response.content.token
      localStorage.setItem('token', token)
    })
  }

}
