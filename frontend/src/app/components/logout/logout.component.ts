import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  router: Router;
  constructor(router: Router) {
    this.router = router; 
  }

  ngOnInit(): void {
  }

  onLogout(): void {    

    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('logonDate')

    this.router.navigate(['/', 'login']);

}

}
