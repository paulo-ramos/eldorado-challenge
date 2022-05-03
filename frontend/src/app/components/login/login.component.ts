import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  newName:string = '';
  newEmail:string = '';
  newPassword:string = '';

  email:string = '';
  password:string = '';
  newAccountDialog: boolean = false;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void { 
  }

  onLogin(): void {
    
    this.loginService.logon(this.email, this.password).subscribe(response => {
      const token = response.content.token
      const user = response.content.user
      const logonDate = response.content.logonDate

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('logonDate', logonDate.toString())

    })

  }

  onNewAccount(): void {
    this.newAccountDialog = true;
  }

  hideNewAccountDialog(): void {
    this.newAccountDialog = false;
  }

  onCreateAccount(): void {
    
    this.loginService.createAccount(this.newName, this.newEmail, this.newPassword).subscribe(response => {
      this.hideNewAccountDialog();
    })
  }

}
